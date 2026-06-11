<script lang="ts">
  import Scrollyteller from "@abcnews/svelte-scrollyteller";
  import Backgrounds from "../Backgrounds/Backgrounds.svelte";

  let { panels } = $props();
  let backgroundPanelName = $state("elonmusk");

  $effect(() => {
    console.log(backgroundPanelName);
  });
</script>

<Scrollyteller
  {panels}
  onMarker={(data) => {
    backgroundPanelName = data.panel;
  }}
  layout={{
    align: "left",
    resizeInteractive: false,
    transparentFloat: true,
  }}
>
  <div class="backgrounds">
    <Backgrounds panelName={backgroundPanelName} />
  </div>
</Scrollyteller>

<style lang="scss">
  @media (min-width: 1000px) {
    :global {
      .content--left {
        width: 100%;
        max-width: calc(50vw - 80px) !important;
      }
    }
  }
</style>
