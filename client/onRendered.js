Template.index.rendered = function () {
    var revapi;
    revapi = jQuery('.tp-banner').revolution({
        delay:9000,
        startwidth:1140,
        startheight:600,
        hideThumbs:200,

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:2,


        simplifyAll:"off",

        navigationType:"bullet",
        navigationArrows:"solo",
        navigationStyle:"round",

        touchenabled:"on",
        onHoverStop:"on",
        nextSlideOnWindowFocus:"off",

        swipe_threshold: 0.7,
        swipe_min_touches: 1,
        drag_block_vertical: false,

        keyboardNavigation:"off",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:20,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,

        shadow:0,
        fullWidth:"on",
        fullScreen:"off",

        spinner:"spinner3",

        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,

        shuffle:"off",

        autoHeight:"off",
        forceFullWidth:"on",


        hideTimerBar:"on",
        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,
        hideBulletsOnMobile:"on",
        hideArrowsOnMobile:"on",
        hideThumbsUnderResolution:0,

        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        startWithSlide:0
    });
    jQuery('.shortcode_tabs').each(function (index) {
        var i = 1;
        jQuery('.shortcode_tab_item_title').each(function (
            index) {
            jQuery(this).addClass('it' + i);
            jQuery(this).attr('whatopen', 'body' + i);
            jQuery(this).addClass('head' + i);
            jQuery(this).parents('.shortcode_tabs').find(
                '.all_heads_cont').append(this);
            i++;
        });
        var i = 1;
        jQuery('.shortcode_tab_item_body').each(function (
            index) {
            jQuery(this).addClass('body' + i);
            jQuery(this).addClass('it' + i);
            jQuery(this).parents('.shortcode_tabs').find(
                '.all_body_cont').append(this);
            i++;
        });
    });

    jQuery('.shortcode_tabs .all_body_cont div:first-child')
        .addClass('active');
    jQuery(
        '.shortcode_tabs .all_heads_cont div:first-child').addClass(
        'active');

    jQuery('.shortcode_tab_item_title').click(function () {
        jQuery(this).parents('.shortcode_tabs').find(
            '.shortcode_tab_item_body').removeClass('active');
        jQuery(this).parents('.shortcode_tabs').find(
            '.shortcode_tab_item_title').removeClass('active');
        var whatopen = jQuery(this).attr('data-open');
        jQuery(this).parents('.shortcode_tabs').find('.' +
            whatopen).addClass('active');
        jQuery(this).addClass('active');
    });
    /* Tabs */

    /* Tooltip  */
    jQuery(function ($) {
        $('.tooltip_s').tooltip()
    });
    /* Tooltip  */

    /* Animation */
    $(window).scroll(function () {
        $(".animated-area").each(function () {
            if ($(window).height() + $(window).scrollTop() -
                $(this).offset().top > 0) {
                $(this).trigger("animate-it");
            }
        });
    });
    $(".animated-area").on("animate-it", function () {
        var cf = $(this);
        cf.find(".animated").each(function () {
            $(this).css("-webkit-animation-duration",
                "0.9s");
            $(this).css("-moz-animation-duration", "0.9s");
            $(this).css("-ms-animation-duration", "0.9s");
            $(this).css("animation-duration", "0.9s");
            $(this).css("-webkit-animation-delay", $(this).attr(
                "data-animation-delay"));
            $(this).css("-moz-animation-delay", $(this).attr(
                "data-animation-delay"));
            $(this).css("-ms-animation-delay", $(this).attr(
                "data-animation-delay"));
            $(this).css("animation-delay", $(this).attr(
                "data-animation-delay"));
            $(this).addClass($(this).attr("data-animation"));
        });
    });
    /* Animation */

    /* Counter Number */
    (function($) {
        $.fn.countTo = function(options) {
            options = options || {};

            return $(this).each(function() {
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);
                render(value);
                function updateTimer() {
                    value += increment;
                    loopCount++;
                    render(value);
                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }
                    if (loopCount >= loops) {
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }
                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };
        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 0, // the number the element should end at
            formatter: formatter, // handler for formatting the value before rendering
            onUpdate: null, // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };
        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));
    var count = 0;
    var datanumber;

    if ($(window).width() > 479) {
        $('.number-counter').bind('inview', function(event, visible) {
            if (visible === true & count === 0) {
                count++;
                $('.number-counter').each(function() {
                    datanumber = $(this).attr('data-number'),
                        $(this).find('.number-count').delay(6000).countTo({
                            from: 0,
                            to: datanumber,
                            speed: 1000,
                            refreshInterval: 40
                        });
                });
            } else {
            }
        });
    } else {
        $('.number-count').each(function() {
            $(this).html($(this).parent().attr('data-perc'))
        })
    }
};
Template.signup.rendered = function () {
    $('input[type=email]').addClass('txt');
    $('button[type=submit]').addClass('txtRegister');
};
Template.signin.rendered = function () {
    $('input[type=email]').addClass('txt');
    $('button[type=submit]').addClass('txtRegister');
};

//pulling data into update form
Template.updateCompRegProfile.rendered = function () {
    var CompRegProfHasData = CompanyRegistrationProfiles.findOne({"companyRegProOwner": Meteor.userId()});
    if (CompRegProfHasData){
        Session.set("updateCompRegDoc", CompRegProfHasData._id);

    }
};
Template.updatePrincipalPlaceOfBusiness.rendered = function () {
   var PrincipalBusinessHasData = PrincipalPlaceOfBusiness.findOne({"prPlaBusinessOwner": Meteor.userId()});
    if (PrincipalBusinessHasData){
        Session.set("updatePrincBusDoc", PrincipalBusinessHasData._id);

    }
};
Template.updateCompanyPostalAddress.rendered = function () {
    var compPostAddHasData = CompanyPostalAddress.findOne({"postAddOwner": Meteor.userId()});
    if (compPostAddHasData){
        Session.set("updatecompPostAddDoc", compPostAddHasData._id);

    }
};
Template.updateDirectorsParticulars.rendered = function () {
    var directorPartHasData = DirectorParticulars.findOne({"dirPartOwner": Meteor.userId()});
    if (directorPartHasData){
        Session.set("updateDirectorPartDoc", directorPartHasData._id);

    }
};
Template.updateSecretarysParticulars.rendered = function () {
    var secretaryPartHasData = CompanySecretary.findOne({"secOfCompOwner": Meteor.userId()});
    if (secretaryPartHasData){
        Session.set("updateSecretaryPartDoc", secretaryPartHasData._id);

    }
};
Template.updateCorporateSecretarysParticulars.rendered = function () {
    var corpSecretaryPartHasData = CorporateSecretarys.findOne({"corpsecOwner": Meteor.userId()});
    if (corpSecretaryPartHasData){
        Session.set("updateCorpSecretaryPartDoc", corpSecretaryPartHasData._id);

    }
};
Template.updateCompanyAuditor.rendered = function () {
    var compAuditorHasData = CompanyAuditors.findOne({"auditorOwner": Meteor.userId()});
    if (compAuditorHasData){
        Session.set("updateCompAuditorDoc", compAuditorHasData._id);

    }
};
Template.updateCompanyCapitalDetails.rendered = function () {
    var capitalDetailsHasData = CapitalDetails.findOne({"capitalDetOwner": Meteor.userId()});
    if (capitalDetailsHasData){
        Session.set("updateCapitalDetailsDoc", capitalDetailsHasData._id);

    }
};
Template.updateCompanyDirectorSignature.rendered = function () {
    var dirSignHasData = DirectorSignature.findOne({"dirSignOwner": Meteor.userId()});
    if (dirSignHasData){
        Session.set("updateDirSignDoc", dirSignHasData._id);

    }
};
Template.updateCompanySecretarySignature.rendered = function () {
    var secSignHasData = SecretarySignature.findOne({"secSignOwner": Meteor.userId()});
    if (secSignHasData){
        Session.set("updateSecSignDoc", secSignHasData._id);

    }
};
Template.updateSmeDetails.rendered = function () {
    var smeDetailsHasData = SmeDetails.findOne({"smeDetOwner": Meteor.userId()});
    if (smeDetailsHasData){
        Session.set("updatesmeDetailsDoc", smeDetailsHasData._id);

    }
};
    
Template.pieChart.rendered = function () {
        var all = BookKeepingIncomes.find({bookKeepingIncomesOwner: Meteor.userId()}).fetch()
        var pi = []
        var fig = 0
        

        for (var i = 0; i < all.length; i++) {
            fig = parseInt(all[i].amount)
            figLabel =  all[i].typeOfIncome
            element = {"figureLabel": fig,"figure": fig}
            pi.push(element)
        };

        data = pi
        pie = d3.layout.pie().value( function(d) {return d.figure})
        // define radius and area of pie
        var w = 300;
        var h = 300;
    
        var outerRadius = w / 2
        var innerRadius = w / 3;
        // Create arc
        var arc = d3.svg.arc()
                        .innerRadius(innerRadius)
                        .outerRadius(outerRadius);

        
        // create svg elements
        var svg = d3.select("#pie")
                    .attr('width', w)
                    .attr('height', h);

        Deps.autorun(function(){
            // create arcs based on dataset
                // set up groups
            var arcs = svg.selectAll("g.arc")
                          . data(pie(data));
            // append 
            arcs.enter()
                .append("g")
                .attr("class", "arc")
                .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");
                
            // draw arc paths
            var color = d3.scale.category10();  // make arc visible
            
            arcs.append('path')
               .attr('fill', function(d, i){
                    return color(i);
                })
               .attr("d", arc);

            // add labels for each wedge
            arcs.append("text")
                .attr('transform', function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                 })
                .attr('text-anchor', 'middle')
                .text(function(d) {
                    return d.value
                })  
            
        });
}; 
