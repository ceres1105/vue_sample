<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<!--style scope는 현재 컴포넌트에만 적용, style은 전체 컴포넌트에 적용-->
<style>
#app {
  text-align: center;
}
</style>
