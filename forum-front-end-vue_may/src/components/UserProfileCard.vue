<template>
  <div class="card mb-3" bis_skin_checked="1">
    <div class="row no-gutters" bis_skin_checked="1">
      <div class="col-md-4" bis_skin_checked="1">
        <img :src="user.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8" bis_skin_checked="1">
        <div class="card-body" bis_skin_checked="1">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.Followers.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followings.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p v-if="user.isAdmin">
            <router-link
              :to="{
                name: 'user-edit',
                params: {
                  id: user.id,
                },
              }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
          </p>
          <div v-else>
            <button class="btn btn-primary">追蹤</button>
            <button class="btn btn-primary">取消追蹤</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
