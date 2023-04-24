/*
广汽传祺小程序
*/
const cookieName = '广汽传祺小程序token';
const regexToken = /token\s*:\s*([^\s]+)/i;
let header = $request.headers;

if (header['token']) {
  let token = regexToken.exec(header['token'])[1];
  console.log(`${cookieName}: Token: ${token}`);
  $notify(`${cookieName}`, '', `Token=${token}`);
} else {
  $notify(cookieName, '获取token失败', '请检查请求头中是否包含token');
}

$notify('广汽传祺小程序token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取token信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Token：${token}`)

setTimeout($done, 1000)
$done({})
