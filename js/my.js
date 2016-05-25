$(document).ready(function(){
	$('.menu2 li.top, .menu1').hover(
		function(e){
			if (e.pageX) {
				menu_slider.stop();
			}
			$('.menu2 li.top').removeClass('jshover');
			$(this).addClass('jshover');
		},
		function(){
		}		
	);
	$('.menu2 ul, .top_menu').hover(
		function(){
			
		},
		function(){
			menu_slider.start();
			$('li.top').removeClass('jshover');
		}		
	);
	
	//tabs init
	tabs('.tab_default');	

	$('.toggler:eq(0)').addClass( "sel" );

	f00 = $('.wraper .left .left_menu .top').height();
	$('.wraper .left .left_menu .top ul').css('height', f00-45);

	f01 = $('.wraper .left .left_menu h3').height();
	$('.wraper .left .left_menu h3').css('margin-bottom', -10-f01);
	$('.wraper .left .left_menu ul').css('padding-top', 15+f01);

	$('.wraper .left .left_menu .top ul ul').css('height', 'auto');
	$('.wraper .left .left_menu ul ul').css('padding-top', 0);
	
	
	$('.toggler').click(function(){

		var context = this;
		
		 $(".toggl_area").stop(false, true);

		if ($(this).next('.toggl_area').is(':hidden') == false) {
			return;
		}
		else {
			$('.toggl_area:visible').slideUp(200, function () {
				
				$(context).next('.toggl_area').slideDown(200);
				
			});

			$('.toggler').removeClass( "sel" );
			$(this).addClass( "sel" );
			
		}
	
	})
	

	$(".actions a[rel^='action']").click( function() {
		$(".actionItemCont:visible").slideUp();
		$("a[rel^='action']:visible").removeClass('titleCurrent');
		$(this).addClass('titleCurrent');
		$("div[id^='action']:visible").slideUp();
		$("#" + $(this).attr('rel')+":hidden").slideDown();
		return false;
	});


	$(".action a").click( function() {
		
		$( '.aCurrent').slideUp();
		$( '.aCurrent').removeClass('aCurrent');
		
		_actionCont = $( '#' + $(this).attr("rel") );

		if ( _actionCont.is(':visible') ) {
			_actionCont.slideUp();
			_actionCont.removeClass('aCurrent');
		}
		else {
			_actionCont.addClass('aCurrent');
			_actionCont.load( $(this).attr("href") + '?ajax=1', function () { _actionCont.slideDown(); });	
		}
		return false;
	});

});


function tabs(id)
{
	$(id+' li:eq(0)').addClass('active');
	
	$(id+' li a').each(function(){
		el = $(this);
		tab = el.attr('href');			
		$(tab).addClass('tab');
		
		$(id+' .tab:gt(0)').hide();	
		
		el.attr({'href':'javascript:void(0)','test':tab});
		
		el.click(function(){
			$(id+' .tab').hide();				
			$($(this).attr('test')).show();
			el= $(this).parentNode;
		})
		
		$(id+' li').click(function(){				
			$(id+' li.active').removeClass('active');
			$(this).addClass('active');
		});
		
	})			
	
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}; 


//expireDate = new Date
//expireDate.setMonth(expireDate.getMonth()+1)

function def() {
	document.body.style.fontSize = '62.5%';
	createCookie('trustFontSize', '62.5', 30);
	//document.cookie = "fontSize="+'62.5%'+";expire=" + expireDate.toGMTString()
}

function font_m() {
	document.body.style.fontSize = parseInt(document.body.style.fontSize) - 5 + "%";
	createCookie('trustFontSize', parseInt(document.body.style.fontSize), 30);
	//document.cookie = "fontSize="+parseInt(document.body.style.fontSize)+";expire=" + expireDate.toGMTString()
}

function font_p() {
	document.body.style.fontSize = parseInt(document.body.style.fontSize) + 5 + "%";
	createCookie('trustFontSize', parseInt(document.body.style.fontSize), 30);
	//document.cookie = "fontSize="+parseInt(document.body.style.fontSize)+";expire=" + expireDate.toGMTString()
}

function SubmitSearchForm( ) {
	if ( document.searchForm.searchtext.value.length > 0 && document.searchForm.searchtext.value != 'Поиск' ) {
		document.searchForm.submit( );
	}
}


$(document).ready(function () {
	
	var lock = false;
	
	$('.office A').click(function () {

		if ($(this).is('.here')) {
			$(this).next().slideUp(500);
			return false;
		}
		
		if (!lock) {

			lock = true;

			var context  = this;
			
			$('.office .here').removeClass('here');
			$('.office .child').slideUp(500);

			$(context).next().load($(context).attr("linkoffice") + '?ajax=1', function () {
				$(context).addClass('here');
				$(this).slideDown(500, function () {
					lock = false;
				});
			});
		}
		return false;
		
	});
	
})


var menu_slider = {
	
	stopSlide : false,
	speedNext : 5000,
	
	init : function () {
		
		if (!$('ul.menu2 a.here').length) {
			$('ul.menu2 .top:first').mouseover();
			setInterval(menu_slider.slide, menu_slider.speedNext);
		}
	},
	
	slide : function () {
		if (!menu_slider.stopSlide) {
			if ($('ul.menu2 .jshover').next().length) {
				$('ul.menu2 .jshover').next().mouseover();
			}
			else {
				$('ul.menu2 .top:first').mouseover();
			}
		}
	},
	
	stop : function () {
		menu_slider.stopSlide = true;
	},
	
	start : function () {
		menu_slider.stopSlide = false;
		menu_slider.slide();
	}
	
};


$(function () {
	menu_slider.init();
});

function showinvisiblefield(eTarget){
	eTarget.style.display == "none" ?
		eTarget.style.display = "block":
		eTarget.style.display = "none";
	eTarget.style.color = 'black';
}
 
function Colourchange(eSrc, sColor) {
	eSrc.style.color=sColor
}
 
function showinvisibleimage(id,chk){
    var el = document.getElementById(id);
    var ch = document.getElementById(chk);
    if (el.src.indexOf("plus.png")>0){
        el.src="minus.png"
        ch.checked="true";
    }else{
        el.src="plus.png"
        ch.checked="";
    }
}