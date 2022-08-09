import request from "../utils/request";

let getUserInfo = (data) => {
    return request({
        url: '/api/mb/management/mb/sso/getUserPhoneNumberByD8Account',
        method: 'post',
        data
    })
};
export default getUserInfo;