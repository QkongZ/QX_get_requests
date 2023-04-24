/*
获取京东请求头的Cookie中pt_key和pt_pin  输出样式为 pt_key=XXX;pt_pin=XXX;
*/
const cookieName = '获取狗东Cookie'
const key1 = 'pt_key'
const key2 = 'pt_pin'
const regex1 = new RegExp(`${key1}=([^;]+)`)
const regex2 = new RegExp(`${key2}=([^;]+)`)

let headerCookie = $request.headers['Cookie']

if (headerCookie) {
  let cookie = {}
  if (regex1.test(headerCookie)) {
    cookie[key1] = regex1.exec(headerCookie)[1]
  }
  if (regex2.test(headerCookie)) {
    cookie[key2] = regex2.exec(headerCookie)[1]
  }


  let cookieValues = []
  for (const key in cookie) {
    cookieValues.push(`${key}: ${cookie[key]}`)
  }
  let cookieString = `${key1}=${cookie[key1]};${key2}=${cookie[key2]};`

console.log(`${cookieName}: ${JSON.stringify(cookie)}`)
$notify(`${cookieName}`, '', cookieString)
} else {
  $notify(cookieName, '获取Cookie失败', '请检查请求头中是否包含Cookie')
}

$notify('狗东Cookie获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerCookie}`)

setTimeout($done, 1000)
$done({})
