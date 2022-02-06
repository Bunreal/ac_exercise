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
const dummyData = {
  "restaurants": [
      {
          "id": 1,
          "name": "Green Cummings",
          "tel": "238.270.9282",
          "address": "81165 Hills Inlet",
          "opening_hours": "08:00",
          "description": "Quia aspernatur rerum facere quia.\nVelit voluptas ",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.63769327720376",
          "viewCounts": 1,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-30T14:04:37.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 22,
          "name": "Dr. Virgil Heller",
          "tel": "734-632-1632 x61044",
          "address": "407 Frida Lock",
          "opening_hours": "08:00",
          "description": "quod",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.50768392716388",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 23,
          "name": "Jovan Bogisich",
          "tel": "166-885-2034 x3788",
          "address": "50484 Delilah Locks",
          "opening_hours": "08:00",
          "description": "labore",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.37727189242798",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 24,
          "name": "Trenton Bayer",
          "tel": "(039) 656-7580 x94868",
          "address": "433 Shayna Locks",
          "opening_hours": "08:00",
          "description": "Occaecati explicabo qui omnis ut fugiat.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.40572394247286",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 25,
          "name": "Rosalyn Dare",
          "tel": "(147) 461-8402 x1089",
          "address": "48881 Jaquan Lake",
          "opening_hours": "08:00",
          "description": "Perspiciatis iure aut dolor nostrum commodi. Eum e",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.096634795028585",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 21,
          "name": "Adelle Strosin",
          "tel": "368-064-2545 x60824",
          "address": "38298 Blick Shoals",
          "opening_hours": "08:00",
          "description": "Quaerat ipsa quas voluptatem quisquam suscipit con",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.51040939577286",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 27,
          "name": "Marjory Towne",
          "tel": "141.463.4106",
          "address": "58503 Fritsch Grove",
          "opening_hours": "08:00",
          "description": "Explicabo veniam ut rerum minima. Dolorum fugit vo",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.810671376045526",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 28,
          "name": "Terrance Eichmann",
          "tel": "1-986-688-8281",
          "address": "382 Shaun Mission",
          "opening_hours": "08:00",
          "description": "qui sunt harum",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.21062714905257",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 29,
          "name": "Lois Rohan",
          "tel": "782.633.3687 x51809",
          "address": "5417 Jordi Manors",
          "opening_hours": "08:00",
          "description": "Tempore sit optio nostrum inventore.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.94152804473891",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 30,
          "name": "Alvis Rau",
          "tel": "877-104-0956 x1814",
          "address": "1364 Green Extensions",
          "opening_hours": "08:00",
          "description": "Aut totam maxime ipsum quia autem officia velit na",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.20434809570348",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 2,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      }
  ]
}
export default {
  components: {
    NavTabs
  },
  mixins: [emptyImageFilter],
  data(){
    return {
      restaurants : dummyData.restaurants
    }
  }
}
</script>