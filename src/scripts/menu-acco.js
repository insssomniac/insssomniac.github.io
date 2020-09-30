(function () {
    let menuAccoOpenItem = item => {
        let container = item.closest(".menu-acco__item");

        container.addClass("active");
    };

    let menuAccoCloseItems = container => {
        let containerItems = container.find(".menu-acco__item");

        containerItems.removeClass('active');
    };

    $(".menu-acco__trigger").click(e => {
        let $this = $(e.currentTarget);
        let container = $this.closest(".menu-acco");
        e.preventDefault();

        if ($this.closest(".menu-acco__item").hasClass("active")) {
            menuAccoCloseItems(container);
        } else {
            menuAccoCloseItems(container);
            menuAccoOpenItem($this);
        }
    });

    $(".menu-acco__close-menu").click(e => {
        let $this = $(e.currentTarget);
        let container = $this.closest(".menu-acco");
        e.preventDefault();

        menuAccoCloseItems(container);
    });

})()