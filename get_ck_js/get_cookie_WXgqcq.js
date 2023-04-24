/*
正则匹配请求头中token键值
广汽传祺小程序
*/
const cookieName = '广汽传祺小程序token';
const tokenRegex = /token:\s*(.*?)(;|$)/i;


const headers = $request.headers;
const tokenMatch = tokenRegex.exec(headers['token']);


if (tokenMatch) {
  const token = tokenMatch[1];
  const deviceId = deviceIdMatch[1];
  console.log(`Token: ${token}`);
  $notify('匹配到Token', '', `Token= ${token}`);
} else {
  $notify(cookieName, '获取token失败', '请检查请求头中是否包含token');
}

$notify('广汽传祺小程序token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`);
console.log(`${cookieName}获取成功！`);
console.log(`Token：${headers['token']}`);

setTimeout($done, 1000)
$done({});
