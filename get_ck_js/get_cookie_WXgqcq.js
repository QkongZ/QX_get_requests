/*
正则匹配请求头中token键值
广汽传祺小程序
*/
const cookieName = '广汽传祺小程序token🍭';
const notifyName = 'Token🍪';

const headers = $request.headers;
const match = $request.headers['token'];

if (match) {
  console.log(`${notifyName}: ${match}`);
  $notify(`🎉${cookieName} 获取成功！`, '', `${notifyName}=${match}`);
} else {
  $notify(`${cookieName}`, `❌获取${notifyName}失败`, `请检查请求头中是否包含${notifyName}`);
}

$notify(`${cookieName}获取成功！`, '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔输出完整请求值：\n${JSON.stringify(headers, null, 2)}\n`);

setTimeout($done, 1000)
$done({})
