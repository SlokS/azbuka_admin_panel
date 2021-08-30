<template>
  <div class="products">
    <ProductsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from '../components/ProductsList.vue';

export default {
  name: 'Products',
  components: {
    ProductsList,
  },
};
</script>
