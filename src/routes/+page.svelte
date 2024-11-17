<script>
	import Message from "./Message.svelte";
	import {onMount} from "svelte";

	let chatMessage = "";
	const placeHolder = "오늘이에게 보낼 메시지를 입력해 보세요.";
	const url = "https://jmyth-176667264008.us-central1.run.app"

	let welcomeTextEnabled = false;
	let loading = false;
	let loadingText;
	let threadId;

	let inputDisabled = false;
	let messages = [];

	onMount(() => {
		// focus on the input element
		threadId = localStorage.getItem("threadId");
		if (threadId == null) {
			welcomeTextEnabled = true;
		} else {
			loadingText = "이전 대화 내용을 불러오는 중...";
			loading = true;
			getAllMessages(threadId);
		}
		console.log(threadId);
		console.log(messages);
	});

	/**
	 * Get all messages from the server
	 * threadId is string
	 * @param {string} threadId
	 */
	async function getAllMessages(threadId) {
		// POST 요청으로 threadId 생성
		inputDisabled = true;
		try {
			const response = await fetch(`${url}/assistant/thread/${threadId}/message`, {
				method: "GET",
			});

			if (!response.ok) {
				alert("메시지 불러오기에 실패했습니다. 나중에 다시 시도해 주세요.");
			}

			const responseJson = await response.json();
			console.log(responseJson);
			// messages는 배열로 반환됨
			var ret = [];
			for (var i = 0; i < responseJson.length; i++) {
				const { content, role } = responseJson[i];
				const { text } = content[0];
				const { value } = text;

				ret.push({message: value, role: role});
			}

			messages = ret.reverse();
		} catch (error) {
			console.error("Error getting all messages:", error);
			alert("메시지 불러오기에 실패했습니다. 나중에 다시 시도해 주세요.");
		} finally {
			inputDisabled = false;
			loading = false;
		}
	}

	async function sendMessage() {
		if (chatMessage === "") {
			return;
		}
		try {
			welcomeTextEnabled = false;
			inputDisabled = true;
			loadingText = "메시지 전송 중...";
			loading = true;

			if (threadId == null) {
				if (!await initializeThread()) {
					alert("대화 생성에 실패했습니다. 나중에 다시 시도해 주세요.")
					return;
				}
			}

			var result = await getNextMessage(chatMessage);
			if (result == null) {
				alert("메시지 전송에 실패했습니다. 나중에 다시 시도해 주세요.");
				return;
			}


			messages = [...messages,
				{message: chatMessage, role: "user"},
				...result.reverse()
			];
			chatMessage = "";
		} catch (error) {
			console.error("Error sending message:", error);
		} finally {
			inputDisabled = false;
			loading = false;
		}
	}

	async function initializeThread() {
		try {
			// POST 요청으로 threadId 생성
			const response = await fetch(`${url}/assistant/thread`, {
				method: "POST",
			});

			if (!response.ok) {
				console.error("Failed to initialize thread");
				return false;
			}

			threadId = await response.text(); // 서버에서 받은 threadId 저장
			localStorage.setItem("threadId", threadId); // Local Storage에 저장
			return true;
		} catch (error) {
			console.error("Error initializing thread:", error);
			return false;
		}
	}

	async function getNextMessage(message) {
		try {
			const response = await fetch(`${url}/assistant/thread/${threadId}/message`, {
				method: "POST",
				headers: {
					"Content-Type": "plain/text",
				},
				body: message,
			});

			if (!response.ok) {
				console.error("Failed to get next message");
				return null;
			}

			const messages = await response.json();
			console.log(messages);
			// messages는 배열로 반환됨
			var ret = [];
			for (var i = 0; i < messages.length; i++) {
				const { content, role } = messages[i];
				const { text } = content[0];
				const { value } = text;

				ret.push({message: value, role: role});
			}

			return ret;
		} catch (error) {
			console.error("Error getting next message:", error);
			return null;
		}
	}

	async function deleteThread() {
		if (threadId == null) {
			return;
		}
		if (!confirm("정말 대화를 초기화하시겠습니까?")) {
			return;
		}

		try {
			inputDisabled = true;
			loadingText = "대화 초기화 중...";
			loading = true;

			const response = await fetch(`${url}/assistant/thread/${threadId}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				console.error("Failed to delete thread");
				alert("대화 초기화에 실패했습니다. 나중에 다시 시도해 주세요.");
				return;
			}

			localStorage.removeItem("threadId");
			threadId = null;
			welcomeTextEnabled = true;
			messages = [];
		} catch (error) {
			console.error("Error deleting thread:", error);
		} finally {
			inputDisabled = false;
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
</svelte:head>

<section class="w-full flex flex-col align-top justify-center p-8">
	{#if welcomeTextEnabled}
		<p class="text-center text-2xl font-bold mb-4 bg-blue-400 rounded-xl p-2">아무 말이나 입력해서<br>오늘이와 대화를 시작해 보세요!</p>
	{/if}
	{#if loading }
		<p class="text-center text-2xl font-bold mb-4 bg-blue-400 rounded-xl p-2">{loadingText}</p>
	{/if}
	<div id="messages-container">
		<!-- for each messages, render -->
		{#each messages as message (message)}
			<Message message={message.message} role={message.role} />
		{/each}
<!--		<Message message="Hello, SvelteKit!" role="user" />-->
<!--		<Message message="어쩌구저쩌구 등등등 짱 긴 메시지어쩌구저쩌구 등등등 짱 긴 메시지어쩌구저쩌구 등등등 짱 긴 메시지어쩌구저쩌구 등등등 짱 긴 메시지어쩌구저쩌구 등등등 짱 긴 메시지어쩌구저쩌구 등등등 짱 긴 메시지어쩌구저쩌구 등등등 짱 긴 메시지" role="assistant" />-->
	</div>

	<form class="flex" on:submit={sendMessage}>
		<input class="flex-grow" bind:value="{chatMessage}" placeholder={placeHolder} disabled="{inputDisabled}" />
		<button class="flex-shrink-0 rounded-lg p-2 ml-2 bg-blue-400" type="submit" disabled="{inputDisabled}">보내기</button>
		<button class="flex-shrink-0 rounded-lg p-2 ml-2 bg-red-400" on:click={deleteThread} disabled="{inputDisabled}">대화 초기화</button>
	</form>
</section>

<style>
</style>
