/* 
* @Author: Marte
* @Date:   2018-01-07 22:08:52
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-08 01:04:41
*/
var box = {
    img: '',
    title: '',
    url: '',
    max: 20,
    min: -20,
    template: function(){
        return(
            '<li>'+
            '<a onmouseover="box.mouseOver(this)" onmouseout="box.mouseOut(this)" target="_blank" href="'+ box.url +'" class="box">'+
                '<div class="img-box">'+
                    '<img src="'+ box.img +'" alt="" />'+
                '</div>'+
                '<div class="info-box">'+
                    '<span class="le">'+ box.title +'</span>'+
                    '<span class="ri">进入详情页</span>'+
                '</div>'+
            '</a>'+
        '</li>'
        )
    },
    mouseOver: function(sel){
        let num = parseInt(Math.random() * (box.max - box.min) + box.min);
        $(sel).css('transform', 'rotate('+ num +'deg) scale(1.1)');
    },
    mouseOut: function(sel){
        $(sel).css('transform', '');
    }
}