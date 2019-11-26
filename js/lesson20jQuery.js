// jQuery

// jQuery(document).ready(function () {/*code here*/});

// ИЛИ ТАК

jQuery(function () {
	/*code here*/

	// jQuery("*");
	// jQuery("любой css-селектор");
	// let elem  =document.getElementNyId("info");
	// jQuery(elem);
	// jQuery(element).method1().method2();
	jQuery("#table tr:even").css("background","orange");
	jQuery("#table tr:odd").css("background", "yellow");

	jQuery("#cards div").last().css("color", "blue")
		.end()
		.first().css("color","lime");

	jQuery("#cards div").each((index, elem) => {
		console.log(index + ": " + elem.dataset.present);
	});

	jQuery("#cards div").filter((index, elem) => elem.dataset.present === "cat") // вернет тру или фолс
		.css("background", "pink");

	jQuery("nav li").has("ul").css("background", "grey");

	jQuery("li").children(".submenu1")
		.each((index, elem) =>{
		console.log(elem.innerText)
	});

	jQuery("#table").attr("border", 1);
	console.log(jQuery("#table").attr("border"));
	jQuery("#table").removeAttr("border");

	jQuery("#cards div").each(() => { // СТРЕЛОЧНАЯ ФУНКЦИЯ НЕ ИМЕЕТ THIS
		console.log(this);           // => КОНТЕКСТ ТЕРЯЕТСЯ
	});

	jQuery("#cards div").each(function() {
		console.log(this.dataset.present);
		// ИЛИ
		console.log(jQuery(this).data("present"));
	});

	// ТО ЖЕ САМОЕ, ТОЛЬКО БЕЗ jQUERY
	document.querySelectorAll("#cards div").forEach((item, index, arr) => {
		console.log(item.dataset.present);
	});


	// CSS - СТИЛИ
	console.log(jQuery("#cards").css("font-size"));
	jQuery("p").css(
		{color: "green",
		padding: "5px"});

	

	jQuery("h2").css("color", function (ind, oldVal) {
		console.log(oldVal);
		if (oldVal === "rgb(0,0,0)") {return "red"} 
		else {return "blue"};
	});

	// ВЫСОТА И ШИРИНА
	console.log(jQuery("#cards").width());
	console.log(jQuery("#cards").height(200));

	jQuery("#cards div").first().addClass("border margin");
	console.log(jQuery("#cards div").first().hasClass("border"));
	jQuery("#cards div").first().removeClass("border");
	jQuery("#cards div").first().toggleClass("border");

	jQuery("#cards").each(function() {
		console.log(jQuery(this).html());
		jQuery(this).html("<span>BOOO!!!</span>");
	});

	jQuery("#cards").each(function() {
		console.log(jQuery(this).text());
	});

	jQuery("#cards").html(function(ind, oldVal) {
		return oldVal + "<div data-present = 'rabbit'> Новое значение</div>"
	});

	jQuery(".images").append("<div>Новая преновая строка</div>");
	//jQuery(".images").replaceWith()
	//jQuery(".images").remove()

	// СОБЫТИЯ
	jQuery("#info div").bind("click", function () {
		$(this).css("background", "yellow");
	});

	// удаление
    // jQuery('#info div').unbind();
    // однократное событие
    jQuery('#info div').one('click', function () {
            console.log("one click")
        });

    jQuery('body')
        .on('click', '#info div', function () {
            console.log(jQuery(this).text());
        });
    jQuery('body').off();
    jQuery('body').off('click', '#info div');

    jQuery('#info h2').click(function () {
        $(this).siblings().toggle('fast');
        // $(this).siblings().hide();
        // $(this).siblings().show();
    });


});