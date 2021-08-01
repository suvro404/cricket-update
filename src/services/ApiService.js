import axios from 'axios';
import _ from 'lodash';

class ApiService {
  constructor(initConfig) {
    if(_.has(initConfig, 'host') === false) {
      throw new Error("service host is undefined.");
    }
    this.apiLoc = initConfig.host;
    this.apiToken = initConfig.apiToken;
  }

  query(reqData, onResponse, onError) {
    var reqLoc = this.apiLoc + "/" + reqData.query + "/?token="+this.apiToken + "&" + reqData.extra.ref + "&&per_page=" + reqData.extra.res_item_per_page + "&&paged=" + reqData.extra.page_no;
    axios.get(reqLoc).then((resp)=>{
      onResponse(resp.data);
    }).catch((err) => {
      onError(err);
    });
  }
}

export default ApiService;
