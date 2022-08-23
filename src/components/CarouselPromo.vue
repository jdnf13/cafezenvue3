<script lang="ts">
export default {
    name: 'CarouselPromo',
    props: {
        /*description: {
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
        }*/
    }
}
</script>
<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2500">
                <div class="d-block w-100" style="width: 18rem;margin-left: 2rem;margin-bottom: 1rem;">
                    <img src="@/static/img1.png" class="card-img-top-prom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">product</h5>
                        <p class="card-text">description</p>
                        <p class="card-text">$price</p>
                        <button type="button" class="btn btn-light">Ver mas...</button>
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
                        <button type="button" class="btn btn-light">Ver mas...</button>
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
                        <button type="button" class="btn btn-light">Ver mas...</button>
                    </div>
                </div>
            </div>
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