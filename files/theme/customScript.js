//<!-- Accordion -->

var jqAccordian = jQuery.noConflict();

jQuery(document).ready(function ($) {

    var MOBILEBREAKPOINT = 480;

    if ($(window).width() <= MOBILEBREAKPOINT) {
      create_acc_from_tabs();
    }

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

/* CREATE ACCORDIAN FROM EXISTING TABS */
function create_acc_from_tabs() {
    $(".tabs-container").each(function () {
      if($(this).next().hasClass('accordion') != true) {
        content_obj     = new Object;
        content_item_id = 0;
        div_acc         = $('<div>').addClass('accordion');
        tabs_container  = $(this);

        $(tabs_container).find('div.tab-content > div').each(function() {
          content_obj[content_item_id] = $(this).html();

          content_item_id++;
        });

        content_item_id = 0;

        $(tabs_container).find('ul.tabs > li > a').each(function() {
          div_acc.append($('<h2>').addClass('accordion-title').text($(this).text()));
          div_acc.append($('<div>').addClass('accordion-content').append(content_obj[content_item_id]));

          content_item_id++;
        });

        $(this).append(div_acc);
      }
    });
}
/* CREATE ACCORDIAN FROM EXISTING TABS */