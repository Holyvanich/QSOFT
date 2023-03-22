const ELEMENTS_SELECTOR = {
    email: '[data-placeholder-email]',
    phone: '[data-placeholder-phone]',
}

export default function placeholder() {
    $(document).on('focus blur', ELEMENTS_SELECTOR.email, function () {
        let focusPlaceholder = $(this).attr('data-placeholder-email'), 
            placeholder = $(this).attr('placeholder');

        $(this).attr('placeholder', focusPlaceholder);
        $(this).attr('data-placeholder-email', placeholder);
    });

    $(document).on('focus blur', ELEMENTS_SELECTOR.phone, function () {
        let focusPlaceholder = $(this).attr('data-placeholder-phone'), 
            placeholder = $(this).attr('placeholder');

        $(this).attr('placeholder', focusPlaceholder);
        $(this).attr('data-placeholder-phone', placeholder);
    });
}