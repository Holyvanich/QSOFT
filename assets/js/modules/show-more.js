const ELEMENTS_SELECTOR = {
    spoiler: '[data-showMore]',
    button: '[data-showMore-toggle]',
    content: '[data-showMore-content]',
    title: '[data-showMore-title]'
}

export default function showMore() {

    $(ELEMENTS_SELECTOR.button).each(function() {
        let $parent = $(this).closest(ELEMENTS_SELECTOR.spoiler);

        if ($parent.hasClass('show-more__item--opened')) {
            $parent.removeClass('show-more__item--opened');
        }
    })

    $(document).on('click', ELEMENTS_SELECTOR.button, function () {
        const $parent = $(this).closest(ELEMENTS_SELECTOR.spoiler);
        const $content = $parent.find(ELEMENTS_SELECTOR.content);
        const $title = $parent.find(ELEMENTS_SELECTOR.title);

        if (!$parent.hasClass('show-more__item--opened')) {
            $title.text('Скрыть');
        }
        else {
            $title.text('Показать еще');
        }
        $parent.toggleClass('show-more__item--opened');
        $content.slideToggle();
    });
}
