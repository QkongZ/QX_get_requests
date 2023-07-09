const getName = '通用获取对应值🍭';
const notifyName = 'Cookie🍪';

// const key1 = ''; // 自定义匹配变量值
// const regex1 = new RegExp(`${key1}=([^;]+)`);

let headerCookie = $request.headers['Cookie'];

// 1. 获取当前完整的 URL 值
const urlText = $request.url;
console.log(`URL: ${urlText}`);

// 2. 定义变量来保存请求头、请求主体、响应头和响应主体
let requestHeaders = '';
let requestBody = '';
let responseHeaders = '';
let responseBody = '';

if (headerCookie) {
  const matchValue = regex1.exec(headerCookie);
  if (matchValue) {
    const key = matchValue[1];
    console.log(`${notifyName}: ${key}`);
    $notify(`🎉${getName} 获取成功！`, '', `${notifyName}=${key}`);
  } else {
    $notify(getName, '获取Token失败', `请检查请求头中是否包含${notifyName}`);
  }
}

// 3. 定义变量值来决定输出哪些部分的内容
const outputOption = '1234'; // 设置为要输出的部分的组合，例如'12'表示输出请求头和请求主体，'34'表示输出响应头和响应主体

// 4. 检查变量值并输出对应的部分内容
if (outputOption.includes('1')) {
  requestHeaders = JSON.stringify($request.headers, null, 2);
  console.log(`🔔请求头：\n${requestHeaders}\n`);
}

if (outputOption.includes('2')) {
  requestBody = $request.body;
  console.log(`🔔请求主体：\n${requestBody}\n`);
}

$notify(`${getName}获取成功！`, '', `${getName}获取成功！请查看弹窗匹配值或日志查看完整值。`);
console.log(`${getName}获取成功！`);

if (outputOption.includes('3')) {
  responseHeaders = JSON.stringify($response.headers, null, 2);
  console.log(`🔔响应头：\n${responseHeaders}\n`);
}

if (outputOption.includes('4')) {
  responseBody = $response.body;
  console.log(`🔔响应主体：\n${responseBody}\n`);
}

// 5. 转换请求头和响应头为 JSON 对象或保持原来格式
const convertToJson = true; // 设置为 true 转换为 JSON 对象，设置为 false 保持原来格式

if (convertToJson) {
  requestHeaders = JSON.parse(requestHeaders);
  responseHeaders = JSON.parse(responseHeaders);
}

// 6. 输出完整请求值和响应值
console.log(`🔔输出完整请求值：\n${JSON.stringify($request, null, 2)}\n`);
console.log(`🔔输出完整响应值：\n${JSON.stringify($response, null, 2)}\n`);

// 7. 执行完成操作
setTimeout($done, 1000);
$done({});
