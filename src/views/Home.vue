<template>
  <div class="container pt-3 pb-3">
    <b-container>
      <h3 class="font-bold">CRICKET UPDATE</h3>
    </b-container>
    <b-container>
      <b-tabs content-class="mt-3" @input="getRespectedTabData">
        <b-tab title="Live & Upcoming" active>
          <live-and-upcoming-matches :matchStatusRef="matchStatusRef" class="tab-content"></live-and-upcoming-matches>
        </b-tab>
        <b-tab title="Result">
          <completed-matches class="tab-content"></completed-matches>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import LiveAndUpcomingMatches from "@/components/LiveAndUpcomingMatches";
import CompletedMatches from "@/components/CompletedMatches";
import basicMixins from "@/mixins/basicMixins";

export default {
  name: 'Home',
  data() {
    return {
      isDataLoading: false,
      matchStatusRef: {"live": 3, "upcoming": 1, "completed": 2, "abandoned": 4},
      reqData : {
        query: "matches",
        extra: {
          ref: "",
          res_item_per_page: 10,
          page_no: 1
        }
      }
    }
  },
  mixins: [basicMixins],
  components: {
    'live-and-upcoming-matches': LiveAndUpcomingMatches,
    'completed-matches': CompletedMatches
  },
  methods: {
    getMatchList(matchStatus) {
      if(matchStatus == "live") {
        this.reqData.extra.ref = "status=" + this.matchStatusRef.live;
      } else if(matchStatus == "upcoming") {
        this.reqData.extra.ref = "status=" + this.matchStatusRef.upcoming;
      }

      let that = this;

      this.fetchData(this.reqData, function (data) {
        if(matchStatus == "live") {
          // console.log("live matches : ", data.items);
          that.$store.commit("cricket/setLiveMatchList", data.items);
        } else if(matchStatus == "upcoming") {
          // console.log("upcoming matches : ", data.items);
          that.$store.commit("cricket/setUpcomingMatchList", data.items);
        }
      });
    },
    getRespectedTabData(val) {
      if(!val) {
        this.getMatchList("live");
        this.getMatchList("upcoming");
      }
    }
  }
}
</script>
<style scoped>
  .tab-content {
    background: white;
  }
</style>
