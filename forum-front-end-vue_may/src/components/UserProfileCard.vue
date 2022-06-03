<template>
  <div class="card mb-3" bis_skin_checked="1">
    <div class="row no-gutters" bis_skin_checked="1">
      <div class="col-md-4" bis_skin_checked="1">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8" bis_skin_checked="1">
        <div class="card-body" bis_skin_checked="1">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.Followers.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followings.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p v-if="user.isAdmin">
            <router-link
              :to="{
                name: 'user-edit',
                params: {
                  id: user.id,
                },
              }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
          </p>
          <div v-else>
            <button
              class="btn btn-primary"
              v-if="!isFollowed"
              :disabled="isProcessing"
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
            <button
              class="btn btn-primary"
              v-else
              :disabled="isProcessing"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      isFollowed: this.initialIsFollowed,
      isProcessing: false,
    };
  },
  created() {
    this.user = this.initialUser;
  },
  methods: {
    async addFollowing(userId) {
      try {
        this.isProcessing = true;
        const response = await usersAPI.addFollowing({ userId });
        console.log("response", response);
        const { data, statusText } = response;
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.isFollowed = true;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法加入追隨，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        this.isProcessing = true;
        const response = await usersAPI.deleteFollowing({ userId });
        console.log("response", response);
        const { data, statusText } = response;
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.isFollowed = false;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法移除追隨，請稍後再試",
        });
      }
    },
  },
  watch: {
    initialUser() {
      this.user = this.initialUser;
    },
    initialIsFollowed(newValue) {
      this.isFollowed = newValue;
    },
  },
  mixins: [emptyImageFilter],
};
</script>
