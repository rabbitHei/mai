/**
 * Created by Administrator on 2017/6/27.
 */
//��Ⱦ����
function getData(info,id,id2){
    $.ajax({
        type:'get',
        dataType:'json',
        url:'http://127.0.0.1:9090'+info,
        success:function(txt){
            var result=txt;
            var html = template(id,result);
            document.querySelector(id2).innerHTML=html;
        }
    })
}
//ʹ������
function useData(info,call){
    $.ajax({
        type:'get',
        dataType:'json',
        url:'http://127.0.0.1:9090'+info,
        success:function(txt){
            call&&call(txt);
        }
    })
}
//js�����ڵ㹤��
function createE(e){
    return document.createElement(e);
}
function createT(t){
    return document.createTextNode(t);
}
