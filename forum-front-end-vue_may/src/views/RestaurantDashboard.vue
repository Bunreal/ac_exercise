<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>
<script>
import restaurantsAPI from "./../apis/restaurants";
export default {
  data() {
    return {
      restaurant: {
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getOneRestaurant(restaurantId);
        console.log(data);
        const { restaurant } = data;
        this.restaurant.name = restaurant.name;
        this.restaurant.categoryName = restaurant.Category.name;
        this.restaurant.commentsLength = restaurant.Comments.length;
        this.restaurant.viewCounts = restaurant.viewCounts;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>
