var isEnviarMail = null;

$(document).ready(function () {
    document.getElementById("year").innerHTML = new Date().getFullYear() ;
 /*   if (isEnviarMail == null) {
        isEnviarMail = $('#hiddenEnvioMail').val();
        if (typeof isEnviarMail == 'undefined') {
            isEnviarMail = null;
        }
    }
    if (isEnviarMail != null && isEnviarMail == 'OK') {
        $('#success').addClass('alert-success');
        $('#success').html('Se envió correctamente.');
        var elmnt = document.getElementById("contact");//services - contact
        elmnt.scrollIntoView();
        isEnviarMail = null;
    }*/
});


var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
        '<div class="modal-dialog modal-m">' +
        '<div class="modal-content">' +
        '<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
        '<div class="modal-body">' +
        '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
        '</div>' +
        '</div></div></div>');

    return {
        /**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Loading';
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            $dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
        /**
		 * Closes dialog
		 */
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);



function OnFail(ex) {
    clearContacto();
    waitingDialog.hide();

}
function clearContacto() {
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#message').val('');
}
function sendMail() {
    // $('#form1').validator();
    //$('#phone').validator();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var g_recaptcha_response = grecaptcha.getResponse();
    if (name != '' && email != '' && phone != '' && message != '') {
        waitingDialog.show('Enviando...');// setTimeout(function () { waitingDialog.hide(); }, 2000);
        PageMethods.SendMail(name, email, phone, message, g_recaptcha_response, OnCallBackSendMail, OnFail);
    }
    else {

        $('#success').removeClass('alert-success');
        $('#success').addClass('alert-danger');
        $('#success').html('Por favor, complete todos los campos.');
    }
}
function OnCallBackSendMail(args) {
    // $('#success').html('');
    $('#success').removeClass('alert-danger');
    $('#success').removeClass('alert-success');
    if (args == '2') {
        location.reload();
        //clearContacto();a
        //$('#success').addClass('alert-success');
        //$('#success').html('Se envió correctamente.');

    }
    else if (args == '1') {
        $('#success').addClass('alert-danger');
        $('#success').html('Su mensaje no se pudo enviar. Envié un mail o comuníquese por teléfono. Disculpe las molestias.');
    }
    else if (args == '0') {
        $('#success').addClass('alert-danger');
        $('#success').html('La validación del reCAPTCHA no ha sido ingresada o es incorrecta.');
    } else {
        $('#success').addClass('alert-danger');
        $('#success').html('error:' + args);
    }
    waitingDialog.hide();
}
