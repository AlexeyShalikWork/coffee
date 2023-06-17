<script lang="typescript">
  import { onMount, afterUpdate } from "svelte";
  import { useTimer } from "utils/timer";
  import { useScroll } from "utils/scroll";
  import IconButton from "components/buttons/IconButton.svelte";
  import Ribbon from "./Ribbon.svelte";
  import Card from "./Card.svelte";
  import { useCoffee } from "useCases";

  const { fetchRandomCoffee, fetchCoffeeImage } = useCoffee();
  const { start, stop } = useTimer();
  const { scrollToElement } = useScroll();

  const timerTimeout = 30000;
  let isLoading = false;
  let isNeedScrollToLastElement = false;
  $: coffee = [];
  $: images = {};

  onMount(() => {
    (async () => await fetchCoffee())();
  });

  afterUpdate(() => {
    if (isNeedScrollToLastElement) {
      scrollToElement('last-card-ribbon');
      isNeedScrollToLastElement = false;
    }
  });

  const fetchCoffee = async () => {
    isLoading = true;
    const randomCoffee = await fetchRandomCoffee();
    isLoading = false;

    if (randomCoffee) {
      coffee = [...coffee, randomCoffee];
      fetchCoffeeImage().then((url: string) => {
        images = {
          [randomCoffee.id]: url,
          ...images,
        };
      });
    }

    start(timerTimeout, () => fetchCoffee());
  };

  const onClick = async () => {
    if (!isLoading) {
      stop();
      await fetchCoffee();
      isNeedScrollToLastElement = true;
    }
  }
</script>

<div id="card-ribbon">
  <Ribbon>
    {#each coffee as item}
      <Card coffee={item} image={images[item.id]} />
    {/each}
    <div id="last-card-ribbon"></div>
  </Ribbon>
  <IconButton onClick={onClick}>+</IconButton>
</div>

<style lang="less">
  #card-ribbon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    width: 100%;
  }
</style>
