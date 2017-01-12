var querystring=require("querystring");

var queryString1=querystring.stringify({name:'scott',course:['jade','node'],from:''});

var queryString2=querystring.stringify({name:'scott',course:['jade','node'],from:''},',');

var queryString3=querystring.stringify({name:'scott',course:['jade','node'],from:''},',',':');

var queryString4=querystring.parse('name=scott&course=jade&course=node&from=');

var queryString5=querystring.parse('name=scott,course=jade,course=node,from=',',');

var queryString6=querystring.parse('name:scott,course:jade,course:node,from:',',',':');

var queryString7=querystring.escape('<哈哈>');

var queryString8=querystring.unescape('%3C%E5%93%88%E5%93%88%3E');

console.log(queryString1);
console.log('----------');
console.log(queryString2);
console.log('----------');
console.log(queryString3);
console.log('----------');
console.log(queryString4);
console.log('----------');
console.log(queryString5);
console.log('----------');
console.log(queryString6);
console.log('----------');
console.log(queryString7);
console.log('----------');
console.log(queryString8);
console.log('----------');