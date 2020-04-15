<template lang="html">
    <div class="">
        <h1>Challenges</h1>
        <div class="container setTreasureAmnt my-5">
            <label for="numberOfTreasures">How many treasures do you want to find for this challenge? There are currently only {{maps.length}} treasures.</label>
            <input type="number" id="numberOfTreasures" name="numberOfTreasures" min="1" max="6" v-model.number="numberOfTreasures">
            <button type="button" class="mt-3" @click="buildChallenge">Build Challenge</button>
            <p>{{numberOfTreasures}}</p>
        </div>
        <div class="container mb-5">
            <div class="grid-row">
                <div class="grid-cell">
                    <img :src="cellImg[0].image" :alt="cellImg[0].alt">
                </div>
                <div class="grid-cell">
                    <img :src="cellImg[1].image" :alt="cellImg[1].alt">
                </div>
                <div class="grid-cell">
                    <img :src="cellImg[2].image" :alt="cellImg[2].alt">
                </div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">
                    <img :src="cellImg[3].image" :alt="cellImg[3].alt">
                </div>
                <div class="grid-cell">
                    <img :src="cellImg[4].image" :alt="cellImg[4].alt">
                </div>
                <div class="grid-cell">
                    <img :src="cellImg[5].image" :alt="cellImg[5].alt">
                </div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">
                    <img :src="cellImg[6].image" :alt="cellImg[6].alt">
                </div>
                <div class="grid-cell">
                    <img :src="cellImg[7].image" :alt="cellImg[7].alt">
                </div>
                <div class="grid-cell">
                    <img :src="cellImg[8].image" :alt="cellImg[8].alt">
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {

    name:"challenges",
    props:["maps"],
    data:function(){
        return{
            cellImg:[
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                }
            ],
            numberOfTreasures:""
        }
    },
    methods:{
        randNum: function (number) {
            return Math.floor(Math.random() * number);
        },
        buildChallenge:function(){
            //reset the challenge board. I have no idea right now how to do this without just putting in all the original data again.

            this.cellImg = [
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/images/treasure/empty.png',
                    alt:'empty'
                }
            ];

            //create a copy of the maps prop
            let newMaps = [...this.maps];

            //loop through the number of treasures the user inputs
            for(let i = 0; i < this.numberOfTreasures; i++ ){
                let randImg = this.randNum(newMaps.length);
                let randLocation = this.randNum(9);
                //select the treasure and it's image
                let treasure = newMaps[randImg]
                //remove the treasure from the array to avoid dupliates
                newMaps.splice(randImg,1);
                //choose the location. If there is nothing there, add the treasure, if there is then look for another spot.
                let location = this.cellImg[randLocation]


                while(location.filled){
                    randLocation = this.randNum(9);
                    location = this.cellImg[randLocation];
                }

                location.filled = true;
                location.image = treasure.stamp;
                location.alt = treasure.title;
            }
        }

    }
}
</script>

<style lang="css" scoped>

img{
    width:80%;
    border-radius: 50%;
}

input{
    width:90px;
    text-align: center;
}

.grid-row{
    display: flex;
    flex-direction: row;
    justify-content: center;

}

.grid-cell{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px solid black;
    width:30%;
    height:150px;
    background-color: rgb(198,197,193);
}

.setTreasureAmnt{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 768px){
    img{
        width:45%;
    }
}

@media only screen and (min-width: 1200px){
    img{
        width:40%;
    }
}
</style>
