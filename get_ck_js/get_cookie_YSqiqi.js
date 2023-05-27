/*
正则匹配响应主体中对应的URL
原神祈愿获取对应url
*/
const cookieName = '原神祈愿🔗';
const notifyName = 'URL🍪';

const regex1 = /^https?:\/\/hk4e-api\.mihoyo\.com\/event\/gacha_info\/api\/getGachaLog?\w+$/i;
const url1 = $request.url;


if (regex1.test(url1)) {
  console.log(`${cookieName}: ${url1}`);
  $notify(`🎉${cookieName}获取成功`, '', `${notifyName}=${url}`;
} else {
  $notify(`❌${cookieName}获取失败`, '', `请检查请求头中是否包含${notifyName}`);
}

$notify(`${cookieName}获取成功！`, '', `${notifyName}获取成功！请查看日志或弹窗获取七七信息。`);
console.log(`${cookieName}获取成功！`);
console.log(`🔔完整值${notifyName}：\n${url1}\n`);

setTimeout($done, 1000)
$done({})
