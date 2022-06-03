<template>
  <main role="main">
    <div class="album py-5 bg-light" bis_skin_checked="1">
      <div class="container" bis_skin_checked="1">
        <UserProfileCard
          :initialUser="user"
          :initial-is-followed="isFollowed"
        />
        <div class="row" bis_skin_checked="1">
          <div class="col-md-4" bis_skin_checked="1">
            <UserFollowingsCard :userFollowings="user.Followings" />
            <br />
            <UserFollowersCard :userFollowers="user.Followers" />
          </div>
          <div class="col-md-8" bis_skin_checked="1">
            <UserCommentsCard :userComments="user.Comments" />
            <br />
            <UserFavoritedRestaurantsCard
              :userFavoritedRestaurants="user.FavoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 1,
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.get({ userId });

        console.log(response);
        const {
          id,
          name,
          email,
          password,
          isAdmin,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = response.data.profile;
        this.user = {
          id,
          name,
          email,
          password,
          isAdmin,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        };
        this.isFollowed = response.data.isFollowed;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
};
</script>
