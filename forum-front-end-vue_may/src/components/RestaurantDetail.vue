// ./src/views/RestaurantDetail.vue
<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.stop.prevent="removeFavorite"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.stop.prevent="removeLike"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        @click.stop.prevent="addLike"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addFavorite() {
      try {
        const { data } = await usersAPI.addFavorite({
          restaurantId: this.restaurant.id,
        });
        console.log(data);
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async removeFavorite() {
      try {
        const { data } = await usersAPI.deleteFavorite({
          restaurantId: this.restaurant.id,
        });
        console.log(data);

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async addLike() {
      try {
        const { data } = await usersAPI.addLike({
          restaurantId: this.restaurant.id,
        });
        console.log(data);
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async removeLike() {
      try {
        const { data } = await usersAPI.deleteLike({
          restaurantId: this.restaurant.id,
        });
        console.log(data);

        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>