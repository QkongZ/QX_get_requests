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
const cookieVal = $request.headers['Cookie'];
const SID = getCookieValue(cookieVal, 'SID');
const cookie2 = getCookieValue(cookieVal, 'cookie2');
const USERID = getCookieValue(cookieVal, 'USERID');
const _tb_token_ = getCookieValue(cookieVal, '_tb_token_');

$done({ headers: { 'Cookie': 'SID=' + SID + '; cookie2=' + cookie2 + '; USERID=' + USERID + '; _tb_token_=' + _tb_token_ + ';' } });

function getCookieValue(cookie, name) {
  const pattern = new RegExp(name + '=([^;]*)');
  const matches = pattern.exec(cookie);
  return matches ? matches[1] : '';
}
