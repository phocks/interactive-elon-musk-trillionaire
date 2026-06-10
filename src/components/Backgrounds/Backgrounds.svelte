<script lang="ts">
  import Elon_Musk_1 from "./(1) Elon.png";
  import Larry_Page_2 from "./(2) Larry Page.png";
  import Sergey_Brin_3 from "./(3) Sergey Brin.png";
  import Jeff_Bezos_4 from "./(4) Jeff Bezos.png";
  import Gina_Rinehart_5 from "./(5) Gina Rinehart.png";

  const { panelName } = $props();

  const images = {
    elonmusk: { image: Elon_Musk_1, altText: "Elon Musk" },
    larrypage: { image: Larry_Page_2, altText: "Larry Page" },
    sergeybrin: { image: Sergey_Brin_3, altText: "Sergey Brin" },
    jeffbezos: { image: Jeff_Bezos_4, altText: "Jeff Bezos" },
    ginarinehart: { image: Gina_Rinehart_5, altText: "Gina Rinehart" },
  };
</script>

<div class="container">
  <div class="frame">
    <img class="base" src={Elon_Musk_1} alt={images["elonmusk"].altText} />
    <img
      class="overlay"
      src={images[panelName].image}
      alt={images[panelName].altText}
    />
  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    inset: 0;
    padding: 18px;
  }

  .frame {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top center;
  }

  /* .base {
    z-index: 1;
  }
  .overlay {
    z-index: 2;
  } */
</style>
