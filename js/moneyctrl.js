/**
 * Created by Administrator on 2017/6/28.
 */
//商品
//分页
var thisLocation=window.location.href;
var page = +(thisLocation.split('?')[1]&&thisLocation.split('?')[1].split('=')[1]||0);
//console.log(page);
useData("/api/getmoneyctrl?pageid="+page,function(txt){
    var result=txt;
    var html = template('tmp1',result);
    document.querySelector('#shop-content').innerHTML=html;
    //var id = txt.result[0].categoryId;
    var count = Math.ceil(txt.totalCount/txt.pagesize);
    //console.log(count);
    var sele=document.querySelector('#selectPage');
    for(var i=0;i<count;i++){
        var option = document.createElement('option');
        option.value=i+1;
        option.appendChild(document.createTextNode(i+1+'/'+(count)));
        sele.appendChild(option);
    }
    var childs = sele.querySelectorAll('option');
    for(var j=0;j<count;j++){
        childs[j].removeAttribute('selected');
    }
    //分页按钮
    if(page<=0){
        document.querySelector('#a1').href='moneyctrl.html?pageid='+(page);
        document.querySelector('#a2').href='moneyctrl.html?pageid='+(page+1);
        childs[0].setAttribute('selected','selected');
    }else if(page>=count-1){
        document.querySelector('#a1').href='moneyctrl.html?pageid='+(page-1);
        document.querySelector('#a2').href='moneyctrl.html?pageid='+(page);
        childs[page].setAttribute('selected','selected');
    }else{
        document.querySelector('#a1').href='moneyctrl.html?pageid='+(page-1);
        document.querySelector('#a2').href='moneyctrl.html?pageid='+(page+1);
        childs[page].setAttribute('selected','selected');
    }
    sele.onchange=function(){
        window.location.href='moneyctrl.html?pageid='+(this.value-1);
    }
});
//console.log(page);
//绑定跳转事件
$('#shop-content').on('click','a',function(){
    this.href +=('&pageid='+page);
})
