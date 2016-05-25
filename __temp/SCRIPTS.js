/* placeholder */
function placeholder(){
	$('[placeholder]').placeholder();
}
/* placeholder end */

/* custom inputs */
function customInputs(objBlockInput){
	if(objBlockInput.length){
		var inp = ':text, :password, textarea, input[type="email"], input[type="search"]';
		objBlockInput.on('click', function(){
			var self = $(this);
			var curInp = self.find(inp).not('[disabled]');
			if (curInp.length){
				self.addClass('focus');
				curInp.trigger('focus');
			}
		});
		objBlockInput.on('click, focus', inp, function(e){
			$(e.delegateTarget).addClass('focus');
		});
		objBlockInput.on('blur', inp, function(e){
			$(e.delegateTarget).removeClass('focus');
		});
	}
}
/* custom inputs end */

/*add ui position add class*/
function addPositionClass(position, feedback, obj){
	removePositionClass(obj);
	obj.css( position );
	obj
		.addClass( feedback.vertical )
		.addClass( feedback.horizontal );
}
/*add ui position remove class*/
function removePositionClass(obj){
	obj.removeClass('top');
	obj.removeClass('bottom');
	obj.removeClass('center');
	obj.removeClass('left');
	obj.removeClass('right');
}


function vmiddleBottom(obj){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find('img').height();
		var marg = bl_h - img_h;
		bl.find('img').css('margin-top', marg);
	});
}
function vmiddle(obj){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find('img').height();
		var marg = (bl_h/2) - (img_h/2);
		bl.find('img').css('margin-top', marg);
	});
}
function vmiddleObject(obj, img){
	$(obj).each(function(){
		var bl = $(this);
		var bl_h = bl.height();
		var img_h = bl.find(img).height();
		var marg = (bl_h/2) - (img_h/2);
		bl.find(img).css('margin-top', marg);
	});
}

/* yandexMap */
function yandexMap(){
	if ( $('.map').length ) {
		$('.map').each(function(index){
			var obj = $(this);
			var objIndex = index + 1;
			var className = obj.attr('class');
			obj.attr('id', 'map-'+objIndex);
			var id = obj.attr('id');
			var latitude = obj.data('latitude');
			var longitude = obj.data('longitude');
			var zoom = obj.data('zoom');
			//console.log(objIndex);
			ymaps.ready(function () {
				// Create map
				var myMap = new ymaps.Map(id, {
					center: [latitude, longitude],
					zoom: zoom,
					scrollwheel: false
				});
				myPlacemark = new ymaps.Placemark([latitude, longitude], {
					hintContent: 'Name',
					help_hint: 'Name',
					balloonContent: '<div>Name</div>'
				});
				// Add buttons and placemarks
				myMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});
				myMap.geoObjects.add(myPlacemark);
			});

		});
	}
}

/*

 // html
 <!-- Yandex map -->
 <script src="http://api-maps.yandex.ru/2.0/?load=package.standard&mode=debug&lang=ru-RU" ></script>

 <!-- location map -->
 <div class="location-map" data-latitude="55.53560415" data-longitude="37.57455153" data-zoom="16"></div>
 <!-- location map end -->

 // css
 .map{
 height: 250px;
 background: #ebebe1;
 }

 */

