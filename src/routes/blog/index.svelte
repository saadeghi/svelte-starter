<script context="module">
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch('/blog.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>
<script>
	export let posts;
</script>
<div class="flex gap-4 w-full max-w-7xl mx-auto px-4">
	{#each posts as { slug, title, desc, thumbnail }}
		<a class="card bg-base-200 w-full md:w-1/3 lg:w-1/4 shadow" href={'/blog/'+slug}>
			<figure>
				<img src={thumbnail} class="aspect-square bg-base-300" alt={title}>
			</figure> 
			<div class="card-body">
				<h2 class="card-title">{title}</h2>
				<p>{desc}</p>
			</div>
		</a>
	{/each}
</div>