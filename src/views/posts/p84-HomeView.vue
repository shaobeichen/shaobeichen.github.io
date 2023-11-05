<template>
  <div id="container">
    <div
      v-for="(numSquare, index) in numSquares"
      :key="index"
      class="black-square"
      :style="getSquareStyle(numSquare)"
    >
      <!-- {{ index + 1 }} -->
      <div class="image" v-for="(item, index) in cardList1" :key="index">
        <img :src="item.image.path" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import cardList from "../api/card";

export default {
  data() {
    return {
      numSquares: [
        "2*1",
        "3*3",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "2*2",
        "2*2",
        "1*1",
        "1*1",
        "2*2",
        "2*2",
        "3*3",
        "1*1",
        "1*1",
        "1*1",
        "2*2",
        "3*3",
        "2*2",
        "2*2",
        "2*2",
        "3*3",
        "2*2",
        "2*2",
        "1*1",
        "1*1",
        "2*2",
        "2*2",
        "1*1",
        "2*2",
        "2*2",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
        "1*1",
      ],
      cardList1: [],
    };
  },
  created() {
    this.cardList1 = cardList;
    console.log(this.cardList1, "cardListcardListcardListcardList");
  },
  methods: {
    getSquareStyle(numSquare) {
      const [width, height] = numSquare.split("*");
      return {
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
      };
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(17, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 10px;
}

.black-square {
  /* background-color: black; */
  /* color: white; */
}
</style>