/* Yandex map multi balloons */
function yandexMapMulti(){
	var placemartArray = {
		'stadium': {
			'left': 49.980702,
			'right': 36.261555,
			'title': 'stadium',
			'icon': 'img/balloons/balloon-01.png'
		},
		'museum': {
			'left': 49.980149,
			'right': 36.279065,
			'title': 'museum',
			'icon': 'img/balloons/balloon-02.png'
		},
		'hotel':{
			'left': 49.966864,
			'right': 36.28988,
			'title': 'hotel',
			'icon': 'img/balloons/balloon-03.png'
		}
	}
	if ( $('.map').length ) {
		$('.map').each(function(index){
			var obj = $(this);
			var objIndex = index + 1;
			var className = obj.attr('class');
			obj.attr('id', 'map-'+objIndex);
			var id = obj.attr('id');
			var left = obj.data('left');
			var right = obj.data('right');
			var title_placemark = obj.data('title');
			var zoom = obj.data('zoom');
			ymaps.ready(function () {
				// Create map
				var myMap = new ymaps.Map(id, {
					center: [left, right],
					zoom: zoom,
					scrollwheel: false
				});
				stadium = new ymaps.Placemark([placemartArray.stadium.left, placemartArray.stadium.right], {
					hintContent: placemartArray.stadium.title,
					help_hint: placemartArray.stadium.title,
					balloonContent: '<div>'+placemartArray.stadium.title+'</div>'
				}, {
					iconImageHref: placemartArray.stadium.icon,
					iconImageSize: [31, 38],
					iconImageOffset: [-16, -37]
				});
				museum = new ymaps.Placemark([placemartArray.museum.left, placemartArray.museum.right], {
					hintContent: placemartArray.museum.title,
					help_hint: placemartArray.museum.title,
					balloonContent: '<div>'+placemartArray.museum.title+'</div>'
				}, {
					iconImageHref: placemartArray.museum.icon,
					iconImageSize: [22, 55],
					iconImageOffset: [-9, -51]
				});
				hotel = new ymaps.Placemark([placemartArray.hotel.left, placemartArray.hotel.right], {
					hintContent: placemartArray.hotel.title,
					help_hint: placemartArray.hotel.title,
					balloonContent: '<div>'+placemartArray.hotel.title+'</div>'
				}, {
					iconImageHref: placemartArray.hotel.icon,
					iconImageSize: [34, 46],
					iconImageOffset: [-16, -46]
				});
				// Add buttons and placemarks
				myMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});
				myMap.geoObjects.add(stadium);
				myMap.geoObjects.add(museum);
				myMap.geoObjects.add(hotel);
			});

		});
	}
}
/* Yandex map multi balloons end */

/* yandexMap end */

/* googleMap */
function googleMap(){
	if ( $('.map').length ){
		var map = $('.map');
		var left = map.data('left');
		var right = map.data('right');
		var zoom = map.data('zoom');
		// coordinates for placemark
		var markPosition = new google.maps.LatLng(left, right);
		function initialize() {
			// map option
			var mapOptions = {
				zoom: zoom,
				center: new google.maps.LatLng(left, right),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				overviewMapControl: true,
				scrollwheel: false
			};
			// define google map
			map = new google.maps.Map(document.getElementById('map'),
				mapOptions);
			// placemark option
			var mapIcon = 'img/map-pin.png';
			var marker = new google.maps.Marker({
				position: markPosition,
				map: map,
				title: 'Name',
				icon: mapIcon
			});
			var infowindow = new google.maps.InfoWindow();
			infowindow.setContent('<div class="infobox"><h2>Name</h2>'
				+ '<span>address</span>'
				+ '</div>');
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}
		// init map
		google.maps.event.addDomListener(window, 'load', initialize);
	}
}
/* googleMap end */

/* хтмл Гугл карты */

/*
 <!-- inclued googl map -->
 <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>

 <!-- map -->
 <div id="map" class="map" data-zoom="18" data-right="24.752584" data-left="59.436409"></div>
 <!-- map end -->
 */

/* хтмл Гугл карты end */

/*------------------------------ -----*/
/*----------- default map ------------*/
/*------------------------------ -----*/

/* googleMap */
/*
 function googleMap(){
 if ( $('#map').length ) {
 var map;
 // coordinates for placemark
 var fl = new google.maps.LatLng(48.154922, 38.923453);
 function initialize() {
 // map option
 var mapOptions = {
 zoom: 17,
 scrollwheel: false,
 center: new google.maps.LatLng(48.154922, 38.923453),
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 // define google map
 map = new google.maps.Map(document.getElementById('map'),
 mapOptions);
 // placemark option
 var marker = new google.maps.Marker({
 position: fl,
 map: map
 });
 }
 // init map
 google.maps.event.addDomListener(window, 'load', initialize);
 }
 }
 /*
 /* googleMap end */

/* хтмл Гугл карты */

/*
 <!-- inclued googl map -->
 <script type="text/javascript" src="http://maps.google.com/maps/api/js"></script>

 <!-- map -->
 <div class="map" id="map"></div>
 <!-- map end -->
 */

