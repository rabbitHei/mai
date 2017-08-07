/**
 * Created by Administrator on 2017/6/29.
 */
//获取参数
var data = window.location.search;
var id = +data.split('&')[0].split('=')[1];
console.log(id);
var info = data.split('&')[1].split('=')[1];
info = decodeURI(info).split('十')[0];
//console.log(info);
//标题修改
var h3 = document.querySelectorAll('.h3');
for(var i =0;i<h3.length;i++){
    i==0?h3[0].appendChild(createT(info+'哪个好')):null;
    i==1?h3[1].appendChild(createT(info+'产品销量排行')):null;
    i==2?h3[2].appendChild(createT(info+'最新评论')):null;
}
//渲染导航
getData('/api/getbrand?brandtitleid='+id,'tmp1','#row');
//渲染商品
useData('/api/getbrandproductlist?brandtitleid='+id+'&pagesize=4',function(txt){
    var dom = document.querySelector('#shop-content');
    dom.innerHTML=template('tmp2',txt);
    //var id = dom.....getAttribute('data-id');不行
    var dataId = $(dom).find('#proId').attr('data-id')||null;
    //渲染评论区域
    useData('/api/getproductcom?productid='+dataId,function(info){
        var dom = document.querySelector('#comment');
        dom.innerHTML=template('tmp3',info);
        useData('/api/getbrandproductlist?brandtitleid='+id,function(text){
            var html = template('tmp4',text);
            console.log(html);
            $(dom).find('.protit').html(html);
        })
    })
});


