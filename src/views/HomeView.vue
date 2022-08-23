<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import CardProduct from '@/components/CardProduct.vue'; // @ is an alias to /src
import CarouselPromo from '@/components/CarouselPromo.vue';

export default defineComponent({
  name: 'HomeView',
  data: function(){
    //results: Array<string>
    return {
      results:undefined
    }
  },
  created () { 
      this.getData()
    },
  methods:{
    getData () {
      console.log('getData')
      let result = axios.get("http://localhost:3003/productos-get")
          .then((res) => {
            this.results = res.data.data;
            console.log('consulta data',res.data.data)
            console.log('this.results',this.results)
          })
          .catch((err) => {
            console.log(err);
          })
          console.log('data --> ',result);
    }
  },
  components: {
    CardProduct,
    CarouselPromo
  },
});
</script>

<template>
  <div class="container">
    <img class = 'logo' alt="Vue logo" src="../static/logo.png">
    <div>
      <CarouselPromo/>
    </div>
    <hr/>
    <div class="row justify-content-evenly" >    
    <div class="col" v-for="result of results" v-bind:key="result._id" >
      <CardProduct
        v-bind:description="result.producto"
        v-bind:product="result.codigo"
        v-bind:price="result.valor"
        v-bind:_id="result._id"
      />
    </div>
  </div>
  </div>
</template>

<style>
  .logo {
    max-width: 25%;
    max-height: 25%;
  }
</style>
