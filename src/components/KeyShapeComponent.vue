<template>
  <div class="circle" ref="circleRef" v-if="matchStatus">
    <span class=status>{{matchStatus}}</span>
  </div>
</template>

<script>
export default {
  name: "KeyShapeComponent",
  props: ['matchStatus'],
  mounted() {
    this.changeShapeColor();
  },
  methods: {
    changeShapeColor() {
      let circleRef = this.$refs.circleRef;
      if(this.matchStatus) {
        if(this.matchStatus == "UPCOMING") {
          circleRef.className="circle-x";
        }
      }
    }
  }
}
</script>

<style scoped>
.circle {
  background: orange;
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
}
.circle-x {
  background: green;
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
}
.circle:after {
  position: absolute;
  background: orange;
  content: '';
  width: 50px;
  height: 30px;
  margin-left: 10px;
  top: 10px;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 30%;
}

.circle-x:after {
  position: absolute;
  background: green;
  content: '';
  width: 70px;
  height: 30px;
  margin-left: 10px;
  top: 10px;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 30%;
}

.status {
  position: absolute;
  top: 25%;
  left: 20%;
  font-weight: bold;
  font-size: 16px;
  z-index: 1;
  color: white;
}

.circle, .circle-x {
  transform: scale(0.6) !important;
}
</style>