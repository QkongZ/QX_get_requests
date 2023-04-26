const cookieName = '云原神token';  
const tokenRegex = /x-rpc-combo_token:\s*(.*?)(;|$)/i;  
const deviceIdRegex = /x-rpc-device_id:\s*([^;\n]+)/i;  
  
const headers = $request.headers;  
const tokenMatch = tokenRegex.exec(headers['x-rpc-combo_token']);  
const deviceIdMatch = deviceIdRegex.exec(headers['x-rpc-device_id']);  
  
if (tokenMatch && deviceIdMatch) {  
  const token = tokenMatch[1];  
  const deviceId = deviceIdMatch[1];
  console.log(`Token: ${token};devId=${deviceId}`);  
  $notify(`${cookieName}`, '', `Token: ${token};devId=${deviceId}`)
} else {  
  console.log(cookieName, 'Cookie设置失败。请确认 URL、日志或弹窗中是否包含 token');  
  $notify(cookieName, '云原神token获取失败', '请检查请求头中是否包含token');  
}  
  
$notify('云原神token获取成功！', '', `${cookieName}获取成功！请查看日志或弹窗获取Cookie信息。`);  
console.log(`${cookieName}获取成功！`);  
console.log(`Token：${headers['x-rpc-combo_token']};devId=${headers['x-rpc-device_id']}`);  
  
$done({})
