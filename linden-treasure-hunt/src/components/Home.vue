<template lang="html">
  <main class="container-fluid">
      <div class="home-div">
          <div class="text-center">
              <img src="./images/rainbow.jpg" alt="Linden Commons Rainbow">

          </div>
          <div id="home-description" class="p-3">
              <h1 class="text-center">Welcome to the Treasure Hunt!</h1>
              <p class="mt-4">Hi Neighbors!</p>
              <p>Thanks to Cora Isaac is now obsessed with Jake and the Neverland Pirates on Disney, so we decided to bury some of our own treasure for others to hunt down. If you've ever heard of letterboxing or geoboxing, it's that, but way simpler. Search the Maps to get started!</p>
          </div>
      </div>



  </main>
</template>

<script>
export default {
    name:"home"
}
</script>

<style lang="css" scoped>
    h1{
        font-weight: 700;
    }

    .home-div{
        position:relative;

    }
    img{
        margin:20px 0;
        width:80%;
    }

    @media only screen and (min-width: 768px){
        h1{
            color: dimgrey;
        }

        p{
            color:white;
            font-size:20px;
            color: black;

        }

        img{
            width:100%;
            max-width: 1500px;
        }


        #home-description{
            border-radius: 10px;
            position:absolute;
            width:75%;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            background: rgb(245,245,245);
            background: linear-gradient(0deg, rgba(245,245,245,.8) 0%, rgba(245,245,245,0.5018382352941176) 100%);

        }
    }
</style>
