<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img :src="userData.image" width="300px" height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userData.name }}</h5>
          <p class="card-text">
            {{ userData.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong> {{ userData.Comments.length }} </strong> 已評論餐廳</li>
            <li><strong> {{ userData.FavoritedRestaurants.length }} </strong> 收藏的餐廳</li>
            <li><strong> {{ userData.Followings.length }} </strong> followings (追蹤者)</li>
            <li><strong> {{ userData.Followers.length }} </strong> followers (追隨者)</li>
          </ul>
          <p></p>
          <form action="/following/3" method="POST" style="display: contents;">
            <router-link :to="{ name: 'user-edit', params: { id: userData.id }}">
              <button type="submit" class="btn btn-primary" v-if="userData.id === currentUser.id">Edit</button>
            </router-link>
            <div v-if="!userData.id === currentUser.id">
              <button type="submit" class="btn btn-primary" v-if="!userData.isFollowed" @click.stop.prevent="addFollowing">
                Follow
              </button>
              <button type="submit" class="btn btn-danger" v-else @click.stop.prevent="deleteFollowing">
                Unfollow
              </button>
            </div>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  props: {
    initialUserData: {
      type: Object,
      default: () => ({
        'id': -1,
        'name': '',
        'email': '',
        'password': '',
        'isAdmin': true,
        'image': '',
        'createdAt': '',
        'updatedAt': '',
        'Comments':[],
        'FavoritedRestaurants':[],
        'Followers': [],
        'Followings': [],
        'isFollowed': false
      })
    }
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
      userData: {}
    }
  },
  created(){
    this.fetchUserData()
  },
  methods: {
    fetchUserData(){
      this.userData = this.initialUserData
    },
    addFollowing(){
      this.userData.isFollowed = true
    },
    deleteFollowing(){
      this.userData.isFollowed = false
    }
  }
}
</script>