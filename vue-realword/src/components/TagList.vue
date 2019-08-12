<template>
  <div class="tag-list">
    <router-link
      class="tag-pill tag-default"
      v-for="tag in tags"
      :key="tag"
      :to="{ name: 'home-tags', params: { tag: tag } }"
    >
      {{ tag }}
    </router-link>
    <!-- <a href="" class="tag-pill tag-default">programming</a>
    <a href="" class="tag-pill tag-default">javascript</a>
    <a href="" class="tag-pill tag-default">emberjs</a>
    <a href="" class="tag-pill tag-default">angularjs</a>
    <a href="" class="tag-pill tag-default">react</a>
    <a href="" class="tag-pill tag-default">mean</a>
    <a href="" class="tag-pill tag-default">node</a>
    <a href="" class="tag-pill tag-default">rails</a> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
   ...mapState({
     tags: state => state.home.tags
   })
  }
};
</script>
