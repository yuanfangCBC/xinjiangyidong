$(function() {

	$("#left_two").click(function() {
		$("#right_one").css("display", "none"); //隐藏div
		$("#right_three").css("display", "none"); //隐藏div
		$("#right_four").css("display", "none");
		$("#right_two").css("display", "block"); //显示div
		$(this).addClass('img-on');
		$('#left_one').addClass('img-unon');
		$('#left_two').parent().siblings().children('a').removeClass('img-on');
	});

	$("#left_three").click(function() {
		$("#right_one").css("display", "none"); //隐藏div
		$("#right_two").css("display", "none"); //隐藏div
		$("#right_four").css("display", "none");
		$("#right_three").css("display", "block"); //显示div
		$(this).addClass('img-on');
		$('#left_one').addClass('img-unon');
		$('#left_three').parent().siblings().children('a').removeClass('img-on');
	});

	$("#left_four").click(function() {
		$("#right_one").css("display", "none"); //隐藏div
		$("#right_two").css("display", "none"); //隐藏div
		$("#right_three").css("display", "none");
		$("#right_four").css("display", "block"); //显示div
		$(this).addClass('img-on');
		$('#left_one').addClass('img-unon');
		$('#left_four').parent().siblings().children('a').removeClass('img-on');
	});

	$("#left_one").click(function() {
		$("#right_two").css("display", "none"); //隐藏div
		$("#right_three").css("display", "none"); //隐藏div
		$("#right_four").css("display", "none");
		$("#right_one").css("display", "block"); //显示div
		$(this).removeClass('img-unon');
		$('#left_one').parent().siblings().children('a').removeClass('img-on');
	});

	/*$('#datetimepicker').datetimepicker('show');
	$(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii"
    });*/

	$('.form_date').datetimepicker({
		language: 'zh-CN',
		weekStart: 1,
		todayBtn: 1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
	});

});