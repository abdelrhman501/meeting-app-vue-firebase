<template>
  <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Meetings Logs</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/meetings" v-if="user">meetings</router-link>
          <router-link class="nav-item nav-link" to="/login" v-if="!user">login</router-link>
          <router-link class="nav-item nav-link" to="/register" v-if="!user">register</router-link>
          <button class="nav-item nav-link btn btn-link" @click="$emit('logout')">logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navigation",
  props: ["user"]
};
</script>
