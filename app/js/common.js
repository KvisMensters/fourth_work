$(function() {

	$(document).ready(function(){
	  $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true
	  });
	});
	
	$('.info_item').equalHeights();
	
	//START TOggle
	var theToggle = document.getElementById('toggle');

	// based on Todd Motto functions
	// http://toddmotto.com/labs/reusable-js/

	// hasClass
	function hasClass(elem, className) {
	  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	// addClass
	function addClass(elem, className) {
	  if (!hasClass(elem, className)) {
	    elem.className += ' ' + className;
	  }
	}
	// removeClass
	function removeClass(elem, className) {
	  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	  if (hasClass(elem, className)) {
	    while (newClass.indexOf(' ' + className + ' ') >= 0) {
	      newClass = newClass.replace(' ' + className + ' ', ' ');
	    }
	    elem.className = newClass.replace(/^\s+|\s+$/g, '');
	  }
	}
	// toggleClass
	function toggleClass(elem, className) {
	  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
	  if (hasClass(elem, className)) {
	    while (newClass.indexOf(" " + className + " ") >= 0) {
	      newClass = newClass.replace(" " + className + " ", " ");
	    }
	    elem.className = newClass.replace(/^\s+|\s+$/g, '');
	  } else {
	    elem.className += ' ' + className;
	  }
	}

	theToggle.onclick = function() {
	  toggleClass(this, 'on');
	  $(".main_mnu").slideToggle();
	  return false;
	}
	//END TOggle


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
