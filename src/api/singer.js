import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}
export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    singermid: singerId
  })
  // const data = Object.assign({}, commonParams, { 'key': 'g_tk', 'value': '1600606170', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'jsonpCallback', 'value': 'MusicJsonCallbacksinger_track', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'loginUin', 'value': '524223270', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'hostUin', 'value': '0', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'format', 'value': 'jsonp', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'inCharset', 'value': 'utf8', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'outCharset', 'value': 'utf-8', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'notice', 'value': '0', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'platform', 'value': 'yqq', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'needNewCode', 'value': '0', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'singermid', 'value': '002J4UUk29y8BY', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'order', 'value': 'listen', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'begin', 'value': '0', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'num', 'value': '30', 'equals': true, 'description': '', 'enabled': true }, { 'key': 'songstatus', 'value': '1', 'equals': true, 'description': '', 'enabled': true })

  return jsonp(url, data, options)
}
