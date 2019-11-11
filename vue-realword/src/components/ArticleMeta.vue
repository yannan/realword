<template>
  <div class="article-meta">
    <!-- <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a> -->
    <router-link to="#">
      <img :src="image" alt="avatar">
    </router-link>
    <div class="info">
      <a href="" class="author">{{ username }}</a>
      <span class="date">{{ updatedAt }}</span>
    </div>
    <button class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp; Follow Eric Simons
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp; Favorite Post <span class="counter">({{ favoritesCount }})</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "ArticleMeta",
  props: {
    username: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      required: true
    },
    following: {
      type: Boolean,
      required: true
    },
    favorited: {
      type: Boolean,
      required: true
    },
    favoritesCount: {
      type: Number,
      required: true
    }
  }
}
</script>
