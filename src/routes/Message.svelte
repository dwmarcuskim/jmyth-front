<script>
    let { message, role } = $props();
    import { base } from '$app/paths';
    const imagePath = `${base}/images/ohneuri_profile.jpg`;
</script>

<div class="w-full flex nanum-gothic-regular pb-2">
    {#if role === 'user'}
        <span class="w-full text-right flex-grow"></span>
        <div class="flex flex-col flex-shrink-0 bg-white px-4 py-2 rounded-lg max-w-70p">
            <p class="text-right font-bold">사용자</p>
            <p class="text-left pr-2">{message}</p>
        </div>
    {:else}
        <img class="w-12 h-12 rounded-full mr-2" id="bot-img" src="{imagePath}" alt="bot profile">
        <div class="relative ml-1 w-full max-w-80p">
            <!-- 말풍선 꼬리 -->
            <div class="absolute top-6 right-full transform -translate-y-1/2 w-0 h-0
                    border-t-[8px] border-b-[8px] border-r-[8px] border-transparent
                    border-r-blue-200"></div>

            <!-- 말풍선 내용 -->
            <div class="flex flex-col flex-grow bg-blue-200 px-4 py-2 rounded-lg w-full">
                <p class="text-left font-bold">오늘이</p>
                <p class="text-left pl-2">{message}</p>
            </div>
        </div>
    {/if}
</div>

<style>
    .max-w-70p {
        max-width: 70%;
    }

    .max-w-80p {
        max-width: 80%;
    }

    .nanum-gothic-regular {
        font-family: "Nanum Gothic", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

</style>