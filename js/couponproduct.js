//��ȡ��Ʒid
var couponid = +window.location.search.split('=')[1];
useData('/api/getcouponproduct?couponid='+couponid,function(info){
    //��Ⱦ��Ʒ�б�
    var $dom = $('#shop-content');
    $dom.html(template('tmp1',info));
    var length = $dom.find('a').length;
    var obj={};
    var imgArr = obj.imgArr=[];
    for(var i =0;i<length;i++){
        imgArr.push($dom.find('a').eq(i).attr('txt'));
    }
    //��Ⱦmask�ֲ�
    $('#mask').html(template('tmp2',obj));
    var $ul = $('#mask').find('ul');

    //��ʾ����
    var index = 0;
    var wd = 0;
    $('#shop-content').on('click','a',function(){
        $(".mask").slideDown(400);
        wd = $(this).parent().innerWidth()*0.3;
        index = +$(this).attr('data-id');
        $ul.css({
            'transition':'none',
            'transform':'translate('+ -index*wd +'px,0px)'
        });
        return false;
    })
    //���Ұ�ť�¼�
    $('.left').on('click',function(){
        index--;
        index = index<=0?0:index;
        $ul.css({
            'transition':'transform 0.2s linear',
            'transform':'translate('+ -index*wd +'px,0px)'
        });
    })
    $('.right').on('click',function(){
        index++;
        index = index>=length?length-1:index;
        $ul.css({
            'transition':'transform 0.2s linear',
            'transform':'translate('+ -index*wd +'px,0px)'
        });
    })
    //�رյ���
    $('.close').on('click',function(){
        $('.mask').slideUp(400)
    })
})







