/*
广汽传祺在QX中抓取的token值是倒序 例如xxx : token
就在后面添加 .split('').reverse().join('')

token：匹配 token 字符串；
\s*:\s*：匹配冒号前后的空格；
([^\s]+)：匹配至少一个非空白字符，并捕获该值。
*/
const cookieName = '广汽传祺token';
const tokenRegex = /token:\s*([^;\n]+)/i;


const headers = $request.headers;
const tokenMatch = tokenRegex.exec(headers['token']);


if (tokenMatch) {
  const token = tokenMatch[1];
  const deviceId = deviceIdMatch[1];
  console.log(`Token: ${token}`);
  setTimeout(() => {
    $notify('匹配到Token', '', `Token= ${token}`);
  }, 1000);
} else {
  $notify(cookieName, '获取token失败', '请检查请求头中是否包含token');
}

$notify('广汽传祺token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`);
console.log(`${cookieName}获取成功！`);
console.log(`Token：${headers['token']}`);

setTimeout($done, 1000)
$done({});

