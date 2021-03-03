// PREDOWLOAD THE BACKGROUND IMAGE

let bgImage = new Image();
bgImage.src = '../img/bg2.jpg';

$(document).ready(() => {

    // TO THE TOP BUTTON

    let $toTop = $('.toTop');
    let duration = 250;
    $toTop.hide(duration);

    $(document).scroll(() => {
        let y = $(this).scrollTop();
        if (y > 600) {
            $toTop.show(duration);
        } else {
            $toTop.hide(duration);
        }
    });

    // REMPLACEMENT BACKGROUND

    let $img = $('.bg');

    $img.mouseover(() => {
        $('body').addClass('bg-2');
        $('body').removeClass('bg-1');
        $('body').css('transition', '250ms');
    });

    $img.mouseout(() => {
        $('body').addClass('bg-1');
        $('body').removeClass('bg-2');
        $('body').css('transition', '250ms');
    });

    // FORM

    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).removeClass('js-hide-label');
        });

        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            var $this = $(this),
                $label = $this.parent().find("label");

            switch (e.type) {
                case 'keyup': {
                    $label.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                    if ($this.val() == '') {
                        $label.removeClass('js-hide-label');
                    } else {
                        $label.addClass('js-hide-label').removeClass('js-unhighlight-label');
                    }
                } break;
                case 'focus': {
                    if ($this.val() !== '') {
                        $label.addClass('js-unhighlight-label');
                    }
                } break;
                default: break;
            }
        });
    }

    // ENVOI FORM

    $(function () {
        $('#submit').on('click', function (e) {
            e.preventDefault();

            let $form = $('#contact-form');

            if ($form.get(0).checkValidity()) {
                $.post($form.attr('action'),
                    $form.serializeArray()).done(function (data) {
                        $form.prepend(`<div class="alert alert-success">${data}</div>`);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        $form.prepend(`<div class="alert alert-danger">Une erreur est survenue.</div>`)
                    });
            } else {
                $form.get(0).reportValidity();
            }
        });
    });

});