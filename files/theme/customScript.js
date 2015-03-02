//<!-- Accordion -->

var jqAccordian = jQuery.noConflict();

jQuery(document).ready(function ($) {

    jqAccordian(".accordion").each(function () {
        var $initialIndex = jqAccordian(this).attr('data-initialIndex');
        if ($initialIndex == undefined) {
            $initialIndex = 0;
        }
        jqAccordian(this).tabs("div.accordion-content", { tabs: '.accordion-title', effect: 'slide', initialIndex: $initialIndex });
    });


    //<!--tabs-->
    var jqTabs = jQuery.noConflict();


    jqTabs(".tabs-container").each(function () {
        var $history = jqTabs(this).attr('data-history');
        if ($history != undefined && $history == 'true') {
            $history = true;
        } else {
            $history = false;
        }
        var $initialIndex = jqTabs(this).attr('data-initialIndex');
        if ($initialIndex == undefined) {
            $initialIndex = 0;
        }
        jqTabs("ul.tabs", this).tabs("div.tab-content > div", { tabs: 'a', effect: 'fade', fadeOutSpeed: -200, history: $history, initialIndex: $initialIndex });
    });


    //<!-- toggle-->

    var jqToggle = jQuery.noConflict();

    var $toggles = jqToggle(".toggle-title");

    jqToggle(".toggle-content").hide();

    $toggles.toggle(function () {
        jqToggle(this).addClass('toggle-active');
        jqToggle(this).siblings('.toggle-content').slideDown("fast");
    },
        function () {
            jqToggle(this).removeClass('toggle-active');
            jqToggle(this).siblings('.toggle-content').slideUp("fast");
        });


    //<-- scroll top -->

    var $top = jQuery.noConflict();
    $top("#scroll-top").hide();

    // fade in #scroll-top
    $top(window).scroll(function () {
        if ($top(this).scrollTop() > 150) {
            $top('#scroll-top').fadeIn();
        } else {
            $top('#scroll-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $top('#scroll-top a').click(function () {
        $top('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Divider Top
    $top(".divider a.top").click(function () {
        $top('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


    //<!--Mobile Toggle-->

    var $mtog = jQuery.noConflict();

    $mtog(".nav-button").click(function () {
        $mtog(".nav-button,.my_custom_menu").toggleClass("open");
    });
});
