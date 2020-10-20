import status from './status.js'
import post from '../utils/post.js'

export default {
    loadpost(i) {
        var a = post.getpost(i)
        a.then(function (i) {
            status.post = i
        })
        return a
    }
}