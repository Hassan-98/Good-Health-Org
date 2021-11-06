<template>
  <div id="app">
    <div class="Loader" v-if="loading">
      <Loader/>
    </div>
    <div class="Website">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
import Footer from "@comps/Footer.vue";
import Loader from "@comps/Loader.vue";

export default {
  components: {
    Header,
    Footer,
    Loader
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  mounted() {
    window.onload = () => {
      setTimeout(() => {
        this.$store.commit("stopLoading");
      }, 1000);
    };
  }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  position: relative;
}
</style>
