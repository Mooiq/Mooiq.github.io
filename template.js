var CaptionTpt = {
	FirstTitle:'',
	SecondTitle:[],
	template: function(){
		return (`
			<div class="caption">
			<h4 class="title first-title" onclick="CaptionTpt.showUl(this)">${CaptionTpt.FirstTitle}</h4>
				<ul class="second-ul">
					${CaptionTpt.addSecondTitle()}
				</ul>
			</div>
		`)
	},
	addSecondTitle:function(){
		var secondtitles = '';
		for (var i = 0; i < CaptionTpt.SecondTitle.length; i++) {
			secondtitles += "<a target='_blank' href='"+CaptionTpt.SecondTitle[i].href+"'><li class='title second-title animated'>"+CaptionTpt.SecondTitle[i].name+"</li></a>"
		};
		return secondtitles
	},
	showUl:function(data){
		// 获取点击标签的下个兄弟标签
		// alert(data.nextElementSibling.className);
		var secondUl = data.nextElementSibling;
		//给二级标题添加/移除样式
		// 获取二级标签
		var secondTitle = secondUl.getElementsByTagName('li');
		var secondTitleNums = secondTitle.length;
		// 给secondUl固定高
		secondUl.style.height = secondTitleNums*40 +'px';
		if (secondUl.style.display == 'block') {
			// 给二级标签移除进入样式，添加离开样式
			if (secondTitleNums) {
				for (let i = secondTitleNums - 1; i >= 0; i--) {
					setTimeout(function(){
						// console.log(i);
						secondTitle[i].classList.remove('bounceInRight');
						secondTitle[i].classList.add('bounceOutLeft');
					}, i*300);
					setTimeout(function(){
						secondTitle[i].style.display = 'none';
						secondUl.style.display = 'none';
					}, secondTitleNums*300+100);// --、先这样把...
				}
			}
			// secondUl.style.display = 'none';
		}else{
			secondUl.style.display = 'block';
			// 如果有二级标签，添加进入样式
			// alert(secondTitle.length);
			if (secondTitleNums) {
				for (let i = secondTitleNums - 1; i >= 0; i--) {
					setTimeout(function(){
						// console.log(i);
						secondTitle[i].classList.remove('bounceOutLeft');
						secondTitle[i].classList.add('bounceInRight');
						secondTitle[i].style.display = 'block';
					}, i*300)
				}
			}
		};
	}
}