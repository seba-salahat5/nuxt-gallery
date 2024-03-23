<template>
    <div class="md:mx-28 mx-10">
        <AppHeader @upload-click="toggleUpload" />
        <hr class="border-t border-line my-0">
        <div v-if="!showUpload">
            <slot />
        </div>
        <div v-else>
            <DropzoneComponent @cancel="toggleUpload" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showUpload: false
    };
  },
  methods: {
    toggleUpload() {
      this.showUpload = !this.showUpload;
    }
  }
};
</script>
