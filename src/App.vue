<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="appView">
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">VueProject</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" to="/">Todo List</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/products">News</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
            </ul>
            <form class="d-flex" role="search" >
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <RouterView />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;800&display=swap');

.appView {
  font-family: 'Gabarito';
}
</style>
