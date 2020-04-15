<template lang="html">
    <main class="container-fluid">
        <h2>Maps</h2>
        <div :style="mapShowStyle">
            <div class="row" >
                <div class="col-md-3"
                    v-for="(map,index) in maps"
                    :key="index"
                    @click="selectMap(map)"
                >
                    <div class="page-options p-2 my-2">
                        <img :src="map.stamp" :alt="map.title">
                        <h3>{{map.title}}</h3>
                        <p><span class="font-weight-bold">Level: </span>{{map.level}}</p>
                        <p><span class="font-weight-bold">Location: </span>{{map.location}}</p>
                        <p><span class="font-weight-bold">Details: </span>{{textSnippet(map.details)}}</p>
                    </div>

                </div>
            </div>
        </div>

        <show-map :map="selectedMap" @back="selectMap" v-if="showMap"></show-map >
    </main>
</template>

<script>

import ShowMap from "./ShowMap.vue";


export default {
    name:"maps",
    props:['maps'],
    data: function (){
        return {
            showMap: false,
            selectedMap:{}
        }
    },
    components:{
        ShowMap
    },
    computed:{
        mapShowStyle: function(){
            if(this.showMap){
                return "display:none";
            }else{
                return "display:block";
            }
        }
    },
    methods:{
        selectMap: function (mapChoice){
            if(mapChoice){
                this.showMap = true;
                this.selectedMap = mapChoice;
            }else{
                this.showMap = false;
                this.selectedMap = {}
            }
        },
        textSnippet: function(text){
            if(text.length >= 50){
                let textArray = text.split(" ",10);
                let snippet = textArray.join(" ");
                return snippet + "...";
            }else{
                return text
            }
        }
    }
}
</script>

<style lang="css" scoped>
    img{
        display: block;
        margin:10px auto;
        height:90px;
    }

    h3{
        text-align: center;
    }

    .border{
        border:3px solid red;
    }

    .page-options{
        height:95%;
        border:1px solid black;
        text-align: center;
        cursor:pointer;



    }
    .options-container{
        box-sizing: border-box;
        border:1px solid green;
    }
</style>
