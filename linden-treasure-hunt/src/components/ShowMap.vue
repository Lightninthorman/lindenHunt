<template lang="html">
    <div class="row m-2">
        <div class="col-md-2 my-2 d-flex justify-content-center align-items-start">
            <img :src="map.stamp" :alt="map.title">
        </div>
        <div class="col-md-10 my-2">
            <h1>{{map.title}}</h1>
            <p><span>Level: </span>{{map.level}}</p>
            <p><span>Location: </span>{{map.location}}</p>
            <p><span>Details: </span>{{map.details}}</p>
            <button type="button" name="button" @click="$emit('back',false)">Back</button>
        </div>

    </div>
</template>

<script>
export default {
    name:"showMap",
    props:["map"]
}
</script>

<style lang="css" scoped>
    h1{
        text-align: center;
    }
    span{
        font-weight: bold;
    }
    img{
        width:50%;
    }

    @media only screen and (min-width: 768px){
        h1{
            text-align: left;
        }
        img{
            width:100%;
        }
    }
</style>
