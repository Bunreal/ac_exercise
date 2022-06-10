<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "Admin" : "User" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="currentUser.id !== user.id"
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();
        this.userData = data.users;
      } catch (error) {
        console.log(error);
      }
    },

    async toggleUserRole({ userId, isAdmin }) {
      try {
        const willBeAdmin = !isAdmin;
        const { data, statusText } = await adminAPI.users.update({
          userId,
          isAdmin: willBeAdmin.toString(),
        });
        console.log(data);
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.userData = this.userData.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法更新，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchUser();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>
