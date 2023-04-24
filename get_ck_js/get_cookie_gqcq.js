/*
广汽传祺在QX中抓取的token值是倒序 例如xxx : token
就在后面添加 .split('').reverse().join('')

token：匹配 token 字符串；
\s*:\s*：匹配冒号前后的空格；
([^\s]+)：匹配至少一个非空白字符，并捕获该值。
*/
const cookieName = '广汽传祺token';
const regexToken = /token\s*:\s*([^\s]+)/i;
let header = $request.headers;

if (header['token']) {
  let token = regexToken.exec(header['token'])[1];
  console.log(`${cookieName}: Token: ${token}`);
  $notify(`${cookieName}`, '', `Token=${token}`);
} else {
  $notify(cookieName, '获取token失败', '请检查请求头中是否包含token');
}

$notify('广汽传祺token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取token信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Token：${token}`)

setTimeout($done, 1000)
$done({})

