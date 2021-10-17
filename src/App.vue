<template>
  <TheHeader />
  <div
    class="min-vh-100 d-flex flex-column align-items-center align-items-start"
  >
    <router-view />
  </div>
  <TheFooter />
</template>

<script>
// Components
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
  methods: {
    devSignature() {
      if (process.env.NODE_ENV === "production") {
        console.log("Developer: Dragomir Urdov");
        console.log("Email: dragomir.urdov@gmail.com");
        console.log("Portfolio: https://dragomirurdov.github.io/portfolio/");
        console.log(
          "Linkedin: https://www.linkedin.com/in/dragomir-urdov-bb8570198/"
        );
      }
    },
  },
  mounted() {
    this.devSignature();
  },
};
</script>
