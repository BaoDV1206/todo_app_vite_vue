<template>
  <div>
    <h1>Vue Popup</h1>
    <button @click="() => handleButton('buttonClose')" 
    >Open Popup</button>
  </div>
</template>
<script >
import { ref } from 'vue';
const buttonStatus = ref({
  buttonClose: false,
})

const handleButton = (status) => {
  buttonStatus.value['buttonClose'] = !buttonStatus.value['buttonClose'];
}
export default {
  components: {
    PopUp
  },
  setup () {
    return {
      buttonStatus,
      handleButton
    } 
  }
}
</script>