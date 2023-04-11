$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $(".header-menu").toggleClass('panelactive');
    $(".header-menu ul").toggle(100)
});

$(".header-menu-item a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header-menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    $(".header-menu ul").hide()
});