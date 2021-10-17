<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="openId">
      <button
        class="accordion-button collapsed shadow-none primary-text-color"
        :class="{ empty: !link.subLinks }"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + closeId"
        aria-expanded="false"
        :aria-controls="closeId"
        @click="navigate(link)"
      >
        {{ link.title }}
      </button>
    </h2>
    <div
      v-if="link.subLinks"
      class="accordion-collapse collapse"
      data-bs-parent="#navigation"
      :id="closeId"
      :aria-labelledby="openId"
    >
      <ul class="accordion-body list-group p-0 mb-3 shadow">
        <router-link
          tag="li"
          :to="{ name: link.name }"
          class="list-group-item cursor-pointer"
          v-for="item in link.subLinks"
          :key="item.title"
        >
          {{ item.title }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigate({ name, subLinks }) {
      if (!subLinks) {
        this.$router.push({ name });
      }
    },
  },
  computed: {
    closeId() {
      return this.link.id + "-close";
    },
    openId() {
      return this.link.id + "-open";
    },
  },
};
</script>
