<template>
    <header class="mt-20 bg-white flex justify-between content-baseline sticky ">
        <h1 class="text-xl text-text font-bold my-2">Gallery</h1>
        <button
        class="py-2.5 px-6 rounded-full h-11 mb-3 bg-brand text-base text-text font-normal drop-shadow"
        @click="onClickHandler">
            Upload
        </button>
    </header>
</template>

<script>
export default {
    methods: {
        onClickHandler() {
            this.$emit("upload-click");
        }
    }
}
</script>