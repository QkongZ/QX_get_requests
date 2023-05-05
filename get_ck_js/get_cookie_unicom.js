const cookieName = '联不通token';
const notifyName = '🍪Token🍪'
const body = $request.body;
const regexToken = /token_online\s*=\s*([^&;]+)/i; // 匹配token_online=xxx的值，不包含&和;

if (body) {
  const match = regexToken.exec(body);
  if (match) {
    const token = match[1];
    console.log(`${notifyName}: ${token}`);
    $notify('匹配到 '${notifyName}' ', '', `${cookieName}=${token}`);
  }
}

$notify(''${notifyName}' 获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`🔔输出完整${notifyName}：${body}`)

setTimeout($done, 1000)
$done({})
