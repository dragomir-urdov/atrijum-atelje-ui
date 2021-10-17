<template>
  <div class="my-5 mw-lg">
    <h1 class="fs-title primary-text-color text-center mb-4">
      our favorite designs
    </h1>
    <div class="row m-0">
      <ProductItem v-for="item in 4" :key="item" class="col-6 col-md-3 m-0" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  components: { ProductItem },
};
</script>
