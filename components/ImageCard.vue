<template>
    <div class="w-full relative group">
        <img :src="src" class="object-fill sm:w-72 h-96"/>
        <div class="absolute top-0 right-0 mt-4 mr-4">
            <svg @click="removeImage" class="absolute top-0 right-0 mt-4 mr-4 w-6 h-6 fill-none group-hover:fill-white stroke-1 cursor-pointer"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useImageStore } from '~/store/index';

export default defineComponent({
    props: {
        src: {
            type: String,
            required: true
        }
    },
    methods: {
        removeImage() {
            const imageStore = useImageStore();
            const index = imageStore.uploadedImages.indexOf(this.src);
            if (index !== -1) {
                imageStore.removeImage(index);
            }
        }
    }
});
</script>