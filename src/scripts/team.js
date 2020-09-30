(function () {
    let openItem = item => {
        let container = item.closest(".team__item");
        let contentBlock = container.find(".team__content");
        let textBlock = contentBlock.find(".team__content-block");
        let reqHeight = textBlock.height();

        container.addClass("active");
        contentBlock.height(reqHeight);
    };

    let closeAllItems = container => {
        let items = container.find('.team__content');
        let containerItems = container.find('.team__item');

        containerItems.removeClass('active');
        items.height(0);
    };

    $('.team__item-title').click(e => {
        let $this = $(e.currentTarget);
        let container = $this.closest('.team__list');

        if ($this.closest(".team__item").hasClass("active")) {
            closeAllItems(container);
        } else {
            closeAllItems(container);
            openItem($this);
        }
    });

})()