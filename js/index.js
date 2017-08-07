/**
 * Created by Administrator on 2017/6/27.
 */
//µº∫Ω‰÷»æ
getData('/api/getindexmenu','tmp1','#nav');
$("#nav").on('click','a#shopMore',function(){
    getData('/api/getindexmenu','tmp1-1','#nav');
    return false;
})
//‰÷»æ…Ã∆∑
getData('/api/getmoneyctrl','tmp2','#shop-content');
