<template>
  <div class="mx-auto header--wrapper">
    <nav
      class="
        d-flex
        justify-content-center
        mx-3 mx-xl-0
        mt-4
        mb-3
        position-relative
        no-select
      "
    >
      <div class="d-none d-md-flex gap-3 w-33">
        <TheHeaderPopup
          v-for="link in firstLinks"
          :link="link"
          :key="link.id"
        />
      </div>
      <TheHeaderOverlay :links="links" />
      <div class="w-md-33 d-flex">
        <router-link to="/" class="d-block m-auto">
          <img src="/images/logo.png" class="img-fluid logo" alt="Logo" />
        </router-link>
      </div>
      <div class="d-none d-md-flex justify-content-end gap-3 w-33">
        <TheHeaderPopup
          v-for="link in secondLinks"
          :link="link"
          :key="link.id"
        />
      </div>
    </nav>
  </div>
</template>

<script>
// Components
import TheHeaderOverlay from "./TheHeaderOverlay.vue";
import TheHeaderPopup from "./TheHeaderPopup.vue";

import * as routes from "@/router/routes";
import * as globals from "@/globals";

export default {
  name: "TheHeader",
  components: { TheHeaderOverlay, TheHeaderPopup },
  data() {
    return {
      links: routes.links,
    };
  },
  computed: {
    firstLinks() {
      return this.links.slice(0, globals.SPLIT_LINKS_AT);
    },
    secondLinks() {
      return this.links.slice(globals.SPLIT_LINKS_AT);
    },
  },
};
</script>
