<template>
  <div v-if="isStoreInitialized" class="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-3">
    <ImageCard v-for="(image, index) in uploadedImages" :key="index" :src="image" />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue';
import { useImageStore } from '~/store/index';

export default defineComponent({
  setup() {
    const imageStore = useImageStore();
    const uploadedImages = ref<string[]>([]);
    const isStoreInitialized = ref(false);

    onBeforeMount(async () => {
      console.log("Initializing store...");
      await imageStore.initializeStore();
      uploadedImages.value = imageStore.getUploadedImages;
      isStoreInitialized.value = true;
    });

    return {
      uploadedImages,
      isStoreInitialized,
    };
  },
});
</script>




