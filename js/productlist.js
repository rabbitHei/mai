//商品数据
var arr= window.location.search.slice(1).split('&').map(function(v){
    return v.split('=');
});
var obj={};
arr.forEach(function(v){
    obj[v[0]]=decodeURI(v[1]);
})
var data= window.location.href.split('?');
var porA = document.querySelector('#pro');
var page = +obj.pageid;
//console.log(page);
useData("/api/getproductlist?"+data[1],function(txt){
    var result=txt;
    var html = template('tmp2',result);
    document.querySelector('#shop-content').innerHTML=html;
    var id = txt.result[0].categoryId;
    var count = Math.ceil(txt.totalCount/txt.pagesize);
    //console.log(count);
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid?categoryid='+id,
        dataType:'json',
        success:function(info){
            var txt = info.result[0].category
            porA.innerHTML=txt;
            //选择栏
            var sele=document.querySelector('#selectPage');
            for(var i=0;i<count;i++){
                var option = document.createElement('option');
                option.value=i+1;
                option.appendChild(document.createTextNode(i+1+'/'+(count)));
                sele.appendChild(option);
            }
            //分页按钮
            if(page<=1){
                document.querySelector('#a1').href='productlist.html?categoryid='+id+'&category='+txt+'&pageid='+(page);
                document.querySelector('#a2').href='productlist.html?categoryid='+id+'&category='+txt+'&pageid='+(page+1);
            }else if(page>=count){
                document.querySelector('#a1').href='productlist.html?categoryid='+id+'&category='+txt+'&pageid='+(page-1);
                document.querySelector('#a2').href='productlist.html?categoryid='+id+'&category='+txt+'&pageid='+(page);
            }else{
                document.querySelector('#a1').href='productlist.html?categoryid='+id+'&category='+txt+'&pageid='+(page-1);
                document.querySelector('#a2').href='productlist.html?categoryid='+id+'&category='+txt+'&pageid='+(page+1);
            }
            var childs = sele.querySelectorAll('option');
            for(var j=0;j<count;j++){
                childs[j].removeAttribute('selected');
            }
            console.log(page);
            childs[page-1].setAttribute('selected','selected');
            sele.onchange=function(){
                window.location.href=data[0]+'?categoryid='+id+'&category='+txt+'&pageid='+this.value;
            }
        }
    })

});



