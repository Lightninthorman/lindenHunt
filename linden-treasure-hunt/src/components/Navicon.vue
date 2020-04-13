<template lang="html">
    <nav class="container-fluid">
        <div class="row">
            <div class=" col-md-3"
                v-for="(item,index) in pages"
                :class="pageLinkStyle(item.page)"
                :key="index"
                @click="$emit('pageChange', item.page)">
                <div class="page-options p-2 my-2">
                    <h3>{{item.display}}</h3>
                </div>

            </div>
        </div>

    </nav>
</template>

<script>
export default {
    name:"navicon",
    props:["pages","currentPage"],
    methods:{
        pageLinkStyle: function(page){
            if(page === this.currentPage){
                return "grey"
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .options-container{
        box-sizing: border-box;
        border:1px solid green;
    }

    .page-options{
        border:1px solid black;
        text-align: center;
        cursor:pointer;



    }

    .grey{
        filter:drop-shadow(5px 5px 5px black);
    }
</style>
