<script>
import axios from 'axios'
import BookCard from '../components/books/BookCard.vue'

export default {
    data() {
        return{
            pageTitle: 'Book Detail',
            book: {},
        }
    },

    components: {
        BookCard
    },

    methods: {
    fetchBookDetails() {
      axios.get("http://127.0.0.1:8000/api/books/" + this.$route.params.id).then((response) => {
        this.book = response.data;
      })
    }
  },

  created() {
    this.fetchBookDetails();
  }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-3">
            {{ this.$route.params.id }}
        </h2>
        <BookCard :book="book"/>
    </div>
</template>

<style lang="scss" scoped></style>