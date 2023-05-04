/*
获取美团请求头的Cookie中userId和token  输出样式为 userId=XXX;&token=XXX;
*/
const cookieName = '美团token'
const key1 = 'userId'
const key2 = 'token'
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

$notify('美团token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`完整🍪Cookie🍪：${headerCookie}`)

$done({})
