<template>
  <div class="card" bis_skin_checked="1">
    <div class="card-header" bis_skin_checked="1">
      <strong>2</strong> followings (追蹤者)
    </div>
    <div class="card-body" bis_skin_checked="1">
      <router-link
        v-for="following in userFollowings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userFollowings: {
      type: Array,
      required: true,
    },
  },
};
</script>
