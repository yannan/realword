<template>
  <div v-if="articlesCount > 0">
    <div
      class="article-preview"
      v-for="(article, index) in articles"
      v-bind:key="article.title + index"
    >
      <div class="article-meta">
        <a href="profile.html"><img :src="article.author.image"/></a>
        <div class="info">
          <a href="" class="author">{{ article.author.username }}</a>
          <span class="date">{{ article.updatedAt }}</span>
        </div>
        <button
          class="btn btn-sm pull-xs-right"
          @click="toggleFavorite(article)"
          :class="{
            'btn-primary': article.favorited,
            'btn-outline-primary': !article.favorited
          }"
        >
          <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
      </div>
      <router-link :to="{ name: 'articles-page', params: {slug: article.slug} }" class="preview-link">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
        <ul class="tag-list">
          <li
            class="tag-default tag-pill tag-outline"
            v-for="(tag, index) of article.tagList"
            :key="index"
          >
            <span v-text="tag" />
          </li>
        </ul>
      </router-link>
    </div>
    <Pagination v-bind:currentPage.sync="currentPage" :total="articlesCount" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Pagination from "./Pagination";
import { GET_ARTICLES, ADD_FAVORITE, REMOVE_FAVORITE } from "@/store/type";
import { PERPAGE_LIMIT } from "@/store/constant";
export default {
  name: "List",
  components: {
    Pagination
  },
  data() {
    return {
      currentPage: 1
    };
  },
  watch: {
    currentPage(page) {
      this.$store.dispatch(GET_ARTICLES, {
        offset: PERPAGE_LIMIT * (page - 1),
        limit: PERPAGE_LIMIT
      });
    }
  },
  computed: {
    ...mapState({
      articles: state => state.home.articles,
      articlesCount: state => state.home.articlesCount,
      loading: state => state.home.loading,
      isAuthenticated: state => state.auth.isAuthenticated
    })
  },
  methods: {
    toggleFavorite({ slug, favorited }) {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      if (favorited) {
        this.$store.dispatch(REMOVE_FAVORITE, { slug });
      } else {
        this.$store.dispatch(ADD_FAVORITE, { slug });
      }
    }
  }
};
</script>
