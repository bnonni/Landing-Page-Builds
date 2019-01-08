# RHR Test Template

## Step 1
#### Copy & Paste CSS from "Exp-C-9-FINAL.html" into a new sheet via your IDE or directly into a new Adobe Target test.
```
<style>
/*UNIVERSAL BASE PAGE STYLES - RES FORM HEADER STYLES - DO NOT CHANGE*/
    h1.vehicle-page-header {
      font-weight: 800;
      font-style: normal;
      font-size: 32px;
      text-transform: uppercase;
      line-height: 40px;
      color: #181918;
    }
    h3.vehicle-page-header {
        font-weight: 300;
        font-style: normal;
        font-size: 17px;
        margin-bottom: 1em;
        line-height: 1.3;
        letter-spacing: -0.020em;
        color: #181918;
    }
    .alpha{
      text-transform: none;
    }
/*END UNIVERSAL BASE PAGE STYLES - RES FORM HEADER STYLES - DO NOT CHANGE*/

/*DESKTOP MEDIA QUERY - NOT INVOKED UNTIL SCREEN WIDTH MEETS 1058 PX*/
@media(min-width: 1058px){
    /* Override the extra top padding for the vehicle details section */
    .band.vehicle-detail-content-band {
      padding-top: 0 !important;
    }
    /* End Override */
    .alpha{
      text-transform: none;
    }
    /*RESERVATION FORM STYLES - DESKTOP*/
    #reservationWidget {
      max-width: 1200px;
      margin: 0 auto;
    }
    #reservationWidget > div > div:nth-child(3) > div > div.cf{
      margin-left: 2%;
    }
    .reserve-widget-band {
      background: #fff;
    }
    .two-up-three-up.section{
      clear: both;
    }
    #reservationWidget > div:first-of-type {
      float: left;
      width: 53%;
    }
    .reservationWidget {
      background: #f3f3f3;
    }
    #reservationWidget .inner-container, .booking-widget, #reservationWidget .date-time-form, .booking-widget .age-input, .booking-widget .age-input #age, .coupon-field-wrapper, .booking-submit{
      width: 97%;
    }
    input#coupon.coupon-input{
      width: 60%;
    }
    .inner-container.expanded .booking-submit{
      margin-top: -70px;
    }
    .booking-widget div.arrow {
      margin: 3.5em 0% 1.5em -6%;
      padding-top: 5px;
      width: 2em;
    }
    #book > div > div.custom-select.age-input {
      width: 100%;
      margin-right: 0%;
    }
   .inner-container.expanded .booking-submit{
      width: 35%;
    }
    #book > div > div.cf.date-time-form.pickup-active{
      width: 110%;
    }
    #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf{
      width: 97%;
    }
    #pickupCalendarFocusable{
      width: 50%;
    }
    #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.pickup.label-container{
      width: 50%;
    }
    #pickupCalendarFocusable{
      width: 45%;
    }
    #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.pickup.label-container > label{
      width: 42%;
    }
    #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.dropoff.label-container{
      width: 45%
    }
    #dropoffCalendarFocusable{
      width: 50%;
    }
    #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.dropoff.label-container > label{
      width: 47%;
    }
    /*END RESERVATION FORM STYLES - DESKTOP*/

    /*RHR STYLES - DESKTOP*/
    .tsi-vehicle {
      float: right;
      width: 38%;
      margin-right: 2%;
      margin-top: 4em;
    }
    .tsi-blocks {
      margin: auto;
    }
    .tsi-block {
      text-align: center;
    }
    .tsi-block img {
      height: auto;
    } 
    /*END RHR STYLES - DESKTOP*/
  }
  /*80EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 80EM*/
    @media (max-width: 80em) {
      /*RHR STYLES SCREEN WIDTH <= 80EM*/
      .tsi-blocks {
        min-height: 0;
        padding: 0.5em;
      }
      .tsi-vehicle.category .tsi-blocks {
        margin: 0;
        border-left: 0;
      }
      /*END RHR STYLES SCREEN WIDTH <= 80EM*/
    }
    /*END 80EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 80EM*/

    /*66EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 66EM*/
    @media (max-width: 66em) {
      /*RHR STYLES SCREEN WIDTH <= 66EM*/
      #reservationWidget > div:first-of-type, .tsi-vehicle {
        width: 100%;
        clear: both;
        float: none;
        margin: 0;
      }
      .tsi-blocks {
        float: none;
        clear: both;
        width: auto;
      }
      .tsi-block {
        margin-top: 10px;
        float: none;
         width: auto;
      }
      /*END RHR STYLES SCREEN WIDTH <= 66EM*/
      /*RESERVATION FORM STYLES SCREEN WIDTH <= 66EM*/
      div.date-time-selector.cf{
        width: 100%;
      }
      .inner-container.expanded .booking-submit{
        margin-top:0;
        width: 94%;
      }
      div.booking-widget.cf > div.custom-select.age-input{
        width: 100%;
      }
      input#coupon.coupon-input {
        width: 86%;
      }
      #reservationWidget .inner-container, .booking-widget, #reservationWidget .date-time-form, .booking-widget .age-input, .booking-widget .age-input #age, .coupon-field-wrapper, .booking-submit{
        width: 80%;
      }
      .booking-widget div.arrow {
        margin: 3.5em 5px 1.5em 5px;
        padding-top: 5px;
        width: 2em;
      }
      .inner-container.expanded .booking-submit{
        width: 25%;
        margin-left: 72%;
        margin-top: -71px;
      }
      #book > div > div.cf.date-time-form.pickup-active{
        width: 98%;
      }
      #book > div > div.custom-select.age-input{
        width: 100%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf{
        width: 100%;
      }
      #book > div > div.coupon-field-wrapper > label > span{
        margin-left: 2%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.dropoff.label-container {
        width: 47%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.pickup.label-container {
        width: 47%;
      }
      /*END RESERVATION FORM STYLES SCREEN WIDTH <= 66EM*/
    }
    /*END 66EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 66EM*/

    /*SPECIFIC MEDIA QUERY FIXING RES FORM BUTTON & COUPON FIELD*/
    @media (min-width: 46.8em) and (max-width: 768px){
      .show .booking-widget .coupon-field-wrapper {
        width: 100%;
      }
      .inner-container.expanded .booking-submit {
        width: 25%;
        margin-left: 72%;
        margin-top: -83px;
      }
    }
    /*END SPECIFIC MEDIA QUERY FIXING RES FORM BUTTON & COUPON FIELD*/

    /*48EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 48EM*/
    @media (max-width: 48em){
      /*HEADER STYLES ABOVE RES FORM SCREEN WIDTH <= 48EM*/
      h1.vehicle-page-header {
        margin-left: 3%;
        margin-top: 4%;
      }
      h3.vehicle-page-header{
        margin-left: 3%;
      }
      /*END HEADER STYLES ABOVE RES FORM SCREEN WIDTH <= 48EM*/

      /*RESERVATION FORM STYLES SCREEN WIDTH <= 48EM*/
      input#coupon.coupon-input {
        width: 65%;
        margin-left: 2%;
      }
      #book > div > div.custom-select.age-input {
        width: 98%;
      }
      .booking-widget .age-input #age, .booking-widget .coupon-input #age, .booking-widget .coupon-chicklet #age {
        width: 96% !important;
      }
      #reservationWidget .inner-container, .booking-widget, #reservationWidget .date-time-form, .booking-widget .age-input, .booking-widget .age-input #age, .coupon-field-wrapper, .booking-submit{
        width: 100%;
      }
      #book > div > div.cf.date-time-form.pickup-active {
        width: 94%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.dropoff.label-container {
        width: 100%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.pickup.label-container {
        width: 100%;
      }
      /*END RESERVATION FORM STYLES SCREEN WIDTH <= 48EM*/
    }
    /*END 48EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 48EM*/

    /*46.75EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 47.65EM*/
   @media (max-width: 46.75em){
     /*RHR STYLES SCREEN WIDTH <= 46.75EM*/
    .tsi-block {
      margin-top: 0;
    }
    /*END RHR STYLES SCREEN WIDTH <= 46.75EM*/
    
    /*RESERVATION FORM STYLES SCREEN WIDTH <= 46.75EM*/
    #reservationWidget .inner-container, .booking-widget, #reservationWidget .date-time-form, .booking-widget .age-input, .booking-widget .age-input #age, .coupon-field-wrapper, .booking-submit{
      width: 100%;
    }
    #book > div > div.coupon-field-wrapper > label > span{
      margin-left: 3%;
    }
    .coupon-field-wrapper {
      float: none;
      margin-left: 0;
    }
      #reservationWidget .date-time-form {
        width: 94%;
      }
     input#coupon.coupon-input{
        margin-left: 3%;
        width: 94%;
      }
      #book > div > div.cf.date-time-form.pickup-active{
        width: 94%;
      }
      #book > div > div.custom-select.age-input{
        width: 98%;
        margin-right: 4%;
      }
      .inner-container.expanded .booking-submit{
        width: 94%;
        margin-left: 3%;
        margin-top: 0;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf{
        width: 100%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.dropoff.label-container{
        width:100%;
      }
      #book > div > div.cf.date-time-form.pickup-active > div.date-time-selector.cf > div.cf.pickup.label-container{
        width: 100%;
      }
      /*END RESERVATION FORM STYLES SCREEN WIDTH <= 46.75EM*/
    }
    /*END 46.75EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 47.65EM*/

    /*34EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 34EM*/
    @media (max-width: 34em){
       /*RHR STYLE SCREEN WIDTH <= 34EM*/
      .tsi-block {
        margin-top: 0;
        float: none;
        clear: both;
        width: auto;
      }
    }
    /*END 34EM MEDIA QUERY - INVOKED ON SCREEN WIDTHS <= 34EM*/
    </style>
```

