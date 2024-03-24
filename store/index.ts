/*import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
    state: () => ({
      uploadedImages: [] as string[],
    }),
    actions: {
      addImage(image: string) {
        this.uploadedImages.push(image);
        localStorage.setItem('uploadedImages', JSON.stringify(this.uploadedImages));
      },

      initializeStore() {
        const storedImages = localStorage.getItem('uploadedImages');
        if (storedImages) {
          this.uploadedImages = JSON.parse(storedImages);
        }
      },
    },
    getters: {
      getUploadedImages(): string[] {
        return this.uploadedImages;
      },
    },
  });*/

  import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
    state: () => ({
      uploadedImages: [] as string[],
    }),
    actions: {
      addImage(image: string) {
        this.uploadedImages.push(image);
        localStorage.setItem('uploadedImages', JSON.stringify(this.uploadedImages));
      },

      async initializeStore() {
        const storedImages = localStorage.getItem('uploadedImages');
        if (storedImages) {
          this.uploadedImages = JSON.parse(storedImages);
        }
      },
    },
    getters: {
      getUploadedImages(): string[] {
        return this.uploadedImages;
      },
    },
  });
