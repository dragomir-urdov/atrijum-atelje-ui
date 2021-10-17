<template>
  <Banner />
  <HighlightSection />
  <FavoritesSection />
  <InstagramSection />
</template>

<script>
// Components
import Banner from "@/components/Banner.vue";

import HighlightSection from "@/components/home-sections/HighlightSection.vue";
import FavoritesSection from "@/components/home-sections/FavoritesSection.vue";
import InstagramSection from "@/components/home-sections/InstagramSection.vue";

export default {
  name: "Home",
  components: { Banner, HighlightSection, FavoritesSection, InstagramSection },
};
</script>
