const getName = '通用获取对应值🍭';
const notifyName = 'Cookie🍪';

//  定义变量值来决定输出哪些部分的内容
const outputOption = '1234'; // 设置为要输出的部分的组合，例如'1'只输出请求头'2'只输出请求体'3'只输出响应头'4'只输出请求体'1234'全部输出，输出为弹窗中
//  转换请求头和响应头为 JSON 对象或保持原来格式
const convertToJson = true; // 设置为 true 转换为 JSON 对象，设置为 false 保持原来格式，输出为日志中

//以下注释段为正则匹配自定义值
/*
const key1 = 'Token'; // 自定义匹配变量值 例如匹配Token值
const regex1 = new RegExp(`${key1}=([^;]+)`);// 正则匹配变量值

let getValue = $request.headers['获取自定义键值']; // 例如请求头中的Cookie $request.headers['Cookie']

if (getValue) {
  const matchValue = regex1.exec(getValue);
  if (matchValue) {
    const matchKey = matchValue[1];
    console.log(`${notifyName}: ${matchKey}`);
    $notify(`🎉${getName} 获取成功！`, '', `${key1}=${key}`);
  } else {
    $notify(getName, '获取失败', `请检查请求头中是否包含${key1}`);
  }
}
*/

// 1. 获取当前完整的 URL 值，并提取域名部分
const urlText = $request.url;
const domainMatch = urlText.match(/https?:\/\/([^/]+)/);
const domain = domainMatch ? domainMatch[1] : '未匹配到域名';
//console.log(`域名: ${domain}`);


// 2. 检查变量值并记录对应的部分内容
let log = '';


// 3. 获取当前完整的所有请求值
log += `🔔当前完整URL值✅：\n${urlText}\n\n`
//console.log(`URL: ${urlText}`);

if (outputOption.includes('1')) {
  log += `🔔请求头1️⃣：\n${JSON.stringify($request.headers, null, 2)}\n\n`;
}

if (outputOption.includes('2')) {
  const requestBody = $request.body || '🚫请求主体为空';
  log += `🔔请求主体2️⃣：\n${requestBody}\n\n`;
}

if (outputOption.includes('3')) {
  log += `🔔响应头3️⃣：\n${JSON.stringify($response.headers, null, 2)}\n\n`;
}

if (outputOption.includes('4')) {
  log += `🔔响应主体4️⃣：\n${$response.body}\n\n`;
}

$notify(`获取为${domain}中的请求值！`, '🎉获取成功', `${log}`);


// 4.转换请求头和响应头为 JSON 对象或保持原来格式
if (convertToJson) {
  requestHeaders = JSON.parse(requestHeaders);
  responseHeaders = JSON.parse(responseHeaders);
}

// 5.. 输出完整请求值和响应值
console.log(`🔔输出完整请求值：\n${JSON.stringify($request, null, 2)}\n`);
console.log(`🔔输出完整响应值：\n${JSON.stringify($response, null, 2)}\n`);

// 6. 执行完成操作
setTimeout($done, 1000);
$done({});
