<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<template>
  <NavbarComponent />
  <RouterView class="view" />
  <FooterComponent />
</template>
