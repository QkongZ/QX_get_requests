/*
获取拼多多，多多果园请求头的Cookie中PDDAccesToken  输出样式为 PDDAccesToken=XXX;
*/
const cookieName = '多多果园Token🍭'
const notifyName = 'Token🍪';

const key1 = 'PDDAccesToken'
const regex1 = new RegExp(`${key1}=([^;]+)`)

let headerCookie = $request.headers['Cookie']

if (headerCookie) {
  let cookie = {}
  if (regex1.test(headerCookie)) {
    cookie[key1] = regex1.exec(headerCookie)[1]
  }


console.log(`${cookieName}: ${JSON.stringify(cookie)}`)
$notify(`🍪${cookieName}🍪`, '', cookieString)
} else {
  $notify(cookieName, '获取Token失败', '请检查请求头中是否包含PDDAccesToken')
}

$notify('Token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`完整🍪Cookie🍪：${headerCookie}`)

setTimeout($done, 1000)
$done({})
