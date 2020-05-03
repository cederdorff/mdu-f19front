<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <contact-info></contact-info>
    <h2>Users</h2>
    <user-list></user-list>
  </div>
</template>

<script>
import ContactInfo from '../components/ContantInfo.vue'
import UserList from '../components/UserList.vue'
export default {
  name: 'Contact',
  components: {
    ContactInfo, UserList
  }
}
</script>
