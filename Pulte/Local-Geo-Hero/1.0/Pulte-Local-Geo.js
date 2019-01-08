function trackCommunityAddressClicks(){
    try{
        console.log("trackCommAddClick:: Init tryCatch");
        adobe.target.trackEvent({
            mbox: "CommunityAddressClick"
        });
        console.log("CommunityAddressClick:: Mbox fired");
    }catch(e){console.log(e);}
};
function trackPhoneNumberClicks(){
    try{
        console.log("trackPhnNumClick:: Init tryCatch");
        adobe.target.trackEvent({
            mbox: "PhoneNumberClick"
        });
        console.log("PhoneNumberClick:: Mbox fired");
    }catch(e){console.log(e);}
};
function addSignificantActionListeners(){
    console.log("addSAListen:: Init");
  try{   
    var c=$(document).find("p.CommunitySummary-address");
    var cc=$(document).find("a.phone-number");
    $.each(c, function(c,n) {
        console.log(".eachCommunitySum:: Init");
      $(n).click(function(c) {
        trackCommunityAddressClicks();
        });
        });
    $.each(cc, function(cc,nn) {
        console.log(".eachPhnNum:: Init");
    $(nn).click(function(cc) {
        trackPhoneNumberClicks();
        });
        });    
  }catch(e){console.log(e);}
};
(function() {
    'use strict';
    var tsiTest = {
        debug : true,
        account : 'Pulte',
        portfolio : 'Pulte.com',
        test : '360i AB Local Geo Hero Test',
        creative : 'Experience B',
        heroBtn : '#home-carousel-cta',
        communityModule : "div.community.row",
        commReqInfoBtn : "button.btn.btn-default",
        commImgs : ".community.row .CommunitySummary-image img",
        communityPageNavButtons : '.CommunityNav__buttons',
        firstHouse :'',
        fhImg : '',
        fhDesc : '',
        fhDetails : '',
        fhNeighborhood : '',
        fhAddress : '',
        fhPhnNumber : '',
        fhPrice : '',
        fhSummary : '',
        fhButtonRequestInfoBtn : '',
        fhBtnViewCommunity : '',
        fhViewCommunityLink : '',
        requestInfoBtn : '',
        locName : '',
        counter : 0,
		    init : function() {
            tsiTest.log("Test Running...");
            tsiTest.log(tsiTest.account + " - " + tsiTest.portfolio);
            tsiTest.log(tsiTest.test + " - " + tsiTest.creative);
            
            addSignificantActionListeners();
            
            tsiTest.elementLoaded(tsiTest.heroBtn, function() {
                tsiTest.changeBtnToBlue();
                    tsiTest.elementLoaded('.CommunitySummary-image .owl-item', function(){
                        tsiTest.addFeaturedCommunitySection();
                });
            });
        },
        addListeners : function() {
          tsiTest.log("addListeners:: initiated");
          $(document).find(tsiTest.heroBtn).on('click', tsiTest.trackHPCTAClick);
          $(document).find('#featured-home .btn.btn-default').on('click', tsiTest.trackReqInfoClick);
        },
        removeListeners : function() {
          tsiTest.log("removeListeners:: initiated");
          $(document).find(tsiTest.heroBtn).off('click',tsiTest.trackHPCTAClick);
          $(document).find('#featured-home .btn.btn-primary').off('click', tsiTest.trackReqInfoClick);
        },
        trackHPCTAClick : function(evt) {
            try {
              adobe.target.trackEvent({
                mbox: "homepageCTAClicks"
              })
            } catch(e) {isoTest.log(e);}
        },
        //function tracks info request initiated events once clicked on the community page
        trackReqInfoClick : function(){
            try{adobe.target.trackEvent( {mbox:"requestInfoInitiatedEvent", });} catch(e) {isoTest.log(e);}
        },
        changeBtnToBlue : function() {
		      $(tsiTest.heroBtn).addClass('blue-btn');
        },
        //function to get the community's carousel images
        getCarouselImages : function(callback){
            var fhImgOwlItems = $(tsiTest.fhImg).find('.owl-item').not('.owl-item.cloned');
            tsiTest.log(fhImgOwlItems);
            var carouselItems = $(fhImgOwlItems).find('.Carousel-modalTrigger img');
            tsiTest.log(carouselItems);
            var imgArr = [];
            for (var j = 0; j < 1; j++) {
                var cImg = carouselItems[j];
                var src = $(cImg).attr('data-csrc');
                var alt = $(cImg).attr('alt');
                var t = '<img src="'+src+'" alt="'+alt+'" class="featured-home-carousel-item">';
                imgArr.push(t);
            }
            return imgArr;
        },
        //function to add in the featured community section
        addFeaturedCommunitySection : function(){
            //JS Elements
            tsiTest.firstHouse = $('.community.row').eq(0);
            tsiTest.fhDesc = $(tsiTest.firstHouse).find('.CommunitySummary-detailCopy');
            tsiTest.fhDetails = $(tsiTest.firstHouse).find('.CommunitySummary-grid');
            tsiTest.fhNeighborhood = $(tsiTest.fhDesc).find('h1').eq(0).text().trim();
            tsiTest.fhAddress = $(tsiTest.fhDesc).find('p.CommunitySummary-address');
            tsiTest.fhPhnNumber = $(tsiTest.fhAddress).next();
            tsiTest.fhPrice = $(tsiTest.fhDetails).eq(0).find('div h4').eq(0).text().trim();            
            tsiTest.fhSummary = $(tsiTest.fhDesc).find('p:last');
            tsiTest.fhBtnViewCommunity = $(tsiTest.firstHouse).find('.CommunitySummary-buttons a.btn.btn-primary')[0];
            tsiTest.fhViewCommunityLink = $(tsiTest.fhBtnViewCommunity).attr('href');
            tsiTest.fhButtonRequestInfoBtn = $(tsiTest.firstHouse).find('.CommunitySummary-buttons a.btn.btn-default')[0];
            tsiTest.requestInfoBtn = $(tsiTest.fhButtonRequestInfoBtn).clone();
            tsiTest.locName = $('.Title.container div.row').eq(0).find('h2');

            //special div
            var heroContainer = '<div id="hero-container"></div>';
            $(document).find('#carousel').before(heroContainer);
            
            //Move Carousel inside the heroContainer
            $('#hero-container').append($('#carousel'));
            
            //Append ExpB class to carousel
            $('#carousel').addClass('expB');

            var featuredHomes = '<div id="featured-homes"> \n\
            <div id="featured-home"> \n\
            <h4 class="desktop">FEATURED NEW HOME COMMUNITY IN</h4> \n\
            <h3>'+$(tsiTest.locName).text()+'</h3> \
            <h4 class="mobile">FEATURED NEW HOME COMMUNITY IN</h4> \n\
            <h3 class="neighborhood">'+tsiTest.fhNeighborhood+'</h3> \n\
            <p class="address">'+$(tsiTest.fhAddress).html()+' \n\
            '+$(tsiTest.fhPhnNumber).html()+'</p> \n\
            <div id="slideshow"></div> \n';
            if(tsiTest.fhPrice !== undefined && tsiTest.fhPrice !== '') {
                if(tsiTest.fhPrice.indexOf('$') > -1) {
                    featuredHomes += '<p class="starting-at">Starting at <span class="starting-at">'+tsiTest.fhPrice+'</span></p> \n';
                }
            }
            featuredHomes += '<p>'+$(tsiTest.fhSummary).html()+'</p> \n\
            </div> \n\
            </div>';
            
            $('#hero-container').append(featuredHomes);
            $('#featured-home').append(tsiTest.requestInfoBtn);

            //Make the neighborhood/community name clickable
            $('#featured-home h3.neighborhood').on('click',function() {
                location.href = tsiTest.fhViewCommunityLink;
            });

            $('#featured-home .btn.btn-default').removeClass('btn-default').addClass('btn-primary');
            
            try {
                tsiTest.elementLoaded('.CommunitySummary-image', function(){        
                    tsiTest.fhImg = $(tsiTest.firstHouse).find('.CommunitySummary-image');
                    //Get images from the carousel
                    var imgs = tsiTest.getCarouselImages();
                    //var fhCarousel = '<div class="Carousel owl-theme owl-carousel">';
                    var fhCarousel = '<div class="Carousel">';
                    for (var i = 0; i < imgs.length; i++) {
                        fhCarousel += imgs[i];
                    }
                    fhCarousel += '</div>';
                    $('#featured-home #slideshow').append(fhCarousel);
                    tsiTest.removeListeners();
                    tsiTest.addListeners();
                });
            } catch(e) { tsiTest.log(e); }
        },
        elementLoaded : function (ele1, callback) {
            tsiTest.log('elementLoaded::  ' + ele1 + " - Checking...");
            window.clearTimeout(tsiTest.eleTimer);
            if ((document.querySelectorAll(ele1).length > 0)) {
                if (typeof callback === 'function') {
                    tsiTest.log('elementLoaded::  ' + ele1 + " - Found!");
                    callback();
                }
            } else {
                if(tsiTest.counter <= 5){
                    tsiTest.counter++;
                    tsiTest.eleTimer = window.setTimeout(function(){tsiTest.elementLoaded(ele1,callback);}, 100);
                }else{
                  tsiTest.elementLoaded(tsiTest.communityPageNavButtons, function(){    
                    $(document).find(tsiTest.commReqInfoBtn).off('click', tsiTest.trackReqInfoClick);
                    $(document).find(tsiTest.commReqInfoBtn).on('click', tsiTest.log("onClick:: initiated"), tsiTest.trackReqInfoClick);
                  });
                }
            }
        },
        dependsLoaded : function (callback) {
            tsiTest.log(tsiTest.test + " - " + tsiTest.creative + " - dependsLoaded - Start...");

            window.clearTimeout(tsiTest.timer);
            
            //Check for jQuery and _a object
            if ((window.$ && $.isReady) || (window.jQuery && jQuery.isReady)) {
                if (typeof callback === "function") {
                    tsiTest.log(tsiTest.test + " - " + tsiTest.creative + " - dependsLoaded - Ready!");
                    callback();
                }
            } else {
                tsiTest.timer = window.setTimeout(function() { tsiTest.dependsLoaded(callback); }, 100);
            }
        },
        log : function(obj){
            if(tsiTest.debug === true){
                console.log(obj);
            }
        }
    }
    tsiTest.dependsLoaded(function(){
        tsiTest.init();
    });
})();