<template>
  <div >
    <page-header :pages="pages" :currentPage="currentPage"></page-header>
    <home :pages="pages" :currentPage="currentPage" @pageChange="pageChange"></home>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import Home from "./components/Home.vue";

export default {
    name: "App",
    components: {
        PageHeader,
        Home
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