/* хтмл Гугл карты end */

/*rating*/
function rating(){
	if( $('.stars a').length ) {
		$('.stars a').each(function(){
			// hover
			$(this).hover(function(){
				var ths = $(this);
				var index = ths.index();
				ths.addClass('hover').siblings(':lt('+index+')').addClass('hover');
			}, function(){
				var ths = $(this);
				var index = ths.index();
				ths.removeClass('hover').siblings(':lt('+index+')').removeClass('hover');
			});
			// click
			$(this).on('click', function(e){
				var ths = $(this);
				var index = ths.index();
				var ind_mark = index+1;
				ths.removeClass('click').siblings().removeClass('click');
				ths.addClass('click').siblings(':lt('+index+')').addClass('click');
				ths.parents('.stars').siblings('.set-mark').html('('+ind_mark+')');
				e.preventDefault();
			});
		});
	}
}
// *********** IF CHECKED FULL STAR *************
// html
/*
 <div class="stars-rating">
 <div class="stars">
 <div>
 <a href=""></a>
 <a href=""></a>
 <a href=""></a>
 <a href=""></a>
 <a href=""></a>
 </div>
 </div>
 <em class="set-mark"></em>
 </div>
 */

// css
/*
 / stars rating /
 .stars-rating{padding: 10px 0 0;}
 .stars {
 vertical-align:middle;
 width:115px;
 height:20px;
 background:url(../img/sp-icons-stars.png) 0 0 no-repeat;
 position:relative;
 }
 .stars span {
 position:absolute;
 left:0px;
 top:0px;
 height:20px;
 background:url(../img/sp-icons-stars.png) 0 -40px no-repeat;
 }
 .stars div {
 overflow:hidden;
 width: 120px;
 }
 .stars a {
 float:left;
 height:20px;
 width:23px;
 background:none;
 }
 .stars a.hover,
 .stars a.click {
 background:url(../img/sp-icons-stars.png) 0 -40px no-repeat;
 }
 / stars rating end /
 */

/*rating end*/

/* stars */
function stars(){
	var wrap = $('.stars');
	var rate = wrap.find('span');
	var fullW = wrap.width();
	rate.each(function(){
		var $this = $(this);
		var defW = (parseInt($this.css('width')) / fullW) * 100;
		$this.css('width', defW+'%');
		$this.attr('data-def-width', defW);
	});
	wrap.on('mousemove', function(e){
		var $this = $(this);
		var rate = $this.find('span');
		var offset = $this.offset();
		var posX = (e.pageX - offset.left);
		var moveW = (posX / fullW) * 100;
		rate.css('width', moveW);
	});
	wrap.on('click', function(e){
		var $this = $(this);
		var rate = $this.find('span');
		var w = parseInt(rate.css('width'));
		$this.addClass('new-edit');
		rate.data('def-width', w);
		e.preventDefault();
	});
	wrap.on('mouseleave', function(e){
		var $this = $(this);
		var rate = $this.find('span');
		var defW = rate.data('def-width');
		rate.css('width', defW+'%');
		var offset = $this.offset();
		var posX = (e.pageX - offset.left);
	});
}

// *********** IF CHECKED PIECE OF STAR *************

/* stars end */

/* datepicker */
function datepicker() {
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3C;Пред',
		nextText: 'След&#x3E;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
			'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	$('.date-from').datepicker({
		minDate:0,
		dateFormat: 'dd.mm.yy',
		onClose: function( selectedDate ) {
			if(selectedDate) {
				var maxDate = selectedDate.split('.');
				if (maxDate[1] != 12){
					maxDate[1]++;
				} else {
					maxDate[1] = 1;
					maxDate[2]++;
				}
				maxDate = maxDate.join('.');
				$(this).parents('.datepickers').eq(0).find('.date-to').datepicker( 'option', 'minDate', selectedDate );
			}
		}
	});

	$('.date-to').datepicker({
		minDate:0,
		dateFormat: 'dd.mm.yy',
		onClose: function( selectedDate ) {
			if(selectedDate) {
				$(this).parents('.datepickers').eq(0).find('.date-from').datepicker( 'option','maxDate', selectedDate );
			}
		}
	});
}
/* datepicker End */

