import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'kevscript'
	}
});

export default app;