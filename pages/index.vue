<template>
    <div class="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-3">
        <ImageCard v-for="(image, index) in uploadedImages" :key="index" :src="image"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useImageStore } from '~/store/index';

export default defineComponent({
    
  setup() {
    const imageStore = useImageStore();
    return {
      uploadedImages: imageStore.uploadedImages,
    };
  },
});
</script>
