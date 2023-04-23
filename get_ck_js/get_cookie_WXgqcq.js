/*
广汽传祺小程序
*/
const cookieName = '广汽传祺小程序token'
const keyToken = 'token'; // 指定要匹配的请求头中的键名
const regexToken = new RegExp(`${keyToken}\\s*:\\s*([^\s;]+)`, 'i'); // 根据键名创建正则表达式对象

let headerToken = $request.headers[keyToken];

if (headerToken) {
  let token = regexToken.exec(headerToken)[1];
  console.log(`${cookieName}: Token: ${token}`);
  $notify(`${cookieName}`, '', `token=${token}`);
} else {
  $notify(cookieName, '获取Token失败', `请检查请求头中是否包含${keyToken}`);
}


$notify('广汽传祺小程序token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerToken}`)

$done({})
