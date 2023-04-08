$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
  });

  // ハンバーガー
  $(".header_hamburger").click(function () {
    $(".line").toggleClass("active");
    $(".header_hamburger_contents").toggleClass("active");
    $(".header_hamburger_contents_modal").toggleClass("active");
  });
});

// ふわっと出る
$(function () {
  $(window).scroll(function () {
    $(".feature_itemList").each(function () {
      var top = $(this).offset().top; //要素の高さ
      var scroll = $(window).scrollTop(); //スクロール位置
      var height = $(window).height(); //windowの高さ
      if (scroll > top - height + 100) {
        $(this).addClass("scrolin");
      }
    });
  });
});

// セクションへの移動
//すべてのaタグのhrefに#がついているもの
const anchors = document.querySelectorAll('a[href^="#"]');
// headerの高さを取得
const headerHeight = document.querySelector("header").offsetHeight;
//URLのアンカーを取得
const urlHash = location.href;

for (let i = 0; i < anchors.length; i++) {
  //各アンカーにクリックイベント
  anchors[i].addEventListener("click", function (event) {
    //デフォルトのクリックイベントを無効化
    event.preventDefault();

    //各anchorのhref属性の値を取得
    const href = anchors[i].getAttribute("href");

    //topに戻る以外のアンカー
    if (href !== "#top") {
      //スクロール先の要素を取得
      //アンカーのリンク先#を取り除いた名前と一致するIDの取得
      const target = document.getElementById(href.replace("#", ""));

      //スクロール先の要素の位置を取得
      //headerの高さをマイナス
      const position =
        window.pageYOffset + target.getBoundingClientRect().top - headerHeight;

      //スクロールアニメーション
      window.scroll({
        //スクロール先の要素の上までスクロール
        top: position,

        //スクロールアニメーション
        behavior: "smooth",
      });

      //topに戻る
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}
