<template>
    <div class="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-3">
        <ImageCard v-for="index in 5" :key="index" />
    </div>
</template>