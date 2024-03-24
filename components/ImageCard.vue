<template>
    <div class="w-full">
        <img :src="src" class="object-fill sm:w-72 h-96" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        src: {
            type: String,
            required: true
        }
    },
});

</script>