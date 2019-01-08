var adIdCopyObj, urlParams, adidParam, dynamic_copy; //variable definition

//Dictionary object (JSON) with Ad Id's and corresponding ad copy
adIdCopyObj = {"adid" : {
  112342352346 : "Copy431",
  112342352347 : "Copy2", 
  112342352348 : "Copy3"
            }
          };

//looks for the ? and everything after it in the URL
urlParams = new URLSearchParams(window.location.search);
adidParam = "adid";

//if the URL query params contains "adid" then...
if(urlParams.has(adidParam)){
  q = urlParams.get(adidParam); //store the ad id #
  dynamic_copy = adIdCopyObj.adid[q]; //go into the dictionary, and look up that ad id and return the corresponding copy
  $('#coupon-text > a').html(dynamic_copy); //add that copy to the page in the #coupon-text location
}