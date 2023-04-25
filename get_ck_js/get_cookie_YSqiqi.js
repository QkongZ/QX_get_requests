/*
正则匹配响应主体中对应的URL
原神祈愿获取对应url
*/
const cookieName = '原神祈愿🔗';
const urlRegex = /^https?:\/\/hk4e-api\.mihoyo\.com\/event\/\w+$/i;
const url = $request.url;
if (urlRegex.test(url)) {
  console.log(`Matched URL: ${url}`);
  $notify('匹配到URL', '', `URL=${url}`);
} else {  
  $notify('原神祈愿🔗获取失败', '请检查请求头中是否包含Cookie');  
}  

$notify('原神祈愿🔗获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取七七信息。`)
console.log(`${cookieName}获取成功！`)
console.log(`url：${url}`)

$done({});
