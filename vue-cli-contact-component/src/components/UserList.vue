<template>
  <section>
    <article v-for="user in users" :key="user.name">
      <h3>{{user.name}}</h3>
      <a :href="`mailto:${user.mail}`">{{user.mail}}</a>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "Birgitte", mail: "bki@eaaa.dk" },
        { name: "Lykke", mail: "lyda@eaaa.dk" },
        { name: "Rasmus", mail: "race@eaaa.dk" }
      ]
    };
  }
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}
</style>
