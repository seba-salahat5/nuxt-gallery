<template>
    <div :class="{ 'mt-24': !previewImage, 'mt-10': previewImage }" class="grid sm:grid-cols-4 grid grid-cols-1 gap-4">
        <div :class="{ 'col-span-4': !previewImage, 'col-span-3': previewImage }"
            class="flex items-center justify-center w-full">
            <label for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-900 border-dashed rounded-lg cursor-pointer bg-brand hover:bg-blue-100"
                @dragover.prevent @drop="handleDrop">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-text"><span class="font-semibold">Click to
                            upload</span> or drag and drop</p>
                    <p class="text-xs text-text">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" />
                </div>
            </label>
        </div>
        <img v-if="previewImage" :src="previewImage" alt="Preview" class="mt-4 max-w-full max-h-96" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { uploadImage } from '~/services/imageUploadService';
import { useImageStore } from '~/store/index';

export default defineComponent({
    data() {
        return {
            previewImage: '' as string | null,
        };
    },
    methods: {
        handleFileChange(event: Event) {
            const target = event.target as HTMLInputElement;
            const file: File | null = (target.files as FileList)[0] || null;

            this.handleFile(file);
        },
        handleDrop(event: DragEvent) {
            event.preventDefault();
            const file = event.dataTransfer?.files[0];

            this.handleFile(file !== undefined ? file : null);
        },
        async handleFile(file: File | null) {
            if (file) {
                if (!this.isValidImage(file)) {
                    alert('Please select a valid image file (PNG, JPG, GIF) with max size 2MB.');
                    return;
                }
                const reader = new FileReader();
                reader.onload = async () => {
                    this.previewImage = reader.result as string;
                    try {
                        // Call the uploadImage function to upload the image to the server
                        await uploadImage(this.previewImage);
                        console.log('Image uploaded successfully');
                        //add the image to the Pinia store after successful upload
                        useImageStore().addImage(this.previewImage);
                    } catch (error) {
                        console.error('Failed to upload image:', error);
                        // Handle error, display message to the user, etc.
                    }
                };
                reader.readAsDataURL(file);
            }
        },
        isValidImage(file: File): boolean {
            const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
            const maxSize = 2 * 1024 * 1024; // 2MB

            return allowedTypes.includes(file.type) && file.size <= maxSize;
        },
    },
});
</script>