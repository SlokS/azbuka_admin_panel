<template>
  <header class="header">
    <router-link to="/"><img class="header__logo" src="../images/logo.svg"></router-link>
    <div id="nav">
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О портале</router-link> |
      <router-link to="/products">Обзор продуктов</router-link>
    </div>
    <div class="header__button" v-if="$store.state.isAutorized">
      <router-link to="/">
        <ui-button classButton="header__leave" @click="toLeave">Выйти</ui-button>
      </router-link>
    </div>
    <div class="header__buttons"  v-else>
      <router-link to="/">
        <ui-button classButton="header__login" @click="toLogin">Войти</ui-button>
      </router-link>
      <router-link to="/">
        <ui-button
          classButton="header__registration"
          @click="toRegistration"
        >Регистрация</ui-button>
      </router-link>
    </div>
  </header>
</template>

<script>
import UiButton from './UI/UiButton.vue';
import '../styles/header.less';

export default {
  name: 'Header',
  components: {
    UiButton,
  },
  methods: {
    toLeave() {
      this.$store.commit('toLogin');
      this.$store.commit('toggleAutorized');
      document.cookie = 'adminUserId=0';
    },
    toLogin() {
      this.$store.commit('toLogin');
    },
    toRegistration() {
      this.$store.commit('toRegistration');
    },
    getCookie(name) {
      const cookies = document.cookie.split(';');

      let idUser = cookies.filter((item) => (
        item.indexOf(name) !== -1
      ))[0].trim();
      idUser = idUser.slice(idUser.indexOf('=') + 1);
      return idUser;
    },
  },
  created() {
    const currentUserId = +this.getCookie('adminUserId');
    if (currentUserId) {
      this.$store.commit('cookieLogin', currentUserId);
    }
  },
};
</script>
