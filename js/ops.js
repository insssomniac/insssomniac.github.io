const sections = $("section");
const display = $(".main-content");
const sideMenu = $(".fixed-menu");

let inScroll = false;

const countSectionPos = (sectionEq) => {
    return sectionEq * -100;
};

const sideMenuSetActivePoint = (sectionEq) => {
    sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("active").siblings().removeClass("active");
}

const sectionSetActive = (sectionEq) => {
    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
}

const performTransition = (sectionEq) => {
    if (inScroll) return;

    const transitionOver = 300;
    const mouseInertiaOver = 500;

    inScroll = true;
    const position = countSectionPos(sectionEq);

    display.css({
        transform: `translateY(${position}%)`
    });

    sectionSetActive(sectionEq);
    sideMenuSetActivePoint(sectionEq);

    setTimeout(() => {
        inScroll = false;
    }, transitionOver + mouseInertiaOver);
};

const viewportScroller = () => {
    let activeSection = sections.filter(".active");
    let nextSection = activeSection.next();
    let prevSection = activeSection.prev();

    return {
        next() {
            if (nextSection.length) {
                performTransition(nextSection.index());
            }
        },
        prev() {
            if (prevSection.length) {
                performTransition(prevSection.index());
            }
        }
    };
};

sections.first().addClass("active");
sideMenu.find(".fixed-menu__item").first().addClass("active");

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewportScroller();

    if (deltaY < 0) {
        scroller.prev();
    }

    if (deltaY > 0) {
        scroller.next();
    }
});

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    const userInInputs = tagName === "input" || tagName === "textarea";
    const scroller = viewportScroller();

    if (userInInputs) return;

    switch (e.keyCode) {
        case 38:
            scroller.prev();
            break;

        case 40:
            scroller.next();
            break;
    }
});

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    let $this = $(e.currentTarget);
    let target = $this.attr("data-scroll-to");
    let reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
});



















