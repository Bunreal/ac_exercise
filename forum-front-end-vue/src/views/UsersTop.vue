// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3"         
        v-for="user in users"
        :key="user.id">
      <a href="#">
        <img
          :src="user.image | emptyImage"
          width="140px"
          height="140px"
        >
      </a>
      <h2>{{user.name}}</h2>
      <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
      <p class="mt-3">
        <button
          v-if="user.isFollowed"
          type="button"
          class="btn btn-danger"
          @click.stop.prevent="deleteFollowing(user.id)"
        >
          取消追蹤
        </button>
        <button
          type="button"
          class="btn btn-primary"
          v-else
          @click.stop.prevent="addFollowing(user.id)"    
        >
          追蹤
        </button>
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from './../utils/mixins'

import { Toast } from './../utils/helpers'
import usersAPI from './../apis/users'

export default {
  components: {
    NavTabs,
  },
  mixins: [emptyImageFilter],
  data () {
    return {
      users: []
    }
  },
  methods: {
    async fetchTopUsers () {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    async addFollowing (userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        console.log('data', data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            }
          }
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  },
  created(){
    this.fetchTopUsers()
  }
}
</script>