<template>
  <div id="app">
    <header>
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/add/payment">Cost adding</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  padding: 15px;
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #1e3b2c;
}
.container {
  display: flex;
  gap: 40px;
}
</style>
