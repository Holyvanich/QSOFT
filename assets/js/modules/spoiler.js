const ELEMENTS_SELECTOR = {
    spoiler: '[data-spoiler]',
    button: '[data-spoiler-toggle]',
    content: '[data-spoiler-content]',
}

export default function spoiler() {

    $(ELEMENTS_SELECTOR.button).each(function() {
        let $parent = $(this).closest(ELEMENTS_SELECTOR.spoiler);

        if ($parent.hasClass('spoiler__item--opened')) {
            $parent.removeClass('spoiler__item--opened');
        }
    })

    $(document).on('click', ELEMENTS_SELECTOR.button, function () {
        const $parent = $(this).closest(ELEMENTS_SELECTOR.spoiler);
        const $content = $parent.find(ELEMENTS_SELECTOR.content);

        $parent.toggleClass('spoiler__item--opened');
        $content.slideToggle();
    });
}
