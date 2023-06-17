<script lang="typescript">
  export let onClick;
</script>

<button on:click={onClick}><slot></slot></button>

<style lang="less">
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #FF0000FF;
    color: #FFFFFF;
    border: 0;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      background: #FF0000B9;
    }
  }
</style>
