<script lang="ts">
export default {
    name: 'CardProduct',
    data: function(){
        //results: Array<string>
        return {
        idRender:Math.random()
        }
    },
    props: {
        description: {
            type: String,
            default: ''
        },
        promocion: {
            type: Boolean,
            default: false
        },
        product:  {
            type: String,
            default:''
        },
        price: {
            type:Number,
            default:0
        },
        _id:{
            type:Number,
            default:0
        }
    }
}
</script>

<template>
<!--<div class="col">
      One of three columns
</div>
<div class="col">
      One of three columns
</div>-->

<div class="card" style="width: 18rem;margin-left: 2rem;margin-bottom: 1rem;">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
        <img src="@/static/img1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="5000">
        <img src="@/static/img1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="5000">
        <img src="@/static/img1.png" class="d-block w-100" alt="...">
        </div>
    </div>
    </div>   
  <div class="card-body" style="text-align: start;">
    <h1 class="card-title">{{product}}</h1>
    <p class="card-text">{{description}}</p>
    <h2 class="card-text">${{price}}</h2>
    <hr/>
  </div>
    <button type="button" class="btn btn-light">Ver mas...</button>
</div>

</template>

<style>

</style>