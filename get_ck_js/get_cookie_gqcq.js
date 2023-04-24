/*
广汽传祺在QX中抓取的token值是倒序 例如xxx : token
就在后面添加 .split('').reverse().join('')

token：匹配 token 字符串；
\s*:\s*：匹配冒号前后的空格；
([^\s]+)：匹配至少一个非空白字符，并捕获该值。
*/
const cookieName = '广汽传祺token'
const regexToken = /\b([^:]+)\s*:\s*token\s*(.*)/i;
let headerValue = '';
for (const key in $request.headers) {
  if (key.toLowerCase().endsWith(':token')) {
    headerValue = $request.headers[key];
    break;
  }
}
if (headerValue) {
  const matches = regexToken.exec(headerValue);
  if (matches && matches.length >= 3) {
    const key = matches[1];
    const value = matches[2];
    console.log(`匹配到的token为：${key}，值为：${value}`);
  } else {
    console.log('未匹配到token和值');
  }
} else {
  console.log('请求头中未包含指定的token');
}

$notify('广汽传祺token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerToken}`)

$done({})
