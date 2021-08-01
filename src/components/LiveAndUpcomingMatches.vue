<template>
  <div>
    <div v-if="allMatchList.length && matchStatusRef">
      <div v-for="match in allMatchList" :key="match.id">
        <div class="match-container pb-4">
          <div class="row align-items-center text-left">
            <div class="col-xs-3 col-sm-3 col-md-1 col-lg-1 font-regular">
              <key-shape-comp :matchStatus="getMatchStatus(match.status)" class="match-status"></key-shape-comp>
            </div>
            <div class="col-auto font-regular-1 font-bold">{{match.subtitle}}</div>
          </div>
          <div class="row">
            <div class="col">
              <div class="col-item" :style="{color: getFontColor(match.status)}">
                <div>
                  <div class="font-regular font-bold" v-if="match.venue.name">{{match.venue.name}}</div>
                  <div class="font-regular-1 mt-1" v-if="match.timestamp_start">{{getLocalTime(match.timestamp_start)}} LOCAL TIME</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="col-item">
                <div>
                  <div class="font-caption font-bold">{{match.teama.name}}</div>
                  <div v-if="getMatchStatus(match.status) == 'LIVE' && match.teama.scores && match.teama.overs"
                    class="font-regular-1 font-bold mt-2"
                  >
                    {{match.teama.scores}} ({{match.teama.overs}} OV)
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="col-item">
                <img :src="match.teama.logo_url" class="team-logo">
              </div>
            </div>
            <div class="col">
              <div class="col-item font-caption font-bold" :style="{color: getFontColor(match.status)}">VS</div>
            </div>
            <div class="col">
              <div class="col-item">
                <img :src="match.teamb.logo_url" class="team-logo">
              </div>
            </div>
            <div class="col">
              <div class="col-item">
                <div>
                  <div class="font-caption font-bold">{{match.teamb.name}}</div>
                  <div v-if="getMatchStatus(match.status) == 'LIVE' && match.teamb.scores && match.teamb.overs"
                       class="font-regular-1 font-bold mt-2"
                  >
                    {{match.teamb.scores}} ({{match.teamb.overs}} OV)
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="col-item font-regular-1 font-bold" :style="{color: getFontColor(match.status)}">
                {{getFormattedDate(match.date_start)}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      No Live or Upcoming Match Info to show
    </div>
  </div>
</template>

<script>
import basicMixins from "@/mixins/basicMixins";
import KeyShapeComponent from "@/components/KeyShapeComponent";

export default {
  name: "LiveAndUpcomingMatches",
  props: ['matchStatusRef'],
  data() {
    return {
      liveColor: "green",
      upcomingColor: "orange"
    }
  },
  mixins: [basicMixins],
  components: {
    'key-shape-comp': KeyShapeComponent
  },
  computed: {
    allMatchList() {
      return this.getMergedList(this.liveMatchList, this.upcomingMatchList);
    },
    liveMatchList() {
      return this.$store.getters["cricket/liveMatchList"];
    },
    upcomingMatchList() {
      return this.$store.getters["cricket/upcomingMatchList"];
    }
  },
  methods: {
    getFontColor(status) {
      return (this.getMatchStatus(status) == "LIVE" ? this.upcomingColor : this.liveColor);
    },
    getMergedList(list1, list2) {
      let finalList = [];
      if(list1 && list2) {
        finalList = [...list1,  ...list2];
      }
      return finalList;
    },
    getMatchStatus(statusCode) {
      return (this.getKeyByValue(this.matchStatusRef,statusCode)).toUpperCase();
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    },
    getLocalTime(timeStamp) {
      var s = new Date(1504095567183).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'});
      return s;
    }
  }
}
</script>

<style scoped>
  .team-logo {
    width: 50px;
    height: 50px;
  }
  .match-container {
    border-bottom: 1px solid #e4e4e4;
    background: white;
  }
  .match-status-container {
    text-align: left;
  }
  .match-status {
    transform: scale(0.6);
  }
  .col-item {
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
</style>