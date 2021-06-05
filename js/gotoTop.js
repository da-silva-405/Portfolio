$(document).ready(function () {
    $("#gotoTop").hide();//ボタンを非表示にする
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) { //ページの上から100pxスクロールした時
            $("#gotoTop").fadeIn(); //ボタンがフェードインする
        } else {
            $("#gotoTop").fadeOut();//ボタンがフェードアウトする
        }
        scrollHeight = $(document).height(); //ドキュメントの高さ
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
        footHeight = $("footer").innerHeight(); //止めたい位置の高さ(今回はfooter)
        if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下の時
            $("#gotoTop").css({
                "position": "absolute", //pisitionをabsoluteに変更
            });
        } else { //それ以外の場合は
            $("#gotoTop").css({
                "position": "fixed", //固定表示
            });
        }
    });

//スムーススクロール設定
    $('#gotoTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);//スムーススクロールの速度
        return false;
    });
});