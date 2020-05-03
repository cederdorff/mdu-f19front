<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <contact-info></contact-info>
  </div>
</template>

<script>
import ContactInfo from '../components/ContantInfo.vue'

export default {
  name: 'Contact',
  components: {
    ContactInfo
  }
}
</script>
