// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id }}"
            >
              Show
            </router-link>
            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from './../utils/mixins'
import restaurantsAPI from './../apis/restaurants'

export default {
  components: {
    NavTabs
  },
  mixins: [emptyImageFilter],
  data(){
    return {
      restaurants : []
    }
  },
  methods: {
    async fetchTopRestaurants(){
      try {
        this.restaurants = await restaurantsAPI.getTopRestaurants()
      }catch(error){
        console.log(error)
      }
    }
  },
  created(){
    this.fetchTopRestaurants()
  }
}
</script>