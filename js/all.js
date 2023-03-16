$(document).ready(function () {

    // 圖片切換效果(內容圖片消失、顯示背景圖片)
    $('.link-hover').on('mouseover', function () {
        $(this).parent().siblings('.bg-img').children().animate({ opacity: 0 }, 100);
        // $(this).parent('.card').children('.img-fade').animate({ opacity: 0 }, 100);
    });
    $('.link-hover').on('mouseout', function () {
        $(this).parent().siblings('.bg-img').children().animate({ opacity: 1 }, 100);
    });

});