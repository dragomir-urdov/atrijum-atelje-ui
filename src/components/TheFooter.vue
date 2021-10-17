<template>
  <div class="footer--wrapper p-4 w-100 font-secondary">
    <div
      class="
        my-3
        mt-md-5
        w-100
        mx-auto
        d-flex
        flex-column flex-md-row
        text-center text-md-start
        mw-lg
        gap-5
        justify-content-between
      "
    >
      <div
        v-for="section in sections"
        :key="section.name"
        class="footer--wrapper__section flex-fill"
      >
        <h3
          class="
            footer--wrapper__section-title
            fs-subtitle
            secondary-text-color
            w-100
          "
        >
          {{ section.name }}
        </h3>
        <div v-for="link in section.subLinks" :key="link.name">
          <router-link
            class="mb-1 footer--wrapper__section-link"
            :to="{ name: link.name }"
          >
            {{ link.title }}
          </router-link>
        </div>
      </div>
      <div class="footer--wrapper__section flex-fill">
        <h3
          class="
            footer--wrapper__section-title
            fs-subtitle
            secondary-text-color
            w-100
          "
        >
          Stay connected
        </h3>
        <div
          class="
            footer--wrapper__section-icons
            d-flex
            justify-content-center justify-content-md-start
            gap-3
            mt-3
          "
        >
          <i class="bi lg bi-facebook cursor-pointer"></i>
          <i class="bi lg bi-instagram cursor-pointer"></i>
          <i class="bi lg bi-twitter cursor-pointer"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="sub-footer--wrapper w-100 p-4 pb-5 fs-label font-secondary">
    <div
      class="
        sub-footer--wrapper__content
        mw-lg
        mx-auto
        pt-3
        d-flex
        flex-column flex-md-row
        justify-content-center justify-content-md-end
        gap-md-3
        text-center
      "
    >
      <p>copyright &copy; {{ new Date().getFullYear() }} Atrijum Atelje</p>
      <router-link :to="{ name: 'About' }">Terms and conditions</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: {
        explore: {
          name: "Explore",
          subLinks: [
            {
              name: "Home",
              title: "Blog",
            },
            {
              name: "Home",
              title: "Blog",
            },
            {
              name: "Home",
              title: "Blog",
            },
          ],
        },
        about: {
          name: "About",
          subLinks: [
            {
              name: "Home",
              title: "Blog",
            },
            {
              name: "Home",
              title: "Blog",
            },
          ],
        },
      },
    };
  },
};
</script>
