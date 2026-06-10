import acto from "@abcnews/alternating-case-to-object";
import { whenOdysseyLoaded } from "@abcnews/env-utils";
import { getMountValue, selectMounts } from "@abcnews/mount-utils";
import type { Mount } from "@abcnews/mount-utils";
import App from "./components/App/App.svelte";
import { mount } from "svelte";
import { proxy } from "@abcnews/dev-proxy";

import { loadScrollyteller } from "@abcnews/svelte-scrollyteller";

/**
 * Optionally, specify generics to type your markers.
 *
 * @example
 * // In App.svelte:
 * import type { PanelDefinition } from "@abcnews/svelte-scrollyteller";
 * let { panels }: { panels: PanelDefinition<MyPanelData>[] } = $props();
 */
export type MyPanelData = {
  // electorate: string;
  // viz: 'map' | 'hex' | 'chart';
};

let appMountEl: Mount;
let appProps;

function init() {
  whenOdysseyLoaded.then(() => {
    const scrollyData = loadScrollyteller<MyPanelData>(
      "one", // If set to eg. "one" use #scrollytellerNAMEone in CoreMedia
      "u-full", // Class to apply to mount node u-full makes it full width in Odyssey
      "mark", // Name of marker in CoreMedia eg. for "point" use #point default: #mark
    );

    if (scrollyData.mountNode) {
      mount(App, {
        target: scrollyData.mountNode,
        props: { panels: scrollyData.panels },
      });
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(
    `[interactive-elon-musk-trillionaire] public path: ${__webpack_public_path__}`,
  );
}

proxy("interactive-elon-musk-trillionaire")
  .then(init)
  .catch(() => {}); // Shhh
