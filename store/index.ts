import { defineStore } from 'pinia';
export const useImageStore = defineStore('image', {
    state: () => ({
      uploadedImages: [] as string[],
    }),
    actions: {
      addImage(image: string) {
        this.uploadedImages.push(image);
      },
    },
    getters: {
      getUploadedImages(): string[] {
        return this.uploadedImages;
      },
    },
  });