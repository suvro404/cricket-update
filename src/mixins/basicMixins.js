export default {
    data () {
        return {

        }
    },
    created: function () {

    },
    methods: {
        fetchData(fetchReq, callback) {
            this.isDataLoading = true;
            this.$api.query(fetchReq,
                (res) => {
                    this.isDataLoading = false;
                    callback(res.response);
                },
                (error) => {
                    this.isDataLoading = false;
                    console.log(error);
                }
            );
        },
        getFormattedDate(d) {
            if(d) {
                let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let date = new Date(d);
                let year = date.getFullYear();
                let month = date.getMonth();
                let day = date.getDate();
                let formattedDate = this.getDayText(day) + " " + months[month] + ", " + year;
                return formattedDate;
            } else {
                return "N/A";
            }
        },
        getDayText(day) {
            if(day.toString().length < 2) {
                return "0"+day.toString();
            }
            return day;
        }
    }
}