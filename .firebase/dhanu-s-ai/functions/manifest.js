export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["prepare.sh","robots.txt","site.webmanifest","sitemap.xml","service-worker.js"]),
	mimeTypes: {".sh":"application/x-sh",".txt":"text/plain",".webmanifest":"application/manifest+json",".xml":"application/xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cf044436.js","imports":["_app/immutable/entry/start.cf044436.js","_app/immutable/chunks/index.9208791c.js","_app/immutable/chunks/index.b640c23f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.472b18cf.js","imports":["_app/immutable/entry/app.472b18cf.js","_app/immutable/chunks/index.9208791c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
