<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image | emptyImage"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        image: null,
      },
      isProcessing: false,
    };
  },
  methods: {
    setUser() {
      console.log(this.currentUser);
      const { id } = this.$route.params;
      if (id != this.currentUser.id) {
        this.$router.push({ name: "not-found" });
      }
      this.user = {
        ...this.user,
        id: this.currentUser.id,
        name: this.currentUser.name,
        email: this.currentUser.email,
        password: this.currentUser.password,
        isAdmin: this.currentUser.isAdmin,
        image: this.currentUser.image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = false;

        if (!this.user.name) {
          Toast.fire({
            icon: "error",
            title: "使用者名字沒有填寫",
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);
        const userId = this.currentUser.id;
        const { data } = await usersAPI.update({ userId, formData });
        console.log(data);
        console.log("submit done");

        this.$router.push({ name: "user", params: { id: userId } });
      } catch (error) {
        this.isProcessing = false;

        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
        this.isProcessing = true;
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.setUser();
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
};
</script>
