export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "jmyth-front/_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.D3lIB_Ug.js","app":"_app/immutable/entry/app.DflArvgM.js","imports":["_app/immutable/entry/start.D3lIB_Ug.js","_app/immutable/chunks/entry.DWu6C2-n.js","_app/immutable/chunks/runtime.CfWXK4fg.js","_app/immutable/entry/app.DflArvgM.js","_app/immutable/chunks/runtime.CfWXK4fg.js","_app/immutable/chunks/render.Yls9UIfI.js","_app/immutable/chunks/disclose-version.-8ibBl-a.js","_app/immutable/chunks/index-client.CG1KUufb.js","_app/immutable/chunks/store.DgtAlgWT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();