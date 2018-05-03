import {commonParams, options} from './config'
import axios from 'axios'
import jsonp from 'common/js/jsonp'

export function getLyric (mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 67232076,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getVkey() {
  const url = 'http://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg'
  const data = Object.assign({}, commonParams, {
    json: 3,
    guid: 8969145368,
    g_tk: 938407465,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: 0,
    platform: 'h5',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
