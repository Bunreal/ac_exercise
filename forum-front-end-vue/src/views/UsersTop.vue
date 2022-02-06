// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UserCard 
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import UserCard from '../components/UserCard.vue'

const dummyData = {
  "users": [
      {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$QJsMzOMuaTfmav.PQmVF6.jqAA.vp5juQw3ivXKlzG5DfBAikwJLW",
          "isAdmin": true,
          "image": 'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?cs=srgb&dl=pexels-kelvin-valerio-810775.jpg&fm=jpg',
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$UFa3U.XCvphRqbN4kvSuuOjxQclcrZGcVOhfEsW/cAXw.NIlc5d/K",
          "isAdmin": false,
          "image": "https://images.pexels.com/photos/321576/pexels-photo-321576.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-321576.jpg&fm=jpg",
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$wWs0yBxnj/.K/adzNCPqheRjlgRsrlLNVNag3JSzj9al8NOB3e666",
          "isAdmin": false,
          "image": "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?cs=srgb&dl=pexels-valeria-ushakova-3094215.jpg&fm=jpg",
          "createdAt": "2022-01-29T05:08:35.000Z",
          "updatedAt": "2022-01-29T05:08:35.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      }
  ]
}

export default {
  components: {
    NavTabs,
    UserCard
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers(){
      this.users = {...dummyData.users}
    }
  },
  created(){
    this.fetchUsers()
  }
}
</script>