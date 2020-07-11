import Axios from "axios";
import {RestUrls} from "./Urls";

export class RestDataSource {

/*     GetData = (dataType) => 
       this.SendRequest("get", RestUrls[dataType]);

    SendRequest = (method, url) => Axios.request({ method, url}); */

    GetData = async(dataType, params) =>
       this.SendRequest("get", RestUrls[dataType], params)

    StoreData = async(dataType, data) =>
       this.SendRequest("post", RestUrls[dataType], {}, data )

    SendRequest = (method, url, params, data) => 
        Axios.request({
            method, url, params, data
        })
}