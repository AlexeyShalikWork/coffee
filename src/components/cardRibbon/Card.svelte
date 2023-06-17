<script lang="ts">
  import { fly } from 'svelte/transition';
  import Typography from "components/typography/Typography.svelte";
  import { Coffee } from "models/Coffee";

  export let coffee: Coffee;
  export let image: string | undefined;
</script>

<div id="card">
  <div class="intensifier-label">
    <Typography variant="body" color="#FFFFFF">{coffee.intensifier}</Typography>
  </div>
  {#if image}
    <div class="image" in:fly={{ y: -190 }} style="--image: url({image});"></div>
  {:else}
    <div class="image-placeholder">
      <img src="photo.png" alt="" />
    </div>
  {/if}
  <div class="info">
    <Typography variant="subtitle">{coffee.origin}</Typography>
    <Typography variant="title">{coffee.blendName}</Typography>
    <Typography variant="body">{coffee.variety}</Typography>
    <div class="notes">
      {#each coffee.notes as item}
        <div class="note">
          <Typography variant="body">{item}</Typography>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="less">
  #card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 300px;
    background: #FFFFFF;
    border-radius: 5px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 20px;
  }

  .notes {
    display: flex;
    gap: 8px;
    width: 100%;
    overflow-x: auto;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .note {
    height: 20px;
    padding: 5px 15px;
    background: #4ac54a;
    border-radius: 5px;
    white-space: nowrap;
  }

  .image {
    height: 190px;
    width: 100%;
    background-image: var(--image);
    background-size: cover;
    background-repeat: no-repeat;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 190px;
    width: 100%;
    background-color: #F2F2F2;

    img {
      height: 70px;
    }
  }

  .intensifier-label {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px 15px;
    background: #CB4578;
    border-radius: 5px;
  }
</style>
