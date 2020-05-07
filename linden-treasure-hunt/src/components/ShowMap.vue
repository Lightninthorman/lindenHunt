<template lang="html">
    <div>
        <div class="container-fluid">
            <p>Click on the question marks to reveal a picture clue if the descriptions aren't clear enough.</p>
            <p>Don't forget to put the treasure back the way you found it for the next person!</p>
        </div>

        <div class="row m-2">
            <div class="col-md-2 my-2 d-flex justify-content-center align-items-start">
                <img :src="map.stamp" :alt="map.title" class="stamp-image">
            </div>
            <div class="col-md-10 my-2 p-2">
                <h1>{{map.title}}</h1>
                <p><span>Level: </span>{{map.level}}</p>
                <p><span>Location: </span>{{map.location}}</p>
                <p><span>Details: </span>{{map.details}}</p>
                <div>
                    <h3 class="mb-3">Map Clues</h3>
                    <button type="button" class="btn btn-secondary mb-4" @click="toggleAllShow">{{showAllImages ? "Hide all Image Clues": "Show all Image Clues"}}</button>
                    <div class="mb-4 clues p-2" v-for="(item, key) in map.clues" :key="key">
                        <div>
                            <p>{{item.clue}}</p>
                            <div class="d-flex justify-content-center">
                                <img class="clue-image" :src="imageToShow(item)" alt="hidden clue" @click="toggleShow($event, item)">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <button type="button" name="button" @click="$emit('back',false)">Back</button> -->
            </div>

        </div>
    </div>

</template>

<script>

export default {
    name:"showMap",
    props:["maps"],
    data:function(){
        return{
            questionMark:"/img/clues/questionmark.png",
            showAllImages: false,
            map:{}
        }
    },
    created(){
        this.map = this.maps.find(item =>
            item.id === Number(this.$route.params.id)
        )
    },
    mounted(){
            window.scrollTo(0,0);

        },

    methods:{
        imageToShow:function(item){
            if (this.showAllImages) {
                return item.image
            }else{
                return this.questionMark
            }
        },
        toggleShow: function(e, clue){

            let currentImage = e.target.getAttribute('src');
            if (currentImage === this.questionMark || this.showAllImages) {

                // clue.clicked = true;
                e.target.setAttribute('src', clue.image);
            }else{
                e.target.setAttribute('src', this.questionMark);
                // clue.clicked = false;
            }
        },
        toggleAllShow: function(){
            this.showAllImages = !this.showAllImages;
        }
    }
}
</script>

<style lang="css" scoped>
    h1{
        text-align: center;
    }
    span{
        font-weight: bold;
    }
    .stamp-image{
        width:50%;
    }

    .clues{
        box-shadow:0 0 5px grey;
        background-image: url("./images/mappaper2.png");
        background-size: cover;
    }

    .clue-image{
        max-height:200px;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px){
        h1{
            text-align: left;
        }
        .stamp-image{
            width:100%;
        }
        .clue-image{
            max-height:400px;
            cursor: pointer;
        }
    }
</style>