## Step 2 
#### Copy & Paste jQuery below into a script either in your IDE or directly into a new Adobe Target test.

```javascript
//Get RHR Element to be injected into RHR section (if exists on base page)
var rhrElement = $(document).find('.selector-of-element').html().trim();

//Add RHR Element into new right hand rail section; Do Not Change any 'tsi-XXX' selectors
var rhrSection = '<section class="tsi-vehicle"><div class="tsi-blocks cf"><div class="tsi-block">'+rhrElement+'</div></div></section>';

 //Append rhr section to the reservationWidget band
$(document).find('#reservationWidget').append(rhrSection);

//Grab the headers from the base page heading and append them to the reservation widget
//Apply class so they retain their original format when they were in the base page heading band
$(document).find('#reservationWidget .inner-container .cf h2').before($(document).find('.band.vehicle-page-heading .cf .left h1').addClass('base-page-class'));
$(document).find('#reservationWidget .inner-container .cf h1').after($(document).find('.band.vehicle-page-heading .cf .left h3').addClass('base-page-class'));

//Add a class to the parent that contains the reservation widget so that we'll be able to move it easier
$(document).find('#reservationWidget').parent().addClass('new-parent-class');

//Put the reservation widget band just after the original base page heading band
$(document).find('original-base-page-band-selector').after($(document).find('new-parent-class'));

//Remove Sections we no longer need on the page
//Remove the old heading of the base page
$(document).find('.base-page-heading').remove();
//Remove the vehicle band since we no longer need it anymore
$(document).find('.selector-of-rhr-element-section').remove();

//Additional code if the headline needs to be changed
//Detect URL and change headline to reflect necessary base page
var urlHref = window.location.href;
var regex1 = /regex1/gi;
var regex2 = /regex2/gi;
tsiTest.elementToChange = regex1.test(urlHref) ? 'string if true' : regex2.test(urlHref) ? 'secondary string' : ' final checkdown string';
$(document).find('#reservationWidget h2').hide().before('<h2 class="left alpha reservation-toggle-header">Start ' + tsiTest.elementToChange + ' Reservation</h2>');
```
# Step 3
#### Use the Isobar embeded anonymous function script

