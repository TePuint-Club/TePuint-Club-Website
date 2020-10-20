import request from './request.js'

export default {
    // 搜索文章
    search(s) {
        return request({
            url: '/v3.php',
            method: 'get',
            params: {
                "m": "read",
                "c": "search",
                "s": s
            }
        })
    },
    // 根据CID获取文章
    getpost(CID) {
        return request({
            url: '/v3.php',
            method: 'get',
            params: {
                "m": "read",
                "c": "content",
                "CID": CID
            }
        })
    },
    // 根据CID获取文章描述
    getinfo(CID) {
        return request({
            url: '/v3.php',
            method: 'get',
            params: {
                "m": "read",
                "c": "info",
                "CID": CID
            }
        })
    },
    // 获取成员博客的文章（某博客API极慢）
    more() {
        return request({
            url: '/v3.php',
            method: 'get',
            params: {
                "m": "read",
                "c": "more"
            }
        })
    },
    // 获取文章列表
    list(p) {
        return request({
            url: '/v3.php',
            method: 'get',
            params: {
                "m": "read",
                "c": "list",
                "p":p
            }
        })
    },
}