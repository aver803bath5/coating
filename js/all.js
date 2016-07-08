function hoversubmenu(hovered_selection,submenu){
	$(hovered_selection).hover(function(event) {
			$(this).children(submenu).slideDown(200);
		},function(event){
			$(this).children(submenu).slideUp(200);
	});
};

$(document).ready(function($){
	hoversubmenu('#introduction','#sub_introduction');
	hoversubmenu('#workprice','#sub_workprice');
	hoversubmenu('#noncrystallization','#sub_noncrystallization');
	hoversubmenu('#crystallization','#sub_crystallization');
	hoversubmenu('#car_glass','#sub_car_glass');
	hoversubmenu('#profession_article','#sub_profession_article');
	hoversubmenu('#announcement','#sub_announcement');
	hoversubmenu('#example','#sub_example');
	hoversubmenu('#sub_example','#sub_noncrystallization');
	hoversubmenu('#branches','#sub_branches');
	hoversubmenu('#appointment','#sub_appointment');
});
