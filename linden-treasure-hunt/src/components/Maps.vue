<template lang="html">
    <div class="">
        <h1>Maps</h1>
        <div class="row">
            <div class="col-md-3 map-choices" v-for="(map,index) in maps" :key="index">
                <div class="m-1">
                    <h3>{{map.title}}</h3>
                    <img :src="map.stamp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import maps from "@/data.js"

let myMaps = maps
console.log(myMaps);
export default {
    name:"maps",
    data: function (){
        return {
            maps: myMaps
        }
    }
}
</script>

<style lang="css" scoped>
</style>