```javascript
    (function() {
      'use strict';
      var tsiTest = {
        debug : false,
        account : 'Client',
        portfolio : 'Client.com',
        test : '360i_Name of Test Exp X',
        resWidget: '#reservationWidget',
        element: '',
        startAReservationHeadlineToggled: false,
        //4. enters function after depends loaded passed
        init : function() {
          tsiTest.debug = Boolean(helpers.getQueryParam('debug'));

          tsiTest.log("Test Running...");
        //5. Enters element loaded function passing the reswidget element to check for existence on page
        //passes callback function
          tsiTest.elementLoaded(tsiTest.resWidget, function() {
            tsiTest.log("Test Ready!");
            //7. Enters chall() after element loaded is passed
            tsiTest.chall();
          });
        },
        //8. Enters chall and changes base page
        chall : function() {
          //input Step 2 javascript into this section
        },
        //6. Checks for the resWidget on page
        //Callsback to the tsiTest.chall() function 
        elementLoaded : function (ele, callback) {
          tsiTest.log('elementLoaded::  ' + ele + " - Checking...");
          window.clearTimeout(tsiTest.eleTimer);
          if (document.querySelectorAll(ele).length > 0) {
            if (typeof callback === 'function') {
              tsiTest.log('elementLoaded::  ' + ele + " - Found!");
              callback();
            }
              } else {
                  tsiTest.eleTimer = window.setTimeout(function(){tsiTest.elementLoaded(ele, callback);}, 100);
              }
        },
        //2. Function checks for jQuery on page and loaded
        // Calls back to bottom to enter tsiTest.init function
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
              tsiTest.timer = window.setTimeout(function() {
                tsiTest.dependsLoaded(callback);
              }, 100);
            }
          },
        //Allows to safetly console.log for debugging
        //debug in tsiTest must be set to  : true
        log : function(obj){
          if(tsiTest.debug === true){
            console.log(obj);
          }
        }

      }

      var helpers = {
        getQueryParam: function(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split('=');
              if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
              }
            }
          },
          supplant : function(str, o) {
          return str.replace(/{([^{}]*)}/g, function(a, b) {
                var p = b.split(/\./),
                    c = o;
                for (var i = 0; i < p.length; i++) {
                  if (c[p[i]] == null)
                    return a;
                  c = c[p[i]];
                }
            return typeof c === 'string' || typeof c === 'number' ? c : a;
          });
        }
      }
//1. Initiates Test Dependency Functions
      tsiTest.dependsLoaded(function(){
        //3. callback from depends loaded function
         tsiTest.init();
      });
    })();
```

# Step 4
#### Implement full script into Adobe Target and QA
#### Understand that this is a rough template, so nuances may need to be altered to fit different tests. 
#### Be sure to include proper selectors in Step 1 CSS, replace filler variables and text Step 2 jQuery and the combine it all into step three to be implemented via Target. 