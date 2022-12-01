<template>
  <section>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
      >
        <v-card
          class="colored-card"
          :color="item.color"
          dark
          height="100px"
          elevation="5"
        >
          <div
            class="
              d-flex
              flex-no-wrap
              justify-space-between
              align-items-center
              h-100
            "
          >
            <div class="d-flex justify-center flex-column">
              <v-card-title
                class="text-h4 mb-2"
                v-text="item.title"
              ></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar size="100" tile>
              <v-icon dark size="50"> {{ item.src }} </v-icon>
            </v-avatar>
          </div>
          <v-data-table
            dense
            :headers="headers"
            :items="desserts"
            item-key="name"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    
  }),
};
</script>