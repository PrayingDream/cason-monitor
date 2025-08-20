<script setup>
import TopNavBar from "./components/topNavBar/TopNavBar.vue";
import {getMonitors} from "@/api/upTimeRobot.js";
import {onMounted} from "vue";

onMounted(() => {
  const res = getMonitors();
})

</script>

<template>
  <div class="App">
    <TopNavBar/>
  </div>

  站点监测
</template>

<style scoped>
.App {
  display: flex;
}
</style>
