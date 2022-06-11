// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initial-restaurant="restaurant" />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";
import { mapState } from "vuex";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import commentsAPI from "./../apis/comments";
import Spinner from "./../components/Spinner.vue";

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      isLoading: true,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getOneRestaurant(restaurantId);
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };
        this.restaurantComments = Comments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;

        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
        console.log(error);
      }
    },
    async afterDeleteComment(commentId) {
      try {
        const { data } = await commentsAPI.delete({ commentId });
        console.log(data);
        // 以 filter 保留未被選擇的 comment.id
        this.restaurantComments = this.restaurantComments.filter(
          (comment) => comment.id !== commentId
        );
      } catch (error) {
        console.log(error);
      }
    },
    async afterCreateComment(payload) {
      try {
        const { commentId, restaurantId, text } = payload;

        const { data } = await commentsAPI.create({
          restaurantId,
          text,
        });
        console.log(data);

        this.restaurantComments.push({
          id: commentId,
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
          text,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
};
</script>
