<template>
    <div>
        <h1>Métodos Filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                {{ $filters.getNumeroDoble(num) }}
            </li>
        </ul>
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
                nombres: ["Adrian", "Diana", "Lucia", "Marcos", "Carlos"],
                numeros: [5,6,7,8,2,45]
            }
        }
    }
</script>