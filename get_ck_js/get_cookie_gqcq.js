/*
广汽传祺在QX中抓取的token值是倒序 例如xxx : token
就在后面添加 .split('').reverse().join('')

token：匹配 token 字符串；
\s*:\s*：匹配冒号前后的空格；
([^\s]+)：匹配至少一个非空白字符，并捕获该值。
*/
const cookieName = '广汽传祺token'
const keyToken = 'token'; // 指定要匹配的请求头中的键名
const regexToken = /\b([^:]+)\s*:\s*token\s*(.*)/i;
let headerToken = '';
for (const key in $request.headers) {
  if (key.toLowerCase().endsWith(': token')) {
    headerToken = $request.headers[key];
    break;
  }
}
if (headerToken) {
  const matches = regexToken.exec(headerToken);
  if (matches && matches.length >= 3) {
    const token = matches[2];
    console.log(`获取到的token值为：${token}`);
    $notify('获取Token成功', '', `Token=${token}`);
  } else {
    console.log('未匹配到Token');
    $notify('获取Token失败', '', '未匹配到Token');
  }
} else {
  console.log('请求头中未包含Token');
  $notify('获取Token失败', '', '请求头中未包含Token');
}



$notify('广汽传祺token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取token信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${headerToken}`)

$done({})
