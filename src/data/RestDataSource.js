import Axios from "axios";
import {RestUrls} from "./Urls";

export class RestDataSource {

/*     GetData = (dataType) => 
       this.SendRequest("get", RestUrls[dataType]);

    SendRequest = (method, url) => Axios.request({ method, url}); */

    GetData = async(dataType, params) =>
       this.SendRequest("get", RestUrls[dataType], params)

    SendRequest = (method, url, params) => 
        Axios.request({
            method, url, params
        })
}