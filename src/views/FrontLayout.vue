<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  data() {
    return {
      navbarStatus: false,
    };
  },
  components: {
    NavbarComponent,
    FooterComponent,
    ToastMessages,
  },
  watch: {
    $route: 'listenerScroll',
  },
  methods: {
    listenerScroll() {
      if (this.$route.path === '/') {
        window.addEventListener('scroll', this.toggleNav);
      } else {
        window.removeEventListener('scroll', this.toggleNav);
        this.navbarStatus = true;
      }
    },
    toggleNav() {
      const scrollTop = window.scrollY;
      const position = window.innerHeight / 3;

      if (scrollTop > position) {
        this.navbarStatus = true;
      } else {
        this.navbarStatus = false;
      }
    },
  },
  mounted() {
    this.listenerScroll();
  },
};
</script>

<template>
  <NavbarComponent :class="{ 'showNav': navbarStatus }" />
  <RouterView class="view" />
  <FooterComponent />
  <ToastMessages />
</template>
