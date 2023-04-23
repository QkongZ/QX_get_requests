/*
获取请求头中的token，正则匹配区分大小写为token

const keyToken = 'token'; 使用 keyToken 来表示 token 的键名

const regexToken = new RegExp(`${keyToken}=([^;]+)`); 使用 RegExp 构造函数创建一个正则表达式对象来匹配对应键名的值。
*/
const cookieName = '广汽传祺token'

const regexToken = /token:\s?(.*)/;

let headerToken = $request.headers['token']

if (headerToken) {
  let token = regexCookie.exec(headerToken)[1];
  console.log(`${cookieName}: Token: ${token}`);
  $notify(`${cookieName}`, '', `token=${headerToken}`);
} else {
  $notify(cookieName, '获取Cookie失败', '请检查请求头中是否包含Cookie');
}

$notify('广汽传祺token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerToken}`)

$done({})
