<template>
  <nav>
    <ul class="pagination">
      <li
        v-for="page in pages"
        :key="page"
        :class="{ 'page-item': true, active: currentPage === page }"
      >
        <a class="page-link" href v-text="page" @click.prevent="onPageChange(page)" />
      </li>
    </ul>
  </nav>
</template>
<script>
import { PERPAGE_LIMIT } from "@/store/constant";
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    onPageChange(page) {
      if (page === this.currentPage) {
        return;
      }
      this.$emit("update:currentPage", page);
    }
  },
  computed: {
    pages() {
      return Array.from(Array(Math.ceil(this.total / PERPAGE_LIMIT)).keys()).map(i => i + 1);
    }
  }
};
</script>
