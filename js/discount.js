//��ȡҳ��href
var dataLocation = window.location.href.split('?')[1];
var productId = +dataLocation.split('=')[1];

console.log(productId);
//����ǰҳ��
$('#back').on('click',function(){
    this.href+='?pageid='+pageId;
})
useData('/api/getdiscountproduct?productid='+productId,function(txt){
    var result = txt.result[0];
//��Ⱦ��������
    document.querySelector('#content').innerHTML= template('tmp1',result);
//��ַȥ��Ⱦ
    document.querySelector('#adress').innerHTML= template('tmp2',result);
//Ʒ����Ⱦ
    document.querySelector('#pinlun').innerHTML= template('tmp3',result);
})
