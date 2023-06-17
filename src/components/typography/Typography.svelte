<script lang="typescript">
  export let variant: 'title' | 'subtitle' | 'body';
  export let color: string;
</script>

<span class={variant} style="--color: {color};"><slot></slot></span>

<style lang="less">
  span {
    font-family: Tahoma, sans-serif;
    cursor: default;
    color: var(--color);
  }

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .subtitle {
    font-size: 16px;
    opacity: 0.5;
  }

  .body {
    font-size: 16px;
  }
</style>
