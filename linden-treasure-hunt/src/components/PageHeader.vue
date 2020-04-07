<template>
    <header class="container-fluid p-2">
        <div class="logo">
            <img src="/images/house_icon.png" alt="Linden Commons Treasure Hunt House Icon">
        </div>
        <div class="header-title ml-2">
            <h1> {{currentTitle.header}} </h1>
        </div>

    </header>
</template>

<script>
export default {
    name:"page-header",
    props:["pages","currentPage"],
    computed:{
        currentTitle(){
            return this.pages.find(element => element.page===this.currentPage)
        }
    }
}
</script>

<style lang="css" scoped>

header{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    height:200px;
    width:100%;
    background: rgb(204,86,20);
    background: linear-gradient(90deg, rgba(204,86,20,0) 20%, rgba(204,86,20,1) 73%);

}

div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

img{
    width:100px;
}

.header-title{
    width:100%;
    text-align: center;

    background-image: url("/images/dashed-path-blue-01.png");
    background-repeat:no-repeat;
    background-size: 100% 100%;




}

</style>
