/**
 * Created by Administrator on 2017/6/27.
 */
//������Ⱦ
getData('/api/getindexmenu','tmp1','#nav');
$("#nav").on('click','a#shopMore',function(){
    getData('/api/getindexmenu','tmp1-1','#nav');
    return false;
})
//��Ⱦ��Ʒ
getData('/api/getmoneyctrl','tmp2','#shop-content');
