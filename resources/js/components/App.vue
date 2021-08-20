<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
          <icon></icon>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <h1>DelyGo</h1>
                </ul>
            </div>
        </div>
    </nav>


<nav class="p-3 bg-light text-black">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Inicio</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Productos</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Sobre nosotros</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Contacto</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-black me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </nav>




    <main class="py-4">
        <div class="container">
            <router-view></router-view>
        </div>
    </main>
  </div>
</template>

<script>

import Icon from './Icons.vue'
export default {

    components: {
      Icon
    }
}
</script>