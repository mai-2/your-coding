new WOW().init();

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    centeredSlides : true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
    },
    
    breakpoints: {
        767: {
            slidesPerView: 3.5,
            spaceBetween: 56,            
        }
    },
});

// googleform
let $form = $( '#js-form' )
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理
          $form.slideUp() 
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp() 
            $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
}); 

//   formの入力確認
let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea' ).on( 'change', function() {
    if(
        $( '#js-form input[type="text"]' ).val() !== "" &&
        $( '#js-form input[type="email"]' ).val() !== "" &&
        $( '#js-form input[name="entry.430178407"]' ).prop( 'checked' ) === true
    ) {
    //   全て入力された時
    $submit.prop( 'disabled', false );
    } else {
        //   入力されていない時
        $submit.prop( 'disabled', true );
    }
});

// アコーディオン
$( '.faq-box_q' ).on( 'click', function() {
    $(this).next().slideToggle();
} )

// smoothscroll
$('a[href^="#"]').on('click', function() { // #から始まるURLがクリックされた時
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
});

// ハンバーガーメニュー

if($(window).width() < 768) {
    $( '.burger-btn' ).on( 'click', function() {
        $( '.burger-btn' ).toggleClass( 'close' );
        $( '.nav-wrapper' ).fadeToggle(500);
        $( 'body' ).toggleClass( 'noscroll' );
    });
    $( '.nav-items a[href]' ).on( 'click', function(e) {
        $( '.burger-btn' ).trigger( 'click' );
    });
}
