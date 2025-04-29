const date =new Date();
console.log(date.toLocaleString("en-US",{timeZone:"America/New_York"}));
console.log(date.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}));
console.log(date.toLocaleString("en-JP",{timeZone:"Asia/Tokyo"}));