/*
正则匹配请求头中token键值
广汽传祺小程序
*/
const cookieName = '广汽传祺小程序token';
const notifyName = '🍪Token🍪'
const tokenRegex = /token:\s*([^;\n]+)/i;
const headers = $request.headers;

if (headers) {
  const tokenMatch = tokenRegex.exec(headers);
  if (tokenMatch) {
    const token = tokenMatch[1];
      $notify(`${cookieName}`, '', ${token});
  } else {
    $notify(`'${cookieName}'`, `获取'${notifyName}'失败`, '请检查请求头中是否包含token');
  }
}


$notify(''${cookieName}'获取成功！', '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`${notifyName}：${headers['token']}`);

setTimeout($done, 1000)
$done({})
