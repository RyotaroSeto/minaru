<template>
  <div id="app">
    <body class="load" :class="page">
      <div id="wrapAll">
        <global-header @pageChange="changePage" />
        <router-view />
        <global-footer />
      </div>
    </body>
  </div>
</template>

<script>
import GlobalHeader from "./components/HeaderComponent.vue";
import GlobalFooter from "./components/FooterComponent.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  mounted() {
    if (this.$route.path === "/") {
      this.page = "top";
    } else {
      this.page = "page";
    }
  },
  data() {
    return {
      page: "top",
    };
  },
  computed: {},
  methods: {
    changePage(page) {
      this.page = page;
    },
  },
};
</script>
