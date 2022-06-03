<template>
  <div class="card" bis_skin_checked="1">
    <div class="card-header" bis_skin_checked="1">
      <strong>{{ userFavoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body" bis_skin_checked="1">
      <router-link
        v-for="restaurant in userFavoritedRestaurants"
        :key="restaurant.id"
        :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      >
        <img :src="restaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userFavoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>