/* Fancybox */
function fancybox(){
	/*example popups*/
	var popup = $('.popup-open');
	if (popup.length) {
		popup.fancybox({
			wrapCSS: 'fancybox-popup',
			padding: 0,
			openEffect: 'none',
			closeEffect: 'none'
		});

		$('body').on('click', '.jq-close-popup', function(e){
			$(this).parents('.fancybox-wrap').find('.fancybox-close').trigger('click');
			e.preventDefault();
		})
	}

	if ($('.photo-gallery-list').length) {
		$('.fancybox-gallery')
			.attr('data-fancybox-group', 'photo-gallery')
			.fancybox({
				openEffect: 'none',
				closeEffect: 'none'
			});
	}
}
/* Fancybox End */

/* loadList */
function loadList(){
	$('.jq-show-list').each(function(){
		var list = $(this);
		var showItem = list.data('show-item');
		var slideItem = list.data('slide-item');
		var showItemIndex = showItem - 1;
		list
			.find('li:gt('+showItemIndex+')')
			.hide(0)
			.addClass('hidden');
		list
			.parents('.jq-show-container')
			.find('.jq-show-more')
			.on('click', function(e){
				var toShow = list.find('li.hidden:lt('+slideItem+')');
				toShow.slideDown().removeClass('hidden');
				if ( list.find('li.hidden').length ) {} else {
					$(this).hide(0);
				}
				e.preventDefault();
			});
	});
}

/*
 <div class="jq-show-container">
 <ul class="jq-show-list" data-show-item="18" data-slide-item="3">
 <li>
 ........
 </li>
 </ul>
 <a href="#" class="jq-show-more">Показать еще</a>
 </div>
 */

/* loadList */

/* tabs */
function tabs() {
	var tabWrap = $('.tabs-wrap');
	if (!tabWrap) { return; }

	/*скрыть неактивные табы*/
	tabWrap.each(function () {
		var thisTabWrap = $(this);
		var activeControlIndex = thisTabWrap.first('.tab-controls-list').find('li.active').index();
		var tab = thisTabWrap.children('.tabs').children('.tab');
		tab.fadeOut(0).eq(activeControlIndex).fadeIn(0);
	});

	/*по клику скрываем все табы и показываем активный*/
	$('.tab-controls-list').on('click', 'a', function (e) {
		var current = $(this);
		/*если таб активный, функиця клика отменяется*/
		if (current.parent('li').hasClass('active')) {
			e.preventDefault();
			return;
		}

		var index = current.parent().index();
		current.closest('li').addClass('active').siblings().removeClass('active');
		var tab = current.closest('.tabs-wrap').children('.tabs').children('.tab');
		tab.fadeOut(0);
		var currentTab = tab.eq(index);
		currentTab.fadeIn(0);

		e.preventDefault();
	});
}
/* tabs end */

/* UI Multiselect */
// HTML
/*
 <div class="select-holder">
 <label class="hide-element" for="some-id">Choose Country</label>
 <select class="cselect" placeholder="Выберите опцию" id="some-id">
 <option>Опция 1</option>
 <option>Опция 2</option>
 <option>Опция 3</option>
 <option>Опция 4</option>
 </select>
 </div>

 // all.css
 .hide-element{ display: none; }
 .select-holder {
 position:relative;
 width:100%;
 }
 .select-holder .cselect {width:100%;}
 */

/*
 // add ui position add class
 function addPositionClass(position, feedback, obj){
 removePositionClass(obj);
 obj.css( position );
 obj
 .addClass( feedback.vertical )
 .addClass( feedback.horizontal );
 };
 // add ui position remove class
 function removePositionClass(obj){
 obj.removeClass('top');
 obj.removeClass('bottom');
 obj.removeClass('center');
 obj.removeClass('left');
 obj.removeClass('right');
 };
 */

