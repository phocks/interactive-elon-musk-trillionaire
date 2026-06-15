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

  // Mobile
  import Elon_Musk_1 from "./Billionaires graphic/Mobile/(1) Elon.png";
  import Larry_Page_2 from "./Billionaires graphic/Mobile/(2) Larry.png";
  import Sergey_Brin_3 from "./Billionaires graphic/Mobile/(3) Sergey.png";
  import Jeff_Bezos_4 from "./Billionaires graphic/Mobile/(4) Jeff.png";
  import Gina_Rinehart_5 from "./Billionaires graphic/Mobile/(5) Gina.png";

  // Desktop
  import Elon_Musk_Desktop_1 from "./Billionaires graphic/Desktop/(1) Elon Desktop.png";
  import Larry_Page_Desktop_2 from "./Billionaires graphic/Desktop/(2) Larry Desktop.png";
  import Sergey_Brin_Desktop_3 from "./Billionaires graphic/Desktop/(3) Serg desktop.png";
  import Jeff_Bezos_Desktop_4 from "./Billionaires graphic/Desktop/(4) Jeff Desktop.png";
  import Gina_Rinehart_Desktop_5 from "./Billionaires graphic/Desktop/(5) Gina Desktop.png";

  // --- Budget ---

  // Mobile
  import One_Trillion from "./Aus Budget measures/Mobile/(1) One Tillion.png";
  import Metro from "./Aus Budget measures/Mobile/(2) Syd Metro.png";
  import Rail_Loop from "./Aus Budget measures/Mobile/(3) Rail loop.png";
  import Healthcare from "./Aus Budget measures/Mobile/(4) Health.png";
  import Defence from "./Aus Budget measures/Mobile/(5) Defence.png";
  import Budget from "./Aus Budget measures/Mobile/(6) Fed Budget.png";

  // Desktop
  import One_Trillion_Desktop from "./Aus Budget measures/Desktop/(1) 1 tillion desktop.png";
  import Metro_Desktop from "./Aus Budget measures/Desktop/(2) Syd Metro desktop.png";
  import Rail_Loop_Desktop from "./Aus Budget measures/Desktop/(3) Rail loop desktop.png";
  import Healthcare_Desktop from "./Aus Budget measures/Desktop/(4) Health desktop.png";
  import Defence_Desktop from "./Aus Budget measures/Desktop/(5) Defence desktop.png";
  import Budget_Desktop from "./Aus Budget measures/Desktop/(6) Fed Budget desktop.png";

  // All other items

  // Mobile
  import Ten_Thousand_Households from "./All other items in US dollars/Mobile/(1) 10,000 Households.png";
  import End_World_Hunger from "./All other items in US dollars/Mobile/(2) End World Hunger.png";
  import Energy_Transition from "./All other items in US dollars/Mobile/(3) Energy transition.png";
  import Fund_US_Aid from "./All other items in US dollars/Mobile/(4) Fund US aid.png";
  import Mission_To_Mars from "./All other items in US dollars/Mobile/(5) Mission to mars.png";
  import Taiwan_GDP from "./All other items in US dollars/Mobile/(6) Taiwan GDP.png";

  // Desktop
  import Ten_Thousand_Households_Desktop from "./All other items in US dollars/Desktop/(1) 10,000 Households desktop.png";
  import End_World_Hunger_Desktop from "./All other items in US dollars/Desktop/(2) End world hunger.png";
  import Energy_Transition_Desktop from "./All other items in US dollars/Desktop/(3) Energy Tranision.png";
  import Fund_US_Aid_Desktop from "./All other items in US dollars/Desktop/(4)Fund US aid.png";
  import Mission_To_Mars_Desktop from "./All other items in US dollars/Desktop/(5)Mission to Mars.png";
  import Taiwan_GDP_Desktop from "./All other items in US dollars/Desktop/(6) Taiawan.png";

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
    onetrillion: {
      mobile: One_Trillion,
      desktop: One_Trillion_Desktop,
      altText: "One Trillion",
    },
    metro: {
      mobile: Metro,
      desktop: Metro_Desktop,
      altText: "Metro",
    },
    railloop: {
      mobile: Rail_Loop,
      desktop: Rail_Loop_Desktop,
      altText: "SRL",
    },
    healthcare: {
      mobile: Healthcare,
      desktop: Healthcare_Desktop,
      altText: "Healthcare",
    },
    defence: {
      mobile: Defence,
      desktop: Defence_Desktop,
      altText: "Defence",
    },
    budget: {
      mobile: Budget,
      desktop: Budget_Desktop,
      altText: "Budget",
    },
    // All other items
    tenthousandhouseholds: {
      mobile: Ten_Thousand_Households,
      desktop: Ten_Thousand_Households_Desktop,
      altText: "Ten Thousand Households",
    },
    endworldhunger: {
      mobile: End_World_Hunger,
      desktop: End_World_Hunger_Desktop,
      altText: "End World Hunger",
    },
    energytransition: {
      mobile: Energy_Transition,
      desktop: Energy_Transition_Desktop,
      altText: "Energy Transition",
    },
    fundusaid: {
      mobile: Fund_US_Aid,
      desktop: Fund_US_Aid_Desktop,
      altText: "Fund US Aid",
    },
    missiontomars: {
      mobile: Mission_To_Mars,
      desktop: Mission_To_Mars_Desktop,
      altText: "Mission to Mars",
    },
    taiwangdp: {
      mobile: Taiwan_GDP,
      desktop: Taiwan_GDP_Desktop,
      altText: "Taian GDP",
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
    height: 100vh;
  }

  picture {
    position: absolute;
    inset: 0;
    display: block;
  }

  picture img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
    object-position: top center;
    /* padding-bottom: 80px; // rough buffer for the clipped area */
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
