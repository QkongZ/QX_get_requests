/*
正则匹配响应主体中对应的URL
原神祈愿获取对应url
*/
const cookieName = '原神祈愿🔗';
const urlRegex = /^https?:\/\/hk4e-api\.mihoyo\.com\/event\/\w+$/i;
const url = $request.url;

let urlString = `祈愿URL🔗=${url}`; // 把多余的 "}" 删掉

if (urlRegex.test(url)) {
  console.log(`${cookieName}: ${JSON.stringify(url)}`);
  $notify(`${cookieName}`, '', urlString);
} else {
  $notify(cookieName, '祈愿🔗获取失败', '请检查请求头中是否包含URL');
}

$notify('原神祈愿🔗获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取七七信息。`);
console.log(`${cookieName}获取成功！`);
console.log(`url：${url}`);

$done({});
