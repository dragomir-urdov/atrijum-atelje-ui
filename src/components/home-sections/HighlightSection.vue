<template>
  <section class="highlight-section mx-4">
    <HighlightSectionItem
      v-for="(section, index) in sections"
      :data="section"
      :key="section.title"
      :reverse="!!(index % 2)"
    />
  </section>
</template>

<script>
import HighlightSectionItem from "./HighlightSectionItem.vue";
export default {
  components: { HighlightSectionItem },
  data() {
    return {
      sections: [
        {
          image: "/images/all-rings.png",
          title: "engagement rings",
          description:
            "find the ring that represents the beginning of your love story",
          link: "SHOP ALL RINGS",
        },
        {
          image: "/images/all-rings.png",
          title: "wedding sets",
          description: "perfectly paired rings to complete your vintage look",
          link: "BROWSE WEDDING SETS",
        },
        {
          image: "/images/all-rings.png",
          title: "ready to ship",
          description: "rings available for immediate resizing & shipment",
          link: "EXPLORE READY TO SHIP",
        },
      ],
    };
  },
};
</script>
