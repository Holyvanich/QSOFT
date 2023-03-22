import validate from "jquery-validation";

const ELEMENTS_SELECTOR = {
    validation: '[data-validation]',
}

$.extend($.validator.messages, {
    required: 'Обязательное поле',
    email: 'E-mail указан неверно',
});

$.validator.setDefaults({
    errorClass: 'input--wrong',
    validClass: 'input--valid',
    errorElement: 'span',

    errorPlacement: function(error, element) {
        error.addClass('input__message-wrong');

        error.appendTo(element.closest('.input__wrapper'))
    },
});

$.validator.addClassRules('js-email', {
    email: true,
});

$.validator.addClassRules('js-required', {
    required: true,
});

export default function() {
    $(ELEMENTS_SELECTOR.validation).validate();
}