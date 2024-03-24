<template>
  <div class="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-3">
    <ImageCard v-for="(image, index) in uploadedImages" :key="index" :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useImageStore } from '~/store/index';

export default defineComponent({
  setup() {
    const imageStore = useImageStore();
    // Initialize the store before mounting the component
    onBeforeMount(() => {
      console.log("Initializing store...");
      imageStore.initializeStore();
    });

    return {
      uploadedImages: imageStore.getUploadedImages,
    };
  },
});
</script>
