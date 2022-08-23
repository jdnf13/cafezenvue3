<script lang="ts">
export default {
    name: 'CardProduct',
    props: {
        description: {
            type: String,
            default: ''
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
  <img src="@/static/img1.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product}}</h5>
    <p class="card-text">{{description}}</p>
    <p class="card-text">${{price}}</p>
    <hr/>
    <button type="button" class="btn btn-light">Ver mas...</button>
  </div>
</div>

</template>

<style>
</style>