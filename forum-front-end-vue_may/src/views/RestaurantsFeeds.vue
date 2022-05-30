// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants v-bind:restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments v-bind:comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants.vue";
import NewestComments from "./../components/NewestComments.vue";
import restaurantAPI from "./../apis/restaurants";

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantAPI.getFeeds();
        //console.log(response);

        this.restaurants = response.data.restaurants;
        this.comments = response.data.comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>
