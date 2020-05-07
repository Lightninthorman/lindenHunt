<template lang="html">
    <nav class="container-fluid mt-5 mb-4">
        <!-- <div class="logo" @click="$emit('pageChange', 'home')">
            <img src="/images/house_icon.png" alt="Linden Commons Treasure Hunt House Icon">
        </div> -->
        <router-link to="/" class="text-center m-1" tag="h1">Linden Commons Treasure Hunt</router-link>
        <img id="hamburger" class="showBurger" src="./images/hamburger_icon_1.png" data-toggle="modal" data-target="#navMenuModal"/>

        <div class="modal fade" id="navMenuModal" tabindex="-1" role="dialog" aria-labelledby="navMenuModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 mx-5" id="navMenuModal">Linden Commons Treasure Hunt</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex flex-column align-items-center">
                        <router-link :to="item.page" tag="div" class="page-options close"
                        data-dismiss="modal"
                            v-for="(item,index) in pages"
                            :key="index"
                            >
                                <h3>
                                    {{item.display}}
                                </h3>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="showAll">
            <router-link :to="item.page" tag="div" class="page-options mx-2"
                v-for="(item,index) in pages"
                :class="pageLinkStyle(item.page)"
                :key="index"
                @click="$emit('pageChange', item.page)">

                    <h5>{{item.display}}</h5>


            </router-link>
        </div>



    </nav>
</template>

<script>
export default {
    name:"navicon",
    props:["pages","currentPage","maps"],
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

    h1{
        font-size: 26px;
        font-weight: 700;
        width:300px;
        cursor: pointer;
    }

    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }
    button{
        position:absolute;
        top:20px;
        right:20px;
    }

    img{
        width:100px;
        cursor: pointer;
    }

    .page-options{
        text-align: center;
        cursor:pointer;
        text-decoration: none;
        background-size: 0 5px;
        background-image: linear-gradient(#D0CCFC, #D0CCFC);
        background-repeat: no-repeat;
        background-position: center bottom;
        transition: .2s;
    }

    .page-options:hover{
        background-size: 100% 5px;
        transition: .5s;
    }

    .grey{
        filter:drop-shadow(5px 5px 5px black);
        background-image: none;
    }

    .modal-content{
        background-color:linen;
        position:relative;
    }

    .showBurger{
        display:block;
    }

    .showAll{
        display:none;
    }



    #hamburger{
        filter:invert(.7);
        width:50px;
        transition: .2s;
    }

    #hamburger:hover, #hamburger:active{
        filter: invert(.3);
        transition: .2s;
    }

    @media only screen and (min-width: 768px){
        nav{
            align-items: flex-end;
        }

        h1{
            font-size: 30px;
        }

        .showBurger{
            display:none;
        }

        .showAll{
            display:flex;
            flex-direction:row;
            justify-content: center;
        }
    }

</style>
