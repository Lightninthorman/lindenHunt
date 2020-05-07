<template lang="html">
    <main class="container-fluid">

        <div>
            <div class="my-4">
                <h2>Maps</h2>
                <p>Each map has clues that will lead you to the stamp treasure shown. Select a map below to go to the clues page and start collecting treasure in your notebooks! (The level rating for each is a guess)</p>
            </div>
            <div class="row" >
                <div class="col-md-3"
                    v-for="(map,index) in maps"
                    :key="index"
                >
                <router-link :to="'/maps/' + map.id" tag="div" class="page-options p-2 my-2">
                        <img :src="map.stamp" :alt="map.title">
                        <h3>{{map.title}}</h3>
                        <p><span class="font-weight-bold">Level: </span>{{map.level}}</p>
                        <p><span class="font-weight-bold">Location: </span>{{map.location}}</p>
                        <p><span class="font-weight-bold">Details: </span>{{textSnippet(map.details)}}</p>

                </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name:"maps",
    props:['maps'],
    methods:{
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

    h2{
        text-align: center;
        font-size: 700;
    }

    h3{
        text-align: center;
    }

    .border{
        border:3px solid red;
    }

    .page-options{
        display: block;
        height:95%;
        border:3px solid #7D7672;
        background-image: url("./images/mappaper.png");
        text-align: center;
        cursor:pointer;
        border-radius: 10px;



    }
</style>
