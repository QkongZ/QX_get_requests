const cookieName = '云原神token🍭';   
const notifyName = 'Token🍪';

const headers = $request.headers;
const match1 = $request.headers['x-rpc-combo_token'];
const match2 = $request.headers['x-rpc-device_id'];


if (match1 && match2) {
  console.log(`${notifyName}: ${match1};devId=${match2};`);
  $notify(`🎉${cookieName} 获取成功！`, '', `${notifyName}=${match1};devId=${match2};`);
} else {
  $notify(`${cookieName}`, `❌获取${notifyName}失败`, `请检查请求头中是否包含${notifyName}`);
}

$notify(`${cookieName}获取成功！`, '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔输出完整请求值：\n${JSON.stringify(headers, null, 2)}`);


setTimeout($done, 1000)
$done({})
