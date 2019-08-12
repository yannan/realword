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
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
      </div>
      <a href="" class="preview-link">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
      </a>
    </div>
    <Pagination v-bind:currentPage.sync="currentPage" :total="articlesCount" />
    {{ currentPage }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import Pagination from "./Pagination";
import { GET_ARTICLES } from "@/store/type";
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
      loading: state => state.home.loading
    })
  }
};
</script>
