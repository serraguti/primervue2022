<template>
    <div>
        <h1>Métodos Filters</h1>
        <ul>
            <li v-for="name in nombres" :key="name">
                {{ $filters.mayuscula(name) }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"MetodosFilters",
        data() {
            return {
                nombres: ["Adrian", "Diana", "Lucia", "Marcos", "Carlos"]
            }
        }
    }
</script>