const cookieName = '联不通token🍭';
const notifyName = 'Token🍪'
const body = typeof $request.body === 'string' ? $request.body : JSON.stringify($request.body, null, 2);

const key1 = 'token_online'
const regex1 = new RegExp(`${key1}=\\s*([^&;\\n]+)`, 'i'); // 匹配token_online=xxx的值，不包含&和;

if (body) {
  const match = regex1.exec(body);
  if (match) {
    const token = match[1];
    console.log(`${notifyName}: ${token}`);
    $notify(`🎉${cookieName} 获取成功！`, '', `${notifyName}=${token}`);
  }
}

$notify(`${cookieName}获取成功！`, '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔输出完整请求值：\n${body}\n`);

setTimeout($done, 1000);
$done({});
