<template lang="html">
    <main class="my-5">
        <h2>Challenges</h2>
        <div class="container setTreasureAmnt my-2">
            <div class="my-3">
                <p>Found all the treasures already? Know where they all are and think the fun is as dead as your hope for summer camp to open? Think again!</p>
                <img class="center heart" src="./images/skull-crossbones.png" alt="skull and crossbones">
                <h3>How To Play</h3>
                <ul>
                    <li>Divide a page in your notebook into a 3X3 grid like the one below.</li>
                    <li>Choose the number of treasures you want to find in the box below.</li>
                    <li>There are some treasures farther down the trail or near Linden street. If you check the box below you won't get any of the treasures that probably should have a grown up come along. You've got cocktails to finish!</li>
                    <li>Click on the "Build Challenge" button to populate the grid below.</li>
                    <li>The challenge is to now find those treasures and put the stamp in that location of the grid on your own page.</li>
                </ul>
                <img class="center" src="./images/treasure-icon.png" alt="Treasure Map">
                <h3>Variations</h3>
                <ul>
                    <li>Get a group together and create a challenge for each of them (just click the button again) and then have them race to see who completes theirs first. <br>
                        *Hint* Don't choose the max amount of treasures that way each challenge will have a few different ones and they'll have to split up and really race.</li>
                    <li>Let me know if you have any other variations to get kids running around and burning energy. That is the sole purpose of this. And to let me learn some coding stuff.</li>
                </ul>
            </div>
            <label for="numberOfTreasures">How many treasures do you want to find for this challenge? There are currently only 6 treasures.</label>
            <input type="number" id="numberOfTreasures" name="numberOfTreasures" min="1" max="6" v-model.number="numberOfTreasures">
            <div class="d-flex justify-content-center my-3">
                <label for="needParents">Remove treasures that require parents to come along (because they are farther in the woods)?</label>
                <input type="checkbox" id="needParents" class="mt-1 ml-1" v-model="parentsNeeded">
            </div>

            <button type="button" class="btn btn-success mt-3" @click="buildChallenge">Build Challenge</button>
        </div>
        <div class="container mb-5">
            <div class="grid-row">
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[0].image" :alt="cellImg[0].alt">
                </div>
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[1].image" :alt="cellImg[1].alt">
                </div>
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[2].image" :alt="cellImg[2].alt">
                </div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[3].image" :alt="cellImg[3].alt">
                </div>
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[4].image" :alt="cellImg[4].alt">
                </div>
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[5].image" :alt="cellImg[5].alt">
                </div>
            </div>
            <div class="grid-row">
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[6].image" :alt="cellImg[6].alt">
                </div>
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[7].image" :alt="cellImg[7].alt">
                </div>
                <div class="grid-cell">
                    <img class="cell-image" :src="cellImg[8].image" :alt="cellImg[8].alt">
                </div>
            </div>
        </div>
    </main>

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
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                }
            ],
            numberOfTreasures:"",
            parentsNeeded:false
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
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                },
                {
                    filled:false,
                    image:'/img/treasure/empty.png',
                    alt:'empty'
                }
            ];

            //create a copy of the maps prop
            let newMaps = [...this.maps];

            if(this.parentsNeeded){
                newMaps = newMaps.filter(function(map){
                    return map.parentsNeeded === false;
                });
                if (this.numberOfTreasures > newMaps.length) {
                    this.numberOfTreasures = newMaps.length;
                }
            }


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
.center{
    display: block;
    margin:auto;

}

.cell-image{
    width:80%;
    border-radius: 50%;
}

input{
    width:90px;
    text-align: center;
}

h2{
    text-align: center;
    font-size: 700;
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
    .cell-image{
        width:45%;
    }
}

@media only screen and (min-width: 1200px){
    .cell-image{
        width:40%;
    }
}
</style>
