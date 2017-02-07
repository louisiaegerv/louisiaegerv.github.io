$(document).ready(function () {
    // Hide Header on on scroll down
    let didScroll = false;
    let lastScrollTop = 0;
    const delta = 50;
    let navbarHeight = $('header').outerHeight();
    let aboutOffset = $('#about').offset().top;
    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        let clickNav = localStorage.getItem('clickNav');
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 400);

    function hasScrolled() {
        const st = $(this).scrollTop();
        localStorage.setItem('clickNav', 'false');
        setHeaderBG();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        }
        else {
            // When user scrolls up, nav comes down
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
    const setHeaderBG = () => {
        if ($(document).scrollTop() >= aboutOffset) {
            $('header').removeClass('headerTransparent').addClass('headerColored');
        }
        else if ($(document).scrollTop() < aboutOffset - navbarHeight) {
            $('header').removeClass('headerColored').addClass('headerTransparent');
        }
    }
});