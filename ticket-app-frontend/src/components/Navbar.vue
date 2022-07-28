<template>
    <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 text-light">{{ props.name }}</span>
        </div>
    </nav>
</template>

<script setup>
const props = defineProps({
    name: String
})  
</script>
