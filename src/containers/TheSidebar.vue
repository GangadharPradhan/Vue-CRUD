<template>
  <v-navigation-drawer
    v-model="drawer"
    clipped
    app
    width="276"
    :mini-variant.sync="mini"
    height="100%"
  >
    <v-app-bar
      color="#05486a"
      dark
      rounded="0"
      elevation="7"
      max-height="64px"
      height="64px"
    >
      <v-toolbar-title v-if="!mini"></v-toolbar-title>
      <v-spacer v-if="!mini"></v-spacer>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon :class="{ 'rotate-180': mini, 'rotate-0': !mini }"
          >mdi-chevron-left</v-icon
        >
      </v-btn>
    </v-app-bar>

    <div
      class="drawer__content overflow-x-hidden"
      :class="scrollbarTheme"
      style="height: calc(100% - 64px)"
    >
      <v-list :shaped="mini ? false : true">
        <div v-for="item in items" :key="item.title">
          <v-list-group
            class="nav-list"
            v-if="item.items.length > 0"
            :prepend-icon="item.action"
            no-action
            color="#1ba301 "
            active-class="success--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              ripple
              :to="child.route"
              exact-active-class="white--text primary lighten-2"
              link
              exact-path
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            ripple
            :to="item.route"
            color="#05486a"
            link
            exact-path
          >
            <v-list-item-icon>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>

export default {
  data() {
    return {
      drawer: true,
      mini: false,
      items: [
        {
          action: "mdi-monitor-dashboard",
          title: "Dashboard",
          route: { name: "Dashboard" },
          items: [],
        },
        {
          action: "mdi-monitor-dashboard",
          title: "Users",
          route: { name: "Users" },
          items: [],
        },
      ],
    };
  },
  
 

};
</script>

<style lang="scss" scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.rotate-0 {
  transform: rotate(0deg);
  transition-delay: 0.15s !important;
}

.light::-webkit-scrollbar {
  width: 8px;
}

.light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
  background: black;
}

.dark::-webkit-scrollbar {
  width: 8px;
}

.dark::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.dark::-webkit-scrollbar-thumb:hover {
  background: white;
}

.v-navigation-drawer {
  z-index: 60 !important;
}

.v-list-item__title,
.v-list-item__subtitle {
  white-space: normal !important;
}
</style>