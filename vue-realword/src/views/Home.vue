<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="isAuthenticated">
                <router-link class="nav-link" to="/my-feed" active-class="active"
                  >Your Feed</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/" active-class="active" exact
                  >Global Feed</router-link
                >
              </li>
            </ul>
          </div>
          <div class="article-preview" v-show="loading">loading</div>
          <div v-show="!loading">
            <List v-if="articlesCount > 0" />
            <div class="article-preview" v-else>no data</div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <TagList />
            <!-- <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import List from "@/components/List.vue";
import TagList from "@/components/TagList.vue";
import { GET_ARTICLES, GET_TAGS } from "@/store/type";
import { PERPAGE_LIMIT } from "@/store/constant";
export default {
  name: "home",
  components: {
    List,
    TagList
  },
  data: () => ({
    path: undefined
  }),
  async created() {
    this.path = this.$route.path.includes("my-feed") ? "/feed" : "";
    this.$store.dispatch(GET_TAGS)
  },
  computed: {
    ...mapState({
      articlesCount: state => state.home.articlesCount,
      loading: state => state.home.loading,
      isAuthenticated: state => state.auth.isAuthenticated,
      tags: state => state.home.tags
    })
  },
  watch: {
    $route() {
      this.path = this.$route.path.includes("my-feed") ? "/feed" : "";
    },
    path() {
      this.$store.dispatch(GET_ARTICLES, {
        path: this.path,
        offset: 0,
        limit: PERPAGE_LIMIT
      });
    }
  }
};
</script>
