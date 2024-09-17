
import { serverUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const registerAPI=async(reqBody)=>{
  return await commonAPI('POST',`${serverUrl}/user/signup`,reqBody,"")
}

export const loginAPI=async(reqBody)=>{
  return await commonAPI('POST',`${serverUrl}/users/signin`,reqBody,"")
}


export const addGrvApi=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverUrl}/User/addGrv`,reqBody,reqHeader)
  }
  
  export const getallgrvApi=async()=>{
    return await commonAPI('GET',`${serverUrl}/all-grv`,"","")
  }
  export const getUserGrvApi=async(reqHeader)=>{
    return await commonAPI('GET',`${serverUrl}/user/all-grv`,"",reqHeader)
 }
 
  export const getadminApi=async()=>{
    return await commonAPI('GET',`${serverUrl}/admin`,"","")
  }
  