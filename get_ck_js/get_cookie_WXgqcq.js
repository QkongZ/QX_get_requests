/*
广汽传祺在QX中抓取的token值是倒序 例如xxx : token
*/
const cookieName = '广汽传祺小程序token'

const regexToken = /token:\s?([^\s]+)/i;

let headerToken = $request.headers['token'];

if (headerToken) {
  let token = regexToken.exec(headerToken)[1].split('').reverse().join('');
  console.log(`${cookieName}: Token=${headerToken}`);
  $notify(`${cookieName}`, '', `Token=${headerToken}`);
} else {
  $notify(cookieName, '获取广汽传祺小程序token失败', '请检查请求头中是否包含token');
}


$notify('广汽传祺小程序token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerToken}`)

$done({})
