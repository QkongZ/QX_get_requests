/*
正则匹配请求头中token键值
广汽传祺小程序
*/
const cookieName = '广汽传祺小程序token';
const notifyName = '🍪Token🍪'

const key1 = 'token'
const regex1 = new RegExp(`${key1}:\\s*([^;\\n]+)`, 'i');
const headers = $request.headers;

if (headers) {
  const match = regex1.exec(headers);
  if (match) {
    const Token = match[1];
    console.log(`${notifyName}: ${Token}`);
    $notify(`${notifyName} 获取成功！`, '🎉匹配成功🎉', `${cookieName}=${Token}`);
  } else {
    $notify(`${cookieName}`, `获取'${notifyName}'失败`, `请检查请求头中是否包含'${notifyName}'`);
  }
}


$notify(`${cookieName}获取成功！`, '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`${notifyName}：${headers['token']}`);

setTimeout($done, 1000)
$done({})
