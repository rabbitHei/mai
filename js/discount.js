//获取页面href
var dataLocation = window.location.href.split('?')[1];
var productId = +dataLocation.split('=')[1];

console.log(productId);
//返回前页面
$('#back').on('click',function(){
    this.href+='?pageid='+pageId;
})
useData('/api/getdiscountproduct?productid='+productId,function(txt){
    var result = txt.result[0];
//渲染内容区域
    document.querySelector('#content').innerHTML= template('tmp1',result);
//地址去渲染
    document.querySelector('#adress').innerHTML= template('tmp2',result);
//品论渲染
    document.querySelector('#pinlun').innerHTML= template('tmp3',result);
})
