/*
正则匹配响应主体中对应的URL
原神祈愿获取对应url
*/
const cookieName = '原神祈愿🔗';
const notifyName = 'URL🍪';

const regex1 = /^https?:\/\/hk4e-api\.mihoyo\.com\/event\/gacha_info\/api\w+$/i;
const url = $request.url;


if (regex1.test(url)) {
  console.log(`${cookieName}: ${url}`);
  $notify(`🎉${cookieName}获取成功`, '', `${notifyName}=${url}`;
} else {
  $notify(`❌${cookieName}获取失败`, '', `请检查请求头中是否包含${notifyName}`);
}

$notify(`${cookieName}获取成功！`, '', `${notifyName}获取成功！请查看日志或弹窗获取七七信息。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔完整值${notifyName}：\n${url}\n`);

setTimeout($done, 1000)
$done({})
