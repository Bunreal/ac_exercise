// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>
      <hr />
      <div
        class="card mb-3"
        style="max-width: 540px; margin: auto"
        v-for="restaurant in restaurantsTop"
        :key="restaurant.id"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="#">
              <img class="card-img" :src="restaurant.image" />
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <span class="badge badge-secondary"
                >收藏數：{{ restaurant.FavoriteCount }}</span
              >
              <p class="card-text">
                {{ restaurant.description }}
              </p>
              <a href="#" class="btn btn-primary mr-2">Show</a>

              <button
                type="button"
                class="btn btn-danger mr-2"
                v-if="restaurant.isFavorited"
                @click.stop.prevent="removeFavorite(restaurant.id)"
              >
                移除最愛
              </button>
              <button
                type="button"
                class="btn btn-primary"
                v-else
                @click.stop.prevent="addFavorite(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import NavTabs from "./../components/NavTabs";
import restaurantsAPI from "./../apis/restaurants";
import usersAPI from "../apis/users";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      restaurantsTop: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchRestaurants() {
      try {
        const resposne = await restaurantsAPI.getTopRestaurants();
        console.log(resposne);
        this.restaurantsTop = resposne.data.restaurants;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
        console.log(error);
      }
    },
    async addFavorite(restaurantId) {
      try {
        console.log(restaurantId);
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫 API，並取得回傳內容
        const { data } = await usersAPI.addFavorite({
          restaurantId,
        });
        console.log("data", data);

        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurantsTop = this.restaurantsTop.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1,
            };
          }
          return restaurant;
        });
      } catch (error) {
        // STEP 6: 請求失敗的話則跳出錯誤提示

        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurantsTop = this.restaurantsTop.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1,
            };
          }
          return restaurant;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>
