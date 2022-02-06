<template>
  <div class="col-3">
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
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mixins: [emptyImageFilter]
}
</script>