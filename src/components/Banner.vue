<template>
  <div
    id="homeBanner"
    class="banner--wrapper overflow-hidden mb-5 carousel slide w-100"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="[item === 1 ? 'active' : '']"
        v-for="item in 3"
        :key="item"
      >
        <div
          class="d-block w-100 banner--wrapper__image"
          :style="{ backgroundImage: `url('/images/banner.png')` }"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#homeBanner"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#homeBanner"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>
