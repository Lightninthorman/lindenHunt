<template>
  <div >
    <page-header :pages="pages" :currentPage="currentPage"></page-header>
    <navicon :pages="pages" :currentPage="currentPage" @pageChange="pageChange"></navicon>
    <maps v-if="currentPage === 'maps'"></maps>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import Navicon from "./components/Navicon.vue";
import Maps from "./components/Maps.vue";

export default {
    name: "App",
    components: {
        PageHeader,
        Navicon,
        Maps
    },
    data: function(){
    return {
        currentPage: "maps",
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
        this.currentPage = newPage
    }
}
};
</script>
