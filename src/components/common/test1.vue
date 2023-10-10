<script setup>
    import {ref, onMounted} from 'vue'
    const count = ref(0)
    const isDisableButton = ref(false)
    function increment() {
        count.value++;
        if (count.value > 10) {
            console
            .log('disable')
            this.isDisableButton = true;
        }
    }
    onMounted(() => {
        
    })
</script>
<template>
    <button :disabled="isDisableButton" @click="increment">count is: {{ count }}</button>
</template>