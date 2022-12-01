<template>
  <section class="my-10">
    <v-card>
      <v-card-title style="background-color: #05486a" class="text-white"
        >Edit User</v-card-title
      >
      <form class="my-10 mx-5">
        <v-row>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-text-field
              v-model="regForm.firstName"
              label="First Name"
              outlined
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-text-field
              v-model="regForm.lastName"
              label="Last Name"
              outlined
              dense
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-text-field
              v-model="regForm.phoneNumber"
              label="Phone Number"
              outlined
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-text-field
              outlined
              v-model="regForm.email"
              dense
              label="Email"
            ></v-text-field>
          </v-col>
        </v-row>
         <v-row class="d-flex justify-end ">
             <v-btn color="#05486a" class="text-white mb-10"  width="10%"
              >Save</v-btn
            >
            </v-row>
      </form>
    </v-card>
  </section>
</template>
<script>

export default {

  data() {
    return {
      regForm:{
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      },
    };
  },
  methods: {
    saveUserDetails() {
      this.$router.push({ name: "Users" });
    },
    goBack() {
      this.$router.push({ name: "Users" });
    },
  },
};
</script>
