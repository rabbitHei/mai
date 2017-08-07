/**
 * Created by Administrator on 2017/6/28.
 */
//添加导航数据
getData('/api/getgsshoparea','tmp0','#area');
getData('/api/getgsshop','tmp','#shop');
//发送ajax请求渲染商品
var shopid = 0;
var areaid = 0;
getData('/api/getgsproduct?shopid='+shopid+'&areaid='+areaid,'tmp1','#product');
$('.shop').on('click',function(){
    $('#shop').toggleClass('on');
})
$('.area').on('click',function(){
    $('#area').toggleClass('on');
})
$('.price').on('click',function(){
    $('#price').toggleClass('on');
})
$('#price').on('click','li',function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('#price').removeClass('on');
    $('#shop').removeClass('on');
    $('#area').removeClass('on');
})

$('#shop').on('click','li',function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('#shop').removeClass('on');
    $('#area').removeClass('on');
    $('#price').removeClass('on');
    shopid = +$(this).attr('data-shopid');
    //console.log(shopid);
    getData('/api/getgsproduct?shopid='+shopid+'&areaid='+areaid,'tmp1','#product');
})
$('#area').on('click','li',function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('#area').removeClass('on');
    $('#shop').removeClass('on');
    $('#price').removeClass('on');
    areaid = +$(this).attr('data-areaid');
    //console.log(areaid);
    getData('/api/getgsproduct?shopid='+shopid+'&areaid='+areaid,'tmp1','#product');
})