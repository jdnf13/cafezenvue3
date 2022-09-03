<script lang="ts">
//import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent ({
    name: 'CarouselPromo',
   
    props: {
        dataCards: null
    },
   
});
</script>
<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
                <div class="d-block w-100" style="width: 18rem;margin-left: 2rem;margin-bottom: 1rem;">
                    <img src="@/static/img1.png" class="card-img-top-prom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Promociones del día</h5>
                        <p class="card-text">Encuentras las mejores ofertas del día</p>
                        <p class="card-text"> y lleva tu cafe 100% Colombiano</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item " data-bs-interval="2500" v-for="result of dataCards" v-bind:key="result._id">
                <div class="d-block w-100" style="width: 18rem;margin-left: 2rem;margin-bottom: 1rem;">
                    <img src="@/static/img1.png" class="card-img-top-prom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{result.producto}}</h5>
                        <p class="card-text">{{result.detalle}}</p>
                        <p class="card-text">${{result.valor}}</p>
                    </div>
                </div>
            </div>
            <!--div class="carousel-item" data-bs-interval="2500">
                <div class="d-block w-100" style="width: 18rem;margin-left: 2rem;margin-bottom: 1rem;">
                    <img src="@/static/img1.png" class="card-img-top-prom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">product</h5>
                        <p class="card-text">description</p>
                        <p class="card-text">$price</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2500">
                <div class="d-block w-100" style="width: 18rem;margin-left: 2rem;margin-bottom: 1rem;">
                    <img src="@/static/img1.png" class="card-img-top-prom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">product</h5>
                        <p class="card-text">description</p>
                        <p class="card-text">$price</p>
                    </div>
                </div>
            </div-->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<style>
    .carousel{
        max-width: 100%;
        max-height: 100%;
    }
    .card-img-top-prom{
        max-width: 50%;
        max-height: 50%;
    }
</style>