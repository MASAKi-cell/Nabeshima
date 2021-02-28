//$('head').append( //===ページ開示時のアニメーション設定===

$(function(){ //=======フェードインの設定=======
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){ //エフェクト開始時間の追加
				$(this).addClass('scrollin'); //scrollinの追加
			}
		});
	});
});

$(function(){　//===ハンバーガーメニューの設定===
	$(".bar-gnavi").on("click", function(){
		var rightVal = 0;
		if($(this).hasClass("open")) {
			rightVal = -300;
			$(this).removeClass("open");
		} else {
			$(this).addClass("open");
		}
		$(".menu-gnavi").stop ().animate({
			right: rightVal
		}, 200);
	});
});

let swipeOption = new Swiper ('.swiper-container', {//====スライダーの設定====<strong></strong>
  loop: true, //ループの指定
  effect: "fade",  //フェードの指定
  autoplay: {
    delay: 6000, //6秒後に次のスライドへ
    disableOnInteraction: false, //ユーザー側で操作してもスライドを止めない
  },
  speed: 3000, //２秒かけてフェードで切り替わる
  pagination: { //丸型のページネーション
    el: '.swiper-pagination',
    clickable: true,
  }
});


$(function(){ //=======mapの設定=======
	function initMap() { //mapの色情報を設定
		var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

    var pos = {lat: 35.6873887, lng: 139.8246627}; //位置（緯度、経度）の設定
    var opts = {
		zoom: 15, //拡大率の設定
		styles,
		center: new google.maps.LatLng(pos)
		//google.maps.LatLngクラスを使用して、中心地の座標をposに格納された位置に設定
    };
		var map = new google.maps.Map(document.getElementById("map"), opts);
		//google.maps.Mapクラスを使用して地図の表示領域をHTML要素のmap-wrapperに設定
		var marker = new google.maps.Marker({ //google.maps.Markerを使用してマーカーを表示
			position: pos, //経度と緯度の設定
			map: map //地図の情報の設定
		 }
		);
	 }
	initMap(); //関数の実行
});
