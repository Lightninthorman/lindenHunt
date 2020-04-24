<template>
  <div>
    <!-- <page-header
        :pages="pages"
        :currentPage="currentPage"
    >
    </page-header> -->
    <navicon
        :pages="pages"
        :currentPage="currentPage"
        @pageChange="pageChange"
    >
    </navicon>
    <home
        v-if="currentPage === 'home'"

    >
</home>
    <maps
        v-if="currentPage === 'maps'"
        :maps="allMaps"
    >
    </maps>
    <challenges
        v-if="currentPage === 'challenges'"
        :maps="allMaps"
    >
    </challenges>
    <new
        v-if="currentPage === 'new'"
    >
    </new>
  </div>
</template>

<script>
// import PageHeader from "./components/PageHeader.vue";
import Navicon from "./components/Navicon.vue";
import Home from "./components/Home.vue";
import Maps from "./components/Maps.vue";
import Challenges from "./components/Challenges.vue";
import New from "./components/New.vue";
import allMaps from "@/data.js";

export default {
    name: "App",
    components: {
        // PageHeader,
        Navicon,
        Home,
        Maps,
        Challenges,
        New
    },
    data: function(){
    return {
        currentPage: "home",
        currentMap:{},
        allMaps: allMaps,
        pages: [
            {
                page:"home",
                display:"Home",
                header:"Linden Commons Treasure Hunt",
                icon:"/images/challenge-icon.png",
                details:"challenges"
            },
            {
                page:"maps",
                display:"Maps",
                header:"Maps",
                icon:"/images/treasure-icon.png",
                details:"Choose a map and start searching for treasure!"
            },
            {
                page:"challenges",
                display:"Challenges",
                header:"Challenges",
                icon:"/images/challenge-icon.png",
                details:"challenges"
            },
            {
                page:"new",
                display:"New Map",
                header:"Add New Map",
                icon:"/images/add-map-icon.png",
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
