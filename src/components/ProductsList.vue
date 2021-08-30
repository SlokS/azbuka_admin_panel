<template>
  <div class="products-list">
    <ui-button classButton="products-list__button">Добавить продукт</ui-button>
  </div>
</template>
<script>
import UiButton from './UI/UiButton.vue';
import '../styles/productsList.less';

export default {
  name: 'Products',
  components: {
    UiButton,
  },
};
</script>
