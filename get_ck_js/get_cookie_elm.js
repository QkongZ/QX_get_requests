/*
[rewrite_local]
# 获取饿了么的Cookie
^https?://h5\.ele\.me/restapi/eus/login/mobile_send_code url script-request-header https://example.com/eleme_cookie.js

# 输出Cookie到日志中，并添加备注信息
^https?://h5\.ele\.me/ script-response-body log-header="Cookie: $SID;$cookie2;$USERID;$_tb_token_; #饿了么Cookie"
[mitm]
# 配置MitM主机名
hostname = h5.ele.me
*/
const cookieName = '饿了么cookie'
const key1 = 'SID'
const key2 = 'cookie2'
const key3 = 'USERID'
const key4 = '_tb_token_'
const regex1 = new RegExp(`${key1}=([^;]+)`)
const regex2 = new RegExp(`${key2}=([^;]+)`)
const regex3 = new RegExp(`${key3}=([^;]+)`)
const regex4 = new RegExp(`${key4}=([^;]+)`)

let headerCookie = $request.headers['Cookie']

if (headerCookie) {
  let cookie = {}
  if (regex1.test(headerCookie)) {
    cookie[key1] = regex1.exec(headerCookie)[1]
  }
  if (regex2.test(headerCookie)) {
    cookie[key2] = regex2.exec(headerCookie)[1]
  }
  if (regex3.test(headerCookie)) {
    cookie[key3] = regex3.exec(headerCookie)[1]
  }
  if (regex4.test(headerCookie)) {
    cookie[key4] = regex4.exec(headerCookie)[1]
  }

  console.log(`${cookieName}: ${JSON.stringify(cookie)}`)
  $notify(`${cookieName}`, '', `SID: ${cookie[key1]}\n${key2}: ${cookie[key2]}\n${key3}: ${cookie[key3]}\n${key4}: ${cookie[key4]}`)
} else {
  $notify(`${cookieName}`, '获取Cookie失败', '请检查请求头中是否包含Cookie')
}

let cookie = $request.headers['Cookie'];
let matchResult = cookie.match(/SID=([^;]*)/);
if (matchResult) {
    $notify("饿了么Cookie获取成功！", "", "SID=" + matchResult[1]);
}
matchResult = cookie.match(/cookie2=([^;]*)/);
if (matchResult) {
    $notify("饿了么Cookie获取成功！", "", "cookie2=" + matchResult[1]);
}
matchResult = cookie.match(/USERID=([^;]*)/);
if (matchResult) {
    $notify("饿了么Cookie获取成功！", "", "USERID=" + matchResult[1]);
}
matchResult = cookie.match(/_tb_token_=([^;]*)/);
if (matchResult) {
    $notify("饿了么Cookie获取成功！", "", "_tb_token_=" + matchResult[1]);
}
console.log("饿了么Cookie获取成功！Cookie：" + cookie);

$done({});
$notification.post("获取饿了么Cookie成功！", "请查看日志或弹窗获取Cookie信息。");

