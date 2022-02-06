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
          <p>
                </p><form action="/following/3" method="POST" style="display: contents;"><button type="submit" class="btn btn-primary">追蹤</button></form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
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
        'Followings': []
      })
    }
  }
}
</script>