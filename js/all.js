$(document).ready(function () {

    // 圖片切換效果(內容圖片消失、顯示背景圖片)
    $('.link-hover').on('mouseover', function () {
        $(this).parent().siblings('.bg-img').children().animate({ opacity: 0 }, 100);
    });
    $('.link-hover').on('mouseout', function () {
        $(this).parent().siblings('.bg-img').children().animate({ opacity: 1 }, 100);
    });

    // list hover 顯示隱藏文字
    $('.list-hover').on('mouseover', function () {
        $(this).children('span').removeClass('list-hide');
        $(this).children('span').addClass('list-show');

        $(this).addClass('transform');
    });
    $('.list-hover').on('mouseout', function () {
        $(this).children('span').removeClass('list-show');
        $(this).children('span').addClass('list-hide');

        $(this).removeClass('transform');
    });
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()