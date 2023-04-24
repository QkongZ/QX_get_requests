const cookieName = '联不通token';
const body = $request.body;
const regexToken = /token_online\s*=\s*([^&;]+)/i; // 匹配token_online=xxx的值，不包含&和;

if (body) {
  const match = regexToken.exec(body);
  if (match) {
    const token = match[1];
    console.log(`Token: ${token}`);
    $notify('匹配到Token', '', `Token=${token}`);
  }
}

$notify('Cookie获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`Cookie：${body}`)

setTimeout($done, 1000)
$done({})
