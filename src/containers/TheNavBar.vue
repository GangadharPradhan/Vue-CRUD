<template>
  <div>
    <the-sidebar />
    <v-card class="d-flex flex-column" min-height="100vh" rounded="0">
      <the-header class="sticky-top" />
       <div class="p-2 px-10">
        {{"Home / "+this.$route.name}}
       </div>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-card>
  </div>
</template>

<script>

import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
};
</script>