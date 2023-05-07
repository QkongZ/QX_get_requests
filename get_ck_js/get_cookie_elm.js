/*
[rewrite_local]
# 获取饿了么的Cookie
^https?://h5\.ele\.me/restapi/bgs/poi url script-response-header https://raw.githubusercontent.com/QkongZ/QX_get_ck/main/get_ck_js/get_cookie_elm.js

[mitm]
# 配置MitM主机名
hostname = h5.ele.me
*/
const cookieName = '饿了么cookie'
const key1 = 'SID'
const key2 = 'cookie2'
const key3 = 'USERID'
const key4 = '_tb_token_'
const regex1 = new RegExp(`${key1}=([^;]+)`)
const regex2 = new RegExp(`${key2}=([^;]+)`)
const regex3 = new RegExp(`${key3}=([^;]+)`)
const regex4 = new RegExp(`${key4}=([^;]+)`)

let headerCookie = $request.headers['Cookie']

if (headerCookie) {
  let cookie = {}
  if (regex1.test(headerCookie)) {
    cookie[key1] = regex1.exec(headerCookie)[1]
  }
  if (regex2.test(headerCookie)) {
    cookie[key2] = regex2.exec(headerCookie)[1]
  }
  if (regex3.test(headerCookie)) {
    cookie[key3] = regex3.exec(headerCookie)[1]
  }
  if (regex4.test(headerCookie)) {
    cookie[key4] = regex4.exec(headerCookie)[1]
  }

  let cookieValues = []
  for (const key in cookie) {
    cookieValues.push(`${key}: ${cookie[key]}`)
  }
  let cookieString = `${key1}=${cookie[key1]};${key2}=${cookie[key2]};${key3}=${cookie[key3]};${key4}=${cookie[key4]};`

console.log(`${cookieName}: ${JSON.stringify(cookie)}`)
$notify(`${cookieName}`, '', cookieString)
} else {
  $notify(cookieName, '获取Cookie失败', '请检查请求头中是否包含Cookie')
}

$notify('饿了么Cookie获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerCookie}`)

$done({})
