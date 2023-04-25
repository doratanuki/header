$(function(){
    $(".openbtn").on("click",function(){
        $(this).toggleClass('active');
        $(".header-menu").toggleClass('panelactive');

        if ($(".openbtn").hasClass('active')) {
            $(".header-menu-background").on("click",function(){
                $(".openbtn").removeClass('active');
                $(".header-menu").removeClass('panelactive');
            })
        }
    });

    $(".header-menu-item").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $(".header-menu").removeClass('panelactive');
    });
});