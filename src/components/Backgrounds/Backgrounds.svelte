<script lang="ts">
  import { fade } from "svelte/transition";

  // Constants
  const params = new URLSearchParams(window.location.search);
  const rawFade = params.get("fade");
  const parsedFade = rawFade ? Number(rawFade) : 0;

  const FADE_DURATION =
    Number.isFinite(parsedFade) && parsedFade >= 0 ? parsedFade : 0;

  const fadeEnabled = FADE_DURATION > 0;

  // --- Billionaires ---

  //Mobile
  import Elon_Musk_1 from "./billionaires/(1) Elon.png";
  import Larry_Page_2 from "./billionaires/(2) Larry.png";
  import Sergey_Brin_3 from "./billionaires/(3) Sergey.png";
  import Jeff_Bezos_4 from "./billionaires/(4) Jeff.png";
  import Gina_Rinehart_5 from "./billionaires/(5) Gina.png";

  // Desktop
  import Elon_Musk_Desktop_1 from "./billionaires/(1) Elon Desktop.png";
  import Larry_Page_Desktop_2 from "./billionaires/(2) Larry Desktop.png";
  import Sergey_Brin_Desktop_3 from "./billionaires/(3) Sergey Desktop.png";
  import Jeff_Bezos_Desktop_4 from "./billionaires/(4) Jeff Desktop.png";
  import Gina_Rinehart_Desktop_5 from "./billionaires/(5) Gina Desktop.png";

  // --- Budget ---
  import Metro from "./budget/(1) Metro.png";
  import SRL from "./budget/(2) SRL.png";
  import Healthcare from "./budget/(3) Healthcare.png";
  import Defence from "./budget/(4) Defence.png";
  import Budget from "./budget/(5) Budget.png";

  const { panelName } = $props();

  const images = {
    // Billionaires
    elonmusk: {
      mobile: Elon_Musk_1,
      desktop: Elon_Musk_Desktop_1,
      altText: "Elon Musk",
    },
    larrypage: {
      mobile: Larry_Page_2,
      desktop: Larry_Page_Desktop_2,
      altText: "Larry Page",
    },
    sergeybrin: {
      mobile: Sergey_Brin_3,
      desktop: Sergey_Brin_Desktop_3,
      altText: "Sergey Brin",
    },
    jeffbezos: {
      mobile: Jeff_Bezos_4,
      desktop: Jeff_Bezos_Desktop_4,
      altText: "Jeff Bezos",
    },
    ginarinehart: {
      mobile: Gina_Rinehart_5,
      desktop: Gina_Rinehart_Desktop_5,
      altText: "Gina Rinehart",
    },
    // Budget
    metro: {
      mobile: Metro,
      desktop: Metro,
      altText: "Metro",
    },
    srl: {
      mobile: SRL,
      desktop: SRL,
      altText: "SRL",
    },
    healthcare: {
      mobile: Healthcare,
      desktop: Healthcare,
      altText: "Healthcare",
    },
    defence: {
      mobile: Defence,
      desktop: Defence,
      altText: "Defence",
    },
    budget: {
      mobile: Budget,
      desktop: Budget,
      altText: "Budget",
    },
  };
</script>

<div class="container">
  <div class="frame">
    {#if fadeEnabled}
      {#key panelName}
        <picture
          in:fade={{ duration: FADE_DURATION }}
          out:fade={{ delay: FADE_DURATION, duration: FADE_DURATION }}
        >
          <source
            media="(min-width: 600px)"
            srcset={images[panelName].desktop}
          />
          <img src={images[panelName].mobile} alt={images[panelName].altText} />
        </picture>
      {/key}
    {:else}
      <picture>
        <source media="(min-width: 600px)" srcset={images[panelName].desktop} />
        <img src={images[panelName].mobile} alt={images[panelName].altText} />
      </picture>
    {/if}
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

  picture {
    position: absolute;
    inset: 0;
    display: block;
  }

  picture img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top center;
  }

  @media (min-width: 1000px) {
    .container {
      padding-inline: 32px;
    }
    .frame {
      width: 50%;
      transform: translateX(calc(100% + 16px));
    }

    picture img {
      object-position: center left;
      max-width: 700px;
    }
  }
</style>
