<script lang="typescript">
  import CardRibbon from "components/cardRibbon/CardRibbon.svelte";
</script>

<div id="app">
  <CardRibbon />
</div>

<style lang="less">
  #app {
    height: 100vh;
    background: #08192c;

    @font-face {
      font-family: 'Tahoma';
      src: url('public/Tahoma.eot');
      font-weight: normal;
      font-style: normal;
    }
  }
</style>
