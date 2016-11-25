$(function() {

	$('#img_news').click(function() {
		//点击图片后发送跳转到指定页面的事件。
		console.log("hhh");
		//window.location.href = "news.html";
		window.open('news.html');
	});
	
	$('#login').click(function() {
		//点击图片后发送跳转到指定页面的事件。
		window.location.href = "login.html";
		//新标签页打开
		//window.open('login.html');
	});
});