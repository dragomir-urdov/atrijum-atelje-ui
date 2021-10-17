<template>
  <div class="flex-fill instagram--wrapper__post position-relative">
    <img :src="post.image" class="img-fluid" />
  </div>
</template>

<script>
export default {
  name: "InstagramSectionItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
