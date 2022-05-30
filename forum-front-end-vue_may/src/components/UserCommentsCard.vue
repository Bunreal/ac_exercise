<template>
  <div class="card" bis_skin_checked="1">
    <div class="card-header" bis_skin_checked="1">
      <strong>30</strong> 已評論餐廳
    </div>
    <div class="card-body" bis_skin_checked="1">
      <router-link
        v-for="comment in userComments"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userComments: {
      type: Array,
      required: true,
    },
  },
};
</script>
