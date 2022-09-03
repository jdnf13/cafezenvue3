<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import CardProduct from '@/components/CardProduct.vue'; // @ is an alias to /src
import CarouselPromo from '@/components/CarouselPromo.vue';

export default defineComponent({
  name: 'HomeView',
  data(){
    
    return {
      filter:[{}],
      results:undefined,
    }
  },
  created () { 
      this.getData()
    },
  methods:{
    getData () {
      let arrayPromo: object[]=[];
      axios.get("http://localhost:3003/productos-get")
          .then((res) => {
            this.results = res.data.data;
            res.data.data.map((item: { promocion: boolean; codigo:string; descuento:number; detalle:string; linea:string; producto:string; valor:number }) => {
              if(item.promocion === true){
                arrayPromo.push(item);
              }
            })
            this.filter = arrayPromo
          })
          .catch((err) => {
            console.log(err);
          })
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
    <div  v-if="filter.length > 1">
      <img class = 'logo' alt="Vue logo" src="../static/logo.png">   
      <h1>En Pormoción</h1>
      <CarouselPromo
        v-bind:dataCards="filter"
      />
    </div>
    <div v-else>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <hr/>
    <h1 v-on:click="getData()">Tienda</h1>
    <div style="margin-left: 1rem;margin-right: 1rem;">
    <div class="row justify-content-evenly" >    
    <div class="col" v-for="result of results" v-bind:key="result._id" >
      <CardProduct
        v-bind:description="result.detalle"
        v-bind:product="result.producto"
        v-bind:price="result.valor"
        v-bind:_id="result._id"
        v-bind:promocion="result.promocion"
      />
    </div>
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
