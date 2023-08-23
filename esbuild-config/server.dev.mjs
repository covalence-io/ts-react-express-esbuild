import * as esbuild from 'esbuild';

let ctx;

try {
	ctx = await esbuild.context({
		entryPoints: ['src/server/server.ts'],
		bundle: true,
		sourcemap: true,
		minify: false,
		platform: 'node',
		target: ['node18.6'],
		packages: 'external',
		define: {
			'process.env.NODE_ENV': "'development'"
		},
		outfile: 'dist/server.js'
	});

	await ctx.watch();
	console.log('Watching server...');
} catch (error) {
	console.error('An error occurred:', error);
	process.exit(1);
}
