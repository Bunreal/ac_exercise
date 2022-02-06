<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
      "updatedAt": "2022-01-30T14:04:37.000Z",
      "CategoryId": 5,
      "Category": {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z"
      },
      "Comments": [
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
          }
      ]
  }
}
export default {
  data(){
    return {
      restaurant : dummyData.restaurant
    }
  }
}
</script>