<template>
<div>
  <v-app-bar
    clipped-left
    rounded="0"
    height="64px"
    max-height="64px"
  >
    <v-app-bar-nav-icon ></v-app-bar-nav-icon>
   
    <v-spacer></v-spacer>
    <v-scroll-y-transition leave-absolute group>
     
    </v-scroll-y-transition>
  </v-app-bar>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
    return {
    };
  },
};
</script>