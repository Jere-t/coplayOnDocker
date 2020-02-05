// constants/AppConstants.js
console.log(process.env);
console.log("=========");
console.log("=========");
console.log(process.env.REACT_APP_API_ROOT+":"+process.env.REACT_APP_API_PORT+"/api");
// link api
const apiRoot = process.env.REACT_APP_API_ROOT+":"+process.env.REACT_APP_API_PORT+"/api";

export default apiRoot;

//No of current club
export const idClub = 1;
