<template>
  <div class="home">
    <form
      class="home__form form"
      v-if="$store.state.toRegistration"
      @submit.prevent="registrationClick()"
    >
      <div class="caption">Регистрация</div>
      <input class="form__input" placeholder="Логин" type="text" v-model.trim="login" required>
      <input class="form__input" placeholder="password" type="password" v-model="password" required>
      <input class="form__input" placeholder="email" type="email" v-model.trim="email" required>
      <input class="form__input" placeholder="Имя" type="text" v-model.trim="firstName" required>
      <input class="form__input" placeholder="Отчество" type="text" v-model.trim="lastName">
      <ui-button classButton="form__button">Зарегистрироваться</ui-button>
    </form>
    <form
      class="home__form form"
      v-else-if="$store.state.toLogin"
      @submit.prevent="loginClick"
    >
      <div class="caption">Войти</div>
      <input class="form__input" placeholder="Логин" type="text" v-model.trim="login" required>
      <input class="form__input" placeholder="password" type="password" v-model="password" required>
      <ui-button classButton="form__button">Войти</ui-button>
    </form>
    <div v-else>
      Привет {{$store.state.currentUser.firstName}}!
    </div>
    <div v-if="$store.state.isErrorForm">
      {{$store.state.errorFormText}}
    </div>
  </div>
</template>

<script>
import UiButton from '../components/UI/UiButton.vue';
import '../styles/home.less';

export default {
  name: 'Home',
  data() {
    return {
      login: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    };
  },
  components: {
    UiButton,
  },
  methods: {
    registrationClick() {
      // validate
      this.$store.commit('registration', {
        login: this.login,
        password: this.password,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
      });
    },
    loginClick() {
      if (this.login && this.password) {
        this.$store.commit('login', {
          login: this.login,
          password: this.password,
        });
      }
    },
  },
};
</script>
