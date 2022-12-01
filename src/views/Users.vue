<template>
  <section>
      <v-data-table
        :headers="headers"
        :search="search"
        :items="users"
        :items-per-page="5"
        class="elevation-1 mt-5 "
      >
        <template v-slot:top>
          <v-btn
            color="#05486a"
            dark
            class="mx-4 mt-2"
            v-bind="attrs"
            v-on="on"
            style="float: right"
            @click="addUser=true"
          >
            Create
          </v-btn>
          <v-text-field
            v-model="search"
            style="max-width:200px"
            label="Search"
            class="mx-4 "
          ></v-text-field>
        </template>
        <template v-slot:[`item.actions`]>
          <v-icon small class="mr-2" @click="editUser()">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteDialog=true">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:[`item.activate`]>
          <v-icon small class="mr-2">
           mdi-checkbox-marked-circle-outline
          </v-icon>
        </template>
      </v-data-table>
      <v-dialog v-model="addUser" max-width="800">
        <v-card>
      <v-card-title style="background-color: #05486a" class="text-white"
        >Create User</v-card-title
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
             <v-btn @click="addUser=false" color="#05486a" class="text-white mb-10 mr-3"  width="10%"
              >Back</v-btn
            >
             <v-btn color="#05486a" class="text-white mb-10"  width="10%"
              >Save</v-btn
            >
            </v-row>
      </form>
    </v-card>
      </v-dialog>
       <v-dialog persistent v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-white" style="background: #1565c0"
          >Delete User</v-card-title
        >
        <v-card-text class="my-5">
          Are you sure you want to delete this user?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">
            No
          </v-btn>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
export default {
  data() {
    return {
     deleteDialog:false,
      regForm:{
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      },
      search: "",
      addUser:false,
      headers: [
        { text: "First Name",value: "firstName" },
        { text: "Surname",value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Contact", value: "contact" },
        { text: "Activate", value: "activate" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      users: [
        {
          firstName: "Shivasakthi",
          lastName:"Shanmugam",
          contact: "7708120921",
          email: "shiva123@gmail.com",
          gender: "Male",
          age: "23",
        },
        {
          firstName: "Shyaam",
          lastName:"P",
          contact: "7708120921",
          email: "shyaam123@gmail.com",
          gender: "Male",
          age: "23",
        },
        {
          firstName: "Barth",
          lastName:"P",
          contact: "7708120921",
          email: "barath123@gmail.com",
          gender: "Male",
          age: "23",
        },
        {
          firstName: "Madhan",
          lastName:"Ramachandar",
          contact: "7708120921",
          email: "madhan123@gmail.com",
          gender: "Male",
          age: "23",
        },
        {
          firstName: "Arumugam",
          lastName:"Mani",
          contact: "7708120921",
          email: "arumugam123@gmail.com",
          gender: "Male",
          age: "23",
        },
      ],
    };
  },
  methods: {
    editUser(){
       this.$router.push({ name: "Edit User" });
    },
  },
};
</script>
