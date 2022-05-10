<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
        v-for="restaurant in restaurants" 
        :key="restaurant.id" 
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

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
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Rosendo Balistreri",
            "tel": "771.720.3178 x4472",
            "address": "816 Casper Inlet",
            "opening_hours": "08:00",
            "description": "Ex nulla et modi aut quasi id.\nVelit corporis veri",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.163852183431867",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Camron Cole",
            "tel": "798.759.4106 x11071",
            "address": "638 Baby Throughway",
            "opening_hours": "08:00",
            "description": "libero",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.88891168264365",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Maxime Weimann",
            "tel": "883.580.4438 x72728",
            "address": "240 Sandra Shores",
            "opening_hours": "08:00",
            "description": "Et consequatur et minima nemo. Neque dolores harum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.565553536549025",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Morton Wilderman",
            "tel": "(984) 147-2134 x42077",
            "address": "2565 Cummings Walk",
            "opening_hours": "08:00",
            "description": "Tempora cum dolor odit saepe error optio aut iusto",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.98144126553946",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Marianne Schulist",
            "tel": "026-986-5391",
            "address": "08453 Turner Canyon",
            "opening_hours": "08:00",
            "description": "fuga",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.97730355781204",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Mr. Hassan Hartmann",
            "tel": "1-894-403-9077 x9768",
            "address": "876 Noel Divide",
            "opening_hours": "08:00",
            "description": "voluptatem veritatis animi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.30756087355141",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Kamille Smitham",
            "tel": "(844) 849-8813",
            "address": "1455 Schiller Spring",
            "opening_hours": "08:00",
            "description": "Ullam aliquam dolorum autem. Eum non aut et perfer",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.04754467371002",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Declan Braun",
            "tel": "(697) 551-5996 x41739",
            "address": "510 Wolf Road",
            "opening_hours": "08:00",
            "description": "Odit ut impedit labore voluptas.\nEnim autem fuga s",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.032170605782003",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Dr. Celestino Kerluke",
            "tel": "1-932-236-3110 x7083",
            "address": "9499 Strosin Throughway",
            "opening_hours": "08:00",
            "description": "Velit eos accusantium qui cupiditate. Neque id id ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5027817351904513",
            "viewCounts": 0,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T05:08:35.000Z",
                "updatedAt": "2022-01-29T05:08:35.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
}
</script>