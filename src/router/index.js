import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../pages/HomePage.vue';
import BooksPage from '../pages/BooksPage.vue';
import BookDetail from '../pages/BookDetail.vue';

const router = createRouter({
    history: createWebHistory(),
  
    routes: [
      {
        name: "homepage",
        path: "/",
        component: HomePage,
      },
      {
        name: "books",
        path: "/books",
        component: BooksPage,
      },
      {
        name: 'book-detail',
        path: '/book-detail/:id',
        component: BookDetail
      },
    ],
  });
  
  export { router };