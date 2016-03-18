jQuery(document).ready(function($) {

    $('#fullpage').fullpage({
        anchors: ['MainNav', 'Team', 'About'],
        scrollingSpeed: 800,
        scrollOverflow: true,
        scrollBar: false,
        touchSensitivity: 15,
        navigationTooltips: ['Navigation', 'Team', 'About'],
        afterRender: function() {
            $('video').get(0).play();
        }

    });

    var isLateralNavAnimating = false;
    $('.nav-trigger').on('click', function(event) {
        event.preventDefault();

        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

                isLateralNavAnimating = false;
            });
        }
    });

    $(function() {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $("body").addClass("safari");
        }
    });

    $('.navigation-wrapper').find('li').click(function() {

        console.log($(this).index());
    });
});