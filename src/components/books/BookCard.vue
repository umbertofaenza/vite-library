<script>
export default {
    props: {
        book: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <div class="card-header">{{ book.id }}</div>
            <div class="card-body">
                <ul>
                    <li>Title: {{ book.title }}</li>
                    <li>Author: {{ book.author }}</li>
                </ul>
            </div>
            <div class="card-footer">
                <router-link :to="{name: 'book-detail', params: {
                    id: book.id,
                }}" class="btn btn-primary">Dettaglio</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>