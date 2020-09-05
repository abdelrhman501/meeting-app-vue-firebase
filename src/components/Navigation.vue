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
          <router-link class="nav-item nav-link" to="/meetings">meetings</router-link>
          <router-link class="nav-item nav-link" to="/login">login</router-link>
          <router-link class="nav-item nav-link" to="/register">register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
