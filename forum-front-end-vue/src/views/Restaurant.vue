// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id='restaurant.id' @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue"
import RestaurantComments from "../components/RestaurantComments.vue"
import CreateComment from "../components/CreateComment.vue"

const dummyData = {
  "restaurant": {
      "id": 1,
      "name": "Green Cummings",
      "tel": "238.270.9282",
      "address": "81165 Hills Inlet",
      "opening_hours": "08:00",
      "description": "Quia aspernatur rerum facere quia.\nVelit voluptas est rerum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.63769327720376",
      "viewCounts": 1,
      "createdAt": "2022-01-29T05:08:35.000Z",
      "updatedAt": "2022-01-30T14:04:37.375Z",
      "CategoryId": 5,
      "Category": {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z"
      },
      "FavoritedUsers": [],
      "LikedUsers": [],
      "Comments": [
          {
              "id": 101,
              "text": "Ut quibusdam voluptatem rerum debitis.",
              "UserId": 3,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "User": {
                  "id": 3,
                  "name": "user2",
                  "email": "user2@example.com",
                  "password": "$2a$10$wWs0yBxnj/.K/adzNCPqheRjlgRsrlLNVNag3JSzj9al8NOB3e666",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2022-01-29T05:08:35.000Z",
                  "updatedAt": "2022-01-29T05:08:35.000Z"
              }
          },
          {
              "id": 51,
              "text": "Molestiae quaerat nihil sapiente optio qui possimus placeat.",
              "UserId": 1,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "User": {
                  "id": 1,
                  "name": "root",
                  "email": "root@example.com",
                  "password": "$2a$10$QJsMzOMuaTfmav.PQmVF6.jqAA.vp5juQw3ivXKlzG5DfBAikwJLW",
                  "isAdmin": true,
                  "image": null,
                  "createdAt": "2022-01-29T05:08:35.000Z",
                  "updatedAt": "2022-01-29T05:08:35.000Z"
              }
          },
          {
              "id": 1,
              "text": "Vero qui dignissimos esse aut assumenda.",
              "UserId": 2,
              "RestaurantId": 1,
              "createdAt": "2022-01-29T05:08:35.000Z",
              "updatedAt": "2022-01-29T05:08:35.000Z",
              "User": {
                  "id": 2,
                  "name": "user1",
                  "email": "user1@example.com",
                  "password": "$2a$10$UFa3U.XCvphRqbN4kvSuuOjxQclcrZGcVOhfEsW/cAXw.NIlc5d/K",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2022-01-29T05:08:35.000Z",
                  "updatedAt": "2022-01-29T05:08:35.000Z"
              }
          }
      ]
  },
  "isFavorited": false,
  "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>