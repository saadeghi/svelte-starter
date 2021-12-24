<script context="module">
	export async function load({ page, fetch }) {
		const post = await fetch(`${page.path}.json`).then(res => res.json());

		if ( page.path != '/blog' && ( !post || !post.published) ) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}
		return {
			props: {
				path: page.path,
				post
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
  import SEO from '@components/SEO.svelte'
	export let post
	export let path
</script>
{#key $page.path}
	<SEO
		title={post.title}
		desc={post.desc}
	/>
{/key}
{#if path == '/blog'}
	<slot />
{:else}
	<div class="w-full max-w-7xl mx-auto px-4">
		<a class="btn" href="/blog">back</a>
		<div class="prose my-10">
			<h1>{post.title ? post.title : ''}</h1>
			<slot />
		</div>
	</div>
{/if}