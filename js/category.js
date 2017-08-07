/**
 * Created by Administrator on 2017/6/27.
 */
//‰÷»æµº∫Ω¿∏
getData('/api/getcategorytitle','tmp1','#row');
//‰÷»æ√˜œ∏¿∏
$('#row').on('click','li.one a',function(){
    if(!this.flag){
        this.flag=true;
        this.now='open';
        var id = this.getAttribute('data-title-id');
        var ul = document.createElement('ul');
        this.parentNode.appendChild(ul);
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategory?titleid='+id,
            dataType:'json',
            success: function (txt) {
                txt.result.forEach(function(v){
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    li.appendChild(a);
                    a.href= 'productlist.html?categoryid='+ v.categoryId+'&pageid=1';
                    a.appendChild(document.createTextNode(v.category));
                    ul.appendChild(li);
                })
            }
        })
    }else{
        if(this.now=='open'){
            this.nextElementSibling.style.display='none';
            this.now='close';
        }else{
            this.nextElementSibling.style.display='block';
            this.now='open';
        }
    }

})