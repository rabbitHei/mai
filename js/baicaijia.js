//渲染导航栏并添加事件
var titleid = +window.location.search.split('=')[1]||0;
useData('/api/getbaicaijiatitle',function(txt){
    //获取所需元素
    var dom = $('#nav').html(template('tmp1',txt));
    var ul = dom.find('#uu');
    var li = dom.find('#uu li');
    var UlWidth = 0;
    var winWidth = $('#nav').width();
    var gap = 50;
    var currentX=0;
    for (var i = 0; i < li.length; i++) {
        UlWidth += $(li[i]).width();
    }
    //跳转后作出调整
    console.log(titleid);
    $(li[titleid]).addClass('active').siblings().removeClass('active');
    var move = 0;
    for (var i = 0; i < titleid; i++) {
        move += $(li[i]).width();
    };
    var maxX = UlWidth-winWidth;
    if(move>=maxX){
        move=maxX;
    };
    setTranslateX(ul,-move);
     currentX =- move;
    console.log(currentX);
    //触摸事件
    var startX= 0,moveX= 0,distanceX=0,endX= 0,go=0;
    var nav = document.querySelector('#nav');
    nav.addEventListener('touchstart', function(e) {
        removeTransition(ul);
        startX = e.touches[0].clientX;
    });
    nav.addEventListener('touchmove',function(e){
        moveX= e.touches[0].clientX;
        distanceX=moveX-startX;
        go = currentX+distanceX;
        if(go<=-(maxX+gap)){
            go=-(maxX+gap)
        }else if(go>=gap){
            go=gap;
        }
        setTranslateX(ul,go);
    })
    nav.addEventListener('touchend',function(e){
        addTransition(ul);
        endX = e.changedTouches[0].clientX;
        currentX+=endX-startX;
        if(go<=-(maxX+gap)){
            setTranslateX(ul,-maxX);
            currentX=-maxX;
        }else if(go>=gap){
            setTranslateX(ul,0);
            currentX=0;
        }
        startX=0;
        moveX=0;
        distanceX=0;
        endX=0;
        go=0;
    })
})
//渲染商品
getData('/api/getbaicaijiaproduct?titleid='+titleid,'tmp2','.product');
//jq工具
function addTransition(dom) {
    dom.css('transition', "all 0.2s");
}
function removeTransition(dom) {
    dom.css('transition', "none");
}
function setTranslateX(dom, x) {
    dom.css('transform', "translateX(" + x + "px)");
}
