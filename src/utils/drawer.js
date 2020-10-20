import request from './request.js'

export default {
    // 获取成员信息列表
    member() {
        return request({
            url: '/v3.php',
            method: 'get',
            params: {
                "m": "read",
                "c": "member",
            }
        })
    },
}