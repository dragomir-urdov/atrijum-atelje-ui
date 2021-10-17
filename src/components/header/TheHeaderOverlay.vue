<template>
  <!-- Toggle -->
  <div
    class="position-absolute top-0 start-0 d-block d-md-none cursor-pointer"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasTop"
    aria-controls="offcanvasTop"
    @click="disableScroll"
  >
    <i class="bi bi-list lg"></i>
  </div>

  <!-- Overlay -->
  <div
    class="offcanvas offcanvas-top h-100"
    tabindex="-1"
    id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel"
  >
    <div
      class="
        offcanvas-header
        align-items-start
        justify-content-center
        position-relative
      "
    >
      <img src="/images/logo.png" class="img-fluid logo" alt="Logo" />
      <button
        type="button"
        class="btn-close text-reset position-absolute top-0 end-0 p-4"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="enableScroll"
      ></button>
    </div>
    <!-- Content -->
    <div class="offcanvas-body pt-0">
      <div class="accordion accordion-flush" id="navigation">
        <TheHeaderOverlayItem
          v-for="link in links"
          :key="link.name"
          :link="link"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import TheHeaderOverlayItem from "./TheHeaderOverlayItem.vue";

// Utils
import { toggleScroll } from "@/utils/common";

export default {
  name: "TheHeaderOverlay",
  components: { TheHeaderOverlayItem },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
    navigate({ name, subLinks }) {
      if (!subLinks) {
        this.$router.push({ name });
      }
    },
    disableScroll() {
      toggleScroll(true);
    },
    enableScroll() {
      toggleScroll(false);
    },
  },
};
</script>
