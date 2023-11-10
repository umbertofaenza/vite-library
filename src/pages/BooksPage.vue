<script>
import axios from 'axios';
import BookCard from '../components/books/BookCard.vue';

export default {
  data() {
    return {
      title: "Books",
      books: [],
    };
  },

  components: {
    BookCard
  },

  methods: {
    fetchBooks() {
      axios.get('http://127.0.0.1:8000/api/books').then((response) => {
        this.books = response.data;
      })
    }
  },

  created() {
    this.fetchBooks();
  }
};
</script>

<template>
    <div class="container">
        <h1>{{title}}</h1>

        <div class="row row-cols-3 g-3">
          <BookCard v-for="book in books" :book="book"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>