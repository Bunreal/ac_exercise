// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
    <img
      :src="user.image"
      width="140px"
      height="140px"
    >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-if="!user.isFollowed"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'

const dummyUsers =  [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$QJsMzOMuaTfmav.PQmVF6.jqAA.vp5juQw3ivXKlzG5DfBAikwJLW",
            "isAdmin": true,
            "image": null,
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
            "image": null,
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
            "image": null,
            "createdAt": "2022-01-29T05:08:35.000Z",
            "updatedAt": "2022-01-29T05:08:35.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
]
export default {
  components: {
    NavTabs
  },
  data(){
    return {
      users: []
    }
  },
  methods: {
    fetchUsers(){
      this.users = [...dummyUsers]
    }
  },
  created(){
    this.fetchUsers()
  }
}
</script>