/**
 * Created by Administrator on 2017/6/28.
 */
var dataLocation = window.location.href.split('?')[1].split('&');
var productId = +dataLocation[0].split('=')[1];
//console.log(dataLocation[1]);
var pageId = +(dataLocation[1]&&dataLocation[1].split('=')[1]||0);
//console.log(productId,pageId);
//返回前页面
$('#back').on('click',function(){
    this.href+='?pageid='+pageId;
})
useData('/api/getmoneyctrlproduct?productid='+productId,function(txt){
    var result = txt.result[0];
//渲染内容区域
    document.querySelector('#content').innerHTML= template('tmp1',result);
//地址去渲染
    document.querySelector('#adress').innerHTML= template('tmp2',result);
//品论渲染
    document.querySelector('#pinlun').innerHTML= template('tmp3',result);
})