function customSelect(select){
	if ( select.length ) {
		selectArray = new Array();
		select.each(function(selectIndex, selectItem){
			var placeholderText = $(selectItem).attr('data-placeholder');
			var flag = true;
			if ( placeholderText === undefined ) {
				placeholderText = $(selectItem).find(':selected').html();
				flag = false;
			}
			var classes = $(selectItem).attr('class');
			selectArray[selectIndex] = $(selectItem).multiselect({
				header: false,
				height: 'auto',
				minWidth: 50,
				selectedList: 1,
				classes: classes,
				multiple: false,
				noneSelectedText: placeholderText,
				show: ['fade', 100],
				hide: ['fade', 100],
				create: function(event){
					var button = $(this).multiselect('getButton');
					var widget = $(this).multiselect('widget');
					button.wrapInner('<span class="select-inner"></span>');
					button.find('.ui-icon').append('<i class="arrow-select"></i>')
						.siblings('span').addClass('select-text');
					widget.find('.ui-multiselect-checkboxes li:last')
						.addClass('last')
						.siblings().removeClass('last');
					if ( flag ) {
						$(selectItem).multiselect('uncheckAll');
						$(selectItem)
							.multiselect('widget')
							.find('.ui-state-active')
							.removeClass('ui-state-active')
							.find('input')
							.removeAttr('checked');
					}
				},
				selectedText: function(number, total, checked){
					var checkedText = checked[0].title;
					return checkedText;
				},
				position: {
					my: 'left top',
					at: 'left bottom'
				}
			});
		});
		$(window).resize(selectResize);
	}
}
function selectResize(){
	if ( selectArray.length ) {
		$.each(selectArray, function(i, el){
			var checked = $(el).multiselect('getChecked');
			var flag = true;
			if ( !checked.length ) {
				flag = false
			}
			$(el).multiselect('refresh');
			if ( !flag ) {
				$(el).multiselect('uncheckAll');
				$(el)
					.multiselect('widget')
					.find('.ui-state-active')
					.removeClass('ui-state-active')
					.find('input')
					.removeAttr('checked');
			}
			$(el).multiselect('close');
		});
	}
}
/* UI Multiselect End */

/* checkbox/radibuttom */
function checkbox(){
	$('.def-ch').checkbox({
		cls:'jquery-checkbox'
	});
	$('.def-radio').checkbox({
		cls:'jquery-radiobox'
	});
}
/* checkbox/radibuttom end */

/* show content */
function showContent(){
	$('.collection .show-all a').on('click', function(e){
		var cur = $(this);
		if ( cur.hasClass('open') ) {
			cur.html('Показать полное описание <span class="arrow-double-bottom"></span> ');
		} else {
			cur.html('Скрыть полное описание <span class="arrow-double-top"></span> ');
		}
		cur.toggleClass('open');
		cur.parents('.collection').find('.more-text').slideToggle('slow');
		e.preventDefault();
	});
}
/* show content end */

