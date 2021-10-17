<template>
  <div
    class="highlight-section--item d-flex flex-column"
    :class="[reverse ? 'flex-lg-row-reverse' : 'flex-lg-row']"
  >
    <div class="w-100 w-lg-50 highlight-section--item__image">
      <img :src="data.image" class="img-fluid" :alt="data.title" />
    </div>
    <div
      class="
        w-100 w-lg-50
        py-4
        px-0 px-lg-4 px-xl-5
        d-flex
        flex-column
        justify-content-center
        text-center text-lg-start
      "
      :class="{ 'text-lg-end': reverse }"
    >
      <h2 class="secondary-text-color fs-title text-uppercase mb-3 mb-md-5">
        {{ data.title }}
      </h2>
      <h3 class="fs-subtitle mb-3 mb-md-5">
        {{ data.description }}
      </h3>
      <router-link
        to="/"
        class="
          text-uppercase
          primary-text-color
          font-secondary
          fw-bold
          fs-default
        "
        >{{ data.link }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
