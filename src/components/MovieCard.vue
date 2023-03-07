<script>

export default {
    data() {
        return {
            posterUrl: `https://image.tmdb.org/t/p/w342${this.endImgUrl}`
        }
    },

    props: {
        title : String,
        origTitle: String,
        language: String,
        vote: Number,
        endImgUrl: String,
        overview: String
    },
    
    methods: {
        getFlag(language) {
            language = language.toUpperCase();
            if (language == "it") return "https://flagsapi.com/IT/flat/64.png";
            if (language == "en") return "https://flagsapi.com/GB/flat/64.png";

            return `https://flagsapi.com/${{ language }}/flat/64.png`;
    },
    }

}
</script>

<template>
      <div class="card-container">
          <div class="myCard">
              <div class="front-card">
                  <img :src="posterUrl" alt="" class="img-fluid rounded">
              </div>
              <div class="back-card d-flex py-3">
                  <p>Titolo: <span class="fw-bold">{{ title }}</span></p>
                  <p v-if="title != origTitle">Titolo originale: {{ origTitle }}</p>
                  <img :src=" getFlag(language) " alt="" class="img-fluid">
                  <p>{{ vote }}</p> 
                  <p >
                    <font-awesome-icon
                    v-for="i in vote" icon="fa-solid fa-star" class="star" />
                    <font-awesome-icon
                    v-for="i in (5-vote)"
                     icon="fa-regular fa-star" class="star"/>
                  </p>                  
                  <p>{{ overview }}</p>
              </div>
          </div>
      </div>
</template>

<style lang="scss" scoped>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .card-container{
        width: 342px;
        height: 512px;

        &:hover > .myCard{
              cursor: pointer;
              transform: rotateY(180deg);
        }

        .myCard {
            height: 100%;
            width: 100%;
            position: relative;
            transition: transform 1500ms;
            transform-style: preserve-3d;

            .front-card, .back-card{
                height: 100%;
                width: 100%;
                border-radius: 5px;
                position: absolute;
                backface-visibility: hidden;
            }

            .back-card {
                transform: rotateY(180deg);
                background-color: rgb(58, 52, 52);
                text-align: center;
                flex-direction: column;
                justify-content: center;

                img{
                    width: 40px;
                    margin: 0 auto;
                }

                .star{
                    color: gold;
                }

            }
                }


    }
</style>