/*multi accordion*/
(function ($) {
	var MultiAccordion = function (settings) {
		var options = $.extend({
			collapsibleAll: false,
			animateSpeed: 300,
			resizeCollapsible: false
		}, settings || {});

		this.options = options;
		var container = $(options.accordionContainer);
		this.$accordionContainer = container; //блок с аккордеоном
		this.$accordionItem = $(options.accordionItem, container); //непосредственный родитель сворачиваемого элемента
		this.$accordionEvent = $(options.accordionEvent, container); //элемент, по которому производим клик
		this.$collapsibleElement = $(options.collapsibleElement); //элемент, который сворачивается/разворачивается
		this._collapsibleAll = options.collapsibleAll;
		this._animateSpeed = options.animateSpeed;
		this.$totalCollapsible = $(options.totalCollapsible);//элемент, по клику на который сворачиваются все аккордены в наборе
		this._resizeCollapsible = options.resizeCollapsible;//флаг, сворачивание всех открытых аккордеонов при ресайзе

		this.modifiers = {
			active: 'active',
			current: 'current'
		};

		this.bindEvents();
		this.totalCollapsible();
		this.totalCollapsibleOnResize();

	};

	MultiAccordion.prototype.totalCollapsible = function () {
		var self = this;
		self.$totalCollapsible.on('click', function () {
			self.$collapsibleElement.slideUp(self._animateSpeed);
			self.$accordionItem.removeClass(self.modifiers.active);
			self.$accordionItem.removeClass(self.modifiers.current);
		})
	};

	MultiAccordion.prototype.totalCollapsibleOnResize = function () {
		var self = this;
		$(window).on('resize', function () {
			if(self._resizeCollapsible){
				self.$collapsibleElement.slideUp(self._animateSpeed);
				self.$accordionItem.removeClass(self.modifiers.active);
			}
		});
	};

	MultiAccordion.prototype.bindEvents = function () {
		var self = this,
				modifiers = this.modifiers,
				animateSpeed = this._animateSpeed,
				accordionContainer = this.$accordionContainer,
				anyAccordionItem = this.$accordionItem,
				collapsibleElement = this.$collapsibleElement;

		self.$accordionEvent.on('click', function (e) {
			var current = $(this);
			var currentAccordionItem = current.closest(anyAccordionItem);

			if (!currentAccordionItem.has(collapsibleElement).length){
				return;
			}

			e.preventDefault();

			if (current.parent().prop("tagName") != currentAccordionItem.prop("tagName")) {
				current = current.parent();
			}

			if (current.siblings(collapsibleElement).is(':visible')){
				currentAccordionItem.removeClass(modifiers.active).find(collapsibleElement).slideUp(animateSpeed);
				currentAccordionItem.removeClass(modifiers.current);
				currentAccordionItem.find(anyAccordionItem).removeClass(modifiers.active).removeClass(modifiers.current);
				return;
			}


			if (self._collapsibleAll){
				var siblingContainers = $(accordionContainer).not(current.closest(accordionContainer));
				siblingContainers.find(collapsibleElement).slideUp(animateSpeed);
				siblingContainers.find(anyAccordionItem).removeClass(modifiers.active).removeClass(modifiers.current);
			}

			currentAccordionItem.siblings().removeClass(modifiers.active).find(collapsibleElement).slideUp(animateSpeed);
			currentAccordionItem.siblings().removeClass(modifiers.current);
			currentAccordionItem.siblings().find(anyAccordionItem).removeClass(modifiers.active).removeClass(modifiers.current);

			currentAccordionItem.addClass(modifiers.active);
			current.siblings(collapsibleElement).slideDown(animateSpeed);
		})
	};

	window.MultiAccordion = MultiAccordion;
}(jQuery));

function multiAccordionInit() {
	if($('.nav__list').length){
		new MultiAccordion({
			accordionContainer: '.nav__list',
			accordionItem: 'li',
			accordionEvent: 'a',
			collapsibleElement: '.nav-drop, .nav-sub-drop',
			animateSpeed: 200
		});
	}
}
/*multi accordion end*/

/* footer at bottom */
function footerBottom(){
	var footer = $('.footer');
	var footerOuterHeight = footer.outerHeight();
	footer.css({
		'margin-top': -footerOuterHeight
	});
	$('.spacer').css({
		'height': footerOuterHeight
	});
}
/*
 !!!!!!! <div class="spacer"></div> insert after <main></main> !!!!!!!
 */
/* footer at bottom end */

/*equalHeight*/
function equalHeightInit(){
	$('.class').equalHeight({
		amount: 3
	});
}
var bonusesList = $('.resources-list');
bonusesList.find('.resource-img').equalHeight({
	amount: 5,
	useParent: true,
	parent: bonusesList,
	resize: true
});
bonusesList.find('.resources-item').equalHeight({
	amount: 5,
	useParent: true,
	parent: bonusesList,
	resize: true
});
/*equalHeight end*/

/** ready/load/resize document **/

$(document).ready(function(){
	customInputs($('.input-wrapper'));
	placeholder();
	yandexMap();
	yandexMapMulti();
	googleMap();
	rating();
	stars();
	datepicker();
	fancybox();
	loadList();
	tabs();
	customSelect($('select.cselect'));
	checkbox();
	showContent();
	equalHeightInit();
	multiAccordionInit();

	//initial function "naveFunction" after loaded all images in "className"
	$('.className').imagesLoaded( function() {
		nameFunction();
	});


	$( ".datepicker-inline" ).datepicker();
});
$(window).load(function(){
	footerBottom();
})
;$(window).resize(function(){
	footerBottom();
});