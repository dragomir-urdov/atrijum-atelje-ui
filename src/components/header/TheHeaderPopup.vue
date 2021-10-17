<template>
  <router-link
    :to="{ name: link.name }"
    @mouseover="showPopup"
    @mouseleave="hidePopup"
    class="d-flex"
  >
    <div class="my-auto">
      {{ link.title }}
    </div>
  </router-link>
  <div
    v-show="show"
    class="
      header-popup--wrapper
      position-absolute
      top-100
      start-0
      justify-content-center
      gap-4
      w-100
      p-4
      text-center
      shadow-lg
    "
    @mouseover="showPopup"
    @mouseleave="hidePopup"
  >
    <router-link
      tag="div"
      :to="{ name: link.name }"
      class="flex-grow-1 header-popup--wrapper__item"
      v-for="item in link.subLinks"
      :key="item.id"
      @click="hidePopup"
    >
      <img :src="item.image" :alt="item.title" class="img-fluid mb-4 shadow" />
      <p class="p-0 m-0">
        {{ item.title }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheHeaderPopup",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      if (this.link.subLinks) {
        this.show = true;
      }
    },
    hidePopup() {
      this.show = false;
    },
  },
};
</script>
