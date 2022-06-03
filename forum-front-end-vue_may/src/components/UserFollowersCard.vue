<template>
  <div class="card" bis_skin_checked="1">
    <div class="card-header" bis_skin_checked="1">
      <strong>{{ userFollowers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body" bis_skin_checked="1">
      <router-link
        v-for="follower in userFollowers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userFollowers: {
      type: Array,
      required: true,
    },
  },
};
</script>
