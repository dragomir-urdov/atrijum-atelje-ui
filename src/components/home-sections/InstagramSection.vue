<template>
  <section class="d-flex flex-column text-center mt-4 w-100 instagram--wrapper">
    <div class="mb-4 mx-3">
      <h2 class="fs-title secondary-text-color">follow us on instagram</h2>
      <a
        :href="instagramLink"
        target="__blank"
        class="fs-default text-uppercase"
      >
        {{ instagramProfile }}
      </a>
    </div>
    <div class="d-flex flex-nowrap">
      <InstagramSectionItem
        v-for="post in instagramPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </section>
</template>

<script>
// Components
import InstagramSectionItem from "./InstagramSectionItem.vue";

import * as globals from "@/globals";

export default {
  components: { InstagramSectionItem },
  data() {
    return {
      instagramLink: globals.INSTAGRAM_LINK,
      instagramProfile: globals.INSTAGRAM_PROFILE,
      instagramPosts: [
        {
          image: "/images/all-rings.png",
          id: "dsad",
          url: "",
        },
        {
          image: "/images/all-rings.png",
          id: "ghfgh",
          url: "",
        },
        {
          image: "/images/all-rings.png",
          id: "fsdfdsf",
          url: "",
        },
        {
          image: "/images/all-rings.png",
          id: "jgfjfgj",
          url: "",
        },
        {
          image: "/images/all-rings.png",
          id: "gfdghh",
          url: "",
        },
      ],
    };
  },
};
</script>
