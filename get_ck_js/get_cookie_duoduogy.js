/*
获取拼多多，多多果园请求头的Cookie中PDDAccesToken  输出样式为 PDDAccesToken=XXX;
*/
const cookieName = '多多果园Token🍭'
const notifyName = 'Token🍪';

const key1 = 'PDDAccessToken'
const regex1 = new RegExp(`${key1}=([^;]+)`);

let headerCookie = $request.headers['Cookie']

if (headerCookie) {
  const match = regex1.exec(headerCookie);
  if (match) {
    const key = match[1]
    console.log(`${notifyName}: ${key}`);
    $notify(`🎉${cookieName} 获取成功！`, '', `${notifyName}=${key}`);
  }else {
  $notify(cookieName, '获取Token失败', '请检查请求头中是否包含${notifyName}')
  }
}
  

$notify(`${cookieName}获取成功！`, '', `${cookieName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔输出完整请求值：\n${JSON.stringify(headerCookie, null, 2)}\n`)

setTimeout($done, 1000)
$done({})
