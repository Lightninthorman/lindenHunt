<template>
  <div>
    <navicon
        :pages="pages"
    >
    </navicon>
    <router-view
        :maps="allMaps"
        :map="currentMap"
    >
    </router-view>
  </div>
</template>

<script>
// import PageHeader from "./components/PageHeader.vue";
import Navicon from "./components/Navicon.vue";
import allMaps from "@/data.js"

export default {
    name: "App",
    components: {
        Navicon
    },
    data: function(){
    return {
        currentPage: "home",
        currentMap:{},
        allMaps: allMaps,
        pages: [
            {
                page:"/",
                display:"Home",
                header:"Linden Commons Treasure Hunt",
                icon:"./components/images/challenge-icon.png",
                details:"challenges"
            },
            {
                page:"/maps",
                display:"Maps",
                header:"Maps",
                icon:"./components/images/treasure-icon.png",
                details:"Choose a map and start searching for treasure!"
            },
            {
                page:"/challenges",
                display:"Challenges",
                header:"Challenges",
                icon:"./components/images/challenge-icon.png",
                details:"challenges"
            },
            {
                page:"/new",
                display:"New Map",
                header:"Add New Map",
                icon:"./components/images/add-map-icon.png",
                details:"Add your own map"
            }
        ]

    }
},
methods:{
    pageChange: function(newPage){
        this.currentPage = newPage;
    }
}
};
</script>

<style >
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,700|Raleway:400,700&display=swap');

    /* font-family: 'Poppins', sans-serif;
    font-family: 'Raleway', sans-serif; */

    body{
        background-color: linen;
        font-family: 'Poppins', sans-serif;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Raleway', sans-serif;
    }

</style>
