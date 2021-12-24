<script>
	import 'prism-themes/themes/prism-material-dark.css'
  import '../global.css'
  import Navbar from '@components/Navbar.svelte'
  import Scripts from '@components/Scripts.svelte'
</script>
<Navbar/>
<slot />
<Scripts/>