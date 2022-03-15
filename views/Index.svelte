<script>
  import Layout from './Layout.svelte';
  export let pesan;
</script>

<svelte:head>
  <title>Index</title>
</svelte:head>

<Layout>
  <h1>{pesan}</h1>
</Layout>
