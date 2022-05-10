// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants v-bind:restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments v-bind:comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'

const dummyData = {    
  "restaurants": [
    {
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
        }
    },
    {
        "id": 2,
        "name": "Rosendo Balistreri",
        "tel": "771.720.3178 x4472",
        "address": "816 Casper Inlet",
        "opening_hours": "08:00",
        "description": "Ex nulla et modi aut quasi id.\nVelit corporis veritatis veritatis tenetur explicabo sunt non vitae.\nOfficia explicabo animi debitis dolorum est nihil laudantium velit omnis.\nDeleniti tenetur veniam harum rem non quia est.\nAt aliquam quos rerum minus.",
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
        }
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
        }
    },
    {
        "id": 4,
        "name": "Maxime Weimann",
        "tel": "883.580.4438 x72728",
        "address": "240 Sandra Shores",
        "opening_hours": "08:00",
        "description": "Et consequatur et minima nemo. Neque dolores harum quia nostrum est iste. Dolores voluptatem omnis molestiae et voluptatum assumenda. Voluptas optio similique dignissimos culpa dicta totam explicabo ut est.",
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
        }
    },
    {
        "id": 5,
        "name": "Morton Wilderman",
        "tel": "(984) 147-2134 x42077",
        "address": "2565 Cummings Walk",
        "opening_hours": "08:00",
        "description": "Tempora cum dolor odit saepe error optio aut iusto animi.\nEos iusto magni repellat quae et ratione ullam cumque voluptatem.",
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
        }
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
        }
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
        }
    },
    {
        "id": 8,
        "name": "Kamille Smitham",
        "tel": "(844) 849-8813",
        "address": "1455 Schiller Spring",
        "opening_hours": "08:00",
        "description": "Ullam aliquam dolorum autem. Eum non aut et perferendis sint. Ut aliquam excepturi tenetur illo. Blanditiis architecto et sed.",
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
        }
    },
    {
        "id": 9,
        "name": "Declan Braun",
        "tel": "(697) 551-5996 x41739",
        "address": "510 Wolf Road",
        "opening_hours": "08:00",
        "description": "Odit ut impedit labore voluptas.\nEnim autem fuga sequi.",
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
        }
    },
    {
        "id": 10,
        "name": "Dr. Celestino Kerluke",
        "tel": "1-932-236-3110 x7083",
        "address": "9499 Strosin Throughway",
        "opening_hours": "08:00",
        "description": "Velit eos accusantium qui cupiditate. Neque id id in quis aut. Assumenda aliquid dolor est. Et esse adipisci voluptatem earum. Ut fuga est sequi iste omnis cumque. Minima non ut error rerum.",
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
        }
    }
  ],
  "comments": [
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
      },
      "Restaurant": {
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
          "CategoryId": 5
      }
  },
  {
      "id": 2,
      "text": "Velit ratione laborum dicta omnis voluptas molestiae minus.",
      "UserId": 1,
      "RestaurantId": 2,
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
      },
      "Restaurant": {
          "id": 2,
          "name": "Rosendo Balistreri",
          "tel": "771.720.3178 x4472",
          "address": "816 Casper Inlet",
          "opening_hours": "08:00",
          "description": "Ex nulla et modi aut quasi id.\nVelit corporis veritatis veritatis tenetur explicabo sunt non vitae.\nOfficia explicabo animi debitis dolorum est nihil laudantium velit omnis.\nDeleniti tenetur veniam harum rem non quia est.\nAt aliquam quos rerum minus.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.163852183431867",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4
      }
  },
  {
      "id": 3,
      "text": "Repudiandae quod commodi ea dolor numquam.",
      "UserId": 3,
      "RestaurantId": 3,
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
      },
      "Restaurant": {
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
          "CategoryId": 3
      }
  },
  {
      "id": 4,
      "text": "Nesciunt suscipit quidem cumque velit dolor et magni in esse.",
      "UserId": 1,
      "RestaurantId": 4,
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
      },
      "Restaurant": {
          "id": 4,
          "name": "Maxime Weimann",
          "tel": "883.580.4438 x72728",
          "address": "240 Sandra Shores",
          "opening_hours": "08:00",
          "description": "Et consequatur et minima nemo. Neque dolores harum quia nostrum est iste. Dolores voluptatem omnis molestiae et voluptatum assumenda. Voluptas optio similique dignissimos culpa dicta totam explicabo ut est.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.565553536549025",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4
      }
  },
  {
      "id": 5,
      "text": "A dolores ipsam ea nihil ut ut eligendi veniam enim.",
      "UserId": 1,
      "RestaurantId": 5,
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
      },
      "Restaurant": {
          "id": 5,
          "name": "Morton Wilderman",
          "tel": "(984) 147-2134 x42077",
          "address": "2565 Cummings Walk",
          "opening_hours": "08:00",
          "description": "Tempora cum dolor odit saepe error optio aut iusto animi.\nEos iusto magni repellat quae et ratione ullam cumque voluptatem.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.98144126553946",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 2
      }
  },
  {
      "id": 6,
      "text": "Qui dolorem odio nihil nesciunt.",
      "UserId": 2,
      "RestaurantId": 6,
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
      },
      "Restaurant": {
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
          "CategoryId": 5
      }
  },
  {
      "id": 7,
      "text": "Numquam quia in nesciunt.",
      "UserId": 2,
      "RestaurantId": 7,
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
      },
      "Restaurant": {
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
          "CategoryId": 1
      }
  },
  {
      "id": 8,
      "text": "Consequatur cumque ex sint dignissimos quam.",
      "UserId": 3,
      "RestaurantId": 8,
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
      },
      "Restaurant": {
          "id": 8,
          "name": "Kamille Smitham",
          "tel": "(844) 849-8813",
          "address": "1455 Schiller Spring",
          "opening_hours": "08:00",
          "description": "Ullam aliquam dolorum autem. Eum non aut et perferendis sint. Ut aliquam excepturi tenetur illo. Blanditiis architecto et sed.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.04754467371002",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 4
      }
  },
  {
      "id": 9,
      "text": "Rerum in consequatur quam.",
      "UserId": 1,
      "RestaurantId": 9,
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
      },
      "Restaurant": {
          "id": 9,
          "name": "Declan Braun",
          "tel": "(697) 551-5996 x41739",
          "address": "510 Wolf Road",
          "opening_hours": "08:00",
          "description": "Odit ut impedit labore voluptas.\nEnim autem fuga sequi.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.032170605782003",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 3
      }
  },
  {
      "id": 10,
      "text": "Ut temporibus dolores quia placeat commodi hic quo.",
      "UserId": 3,
      "RestaurantId": 10,
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
      },
      "Restaurant": {
          "id": 10,
          "name": "Dr. Celestino Kerluke",
          "tel": "1-932-236-3110 x7083",
          "address": "9499 Strosin Throughway",
          "opening_hours": "08:00",
          "description": "Velit eos accusantium qui cupiditate. Neque id id in quis aut. Assumenda aliquid dolor est. Et esse adipisci voluptatem earum. Ut fuga est sequi iste omnis cumque. Minima non ut error rerum.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5027817351904513",
          "viewCounts": 0,
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "CategoryId": 1
      }
  }
  ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods:{
    fetchFeeds(){
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
    }
  },
  created(){
    this.fetchFeeds()
  }
}
</script>