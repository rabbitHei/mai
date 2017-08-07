/**
 * Created by Administrator on 2017/6/27.
 */
//三级菜单
var data= window.location.href;
var porA = document.querySelector('#pro');
var porA1 = document.querySelector('#pro1');
var pinlun =2320;
//console.log(pinlun);
data= +data.split('?')[1].split('&')[0].split('=')[1];
//console.log(data);
    useData('/api/getproduct?productid='+data,function(txt){
    porA1.innerHTML=txt.result[0].productName.split(' ')[0];
    var ajaxData=txt.result[0].categoryId;
    document.querySelector('#tmp1-1').innerHTML=template('tmp1',txt.result[0]);
    //
    useData('/api/getcategorybyid?categoryid='+ajaxData,function(info){
        var str = info.result[0].category;
        porA.innerHTML=str;
        porA.href='productlist.html?categoryid='+ajaxData+'&category='+str+'&pageid=1';
    })
})
//评论 http://127.0.0.1:9090/api/getproductcom?productid=0
document.querySelector('#pinlun').innerHTML='评论('+pinlun+')';
getData('/api/getproductcom?productid='+data,'tmp2','#tmp2-1');
