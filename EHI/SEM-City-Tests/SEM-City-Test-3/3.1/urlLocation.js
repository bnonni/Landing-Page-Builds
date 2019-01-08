(function (){
 'use strict';
 var query, city, state, url;
 query = window.location.search;
 url = window.location.href;
 cityObj = {
  'mobile' :	'al' , 'phoenix' :	'az' , 'tucson' :	'az' , 'san diego' :	'ca' , 'los angeles' :	'ca' , 'san francisco' :	'ca' , 'fresno' :	'ca' , 'sacramento' :	'ca' , 'denver' :	'co' , 'miami' :	'fl' , 'orlando' :	'fl' , 'tampa' :	'fl' , 'jacksonville' :	'fl' , 'fort myers' :	'fl' , 'atlanta' :	'ga' , 'savannah' :	'ga' , 'honolulu' :	'hi' ,
'maui' :	'hi' , 'chicago' :	'il' , 'louisville' :	'ky' , 'new orleans' :	'la' , 'boston' :	'ma' , 'st louis' :	'mo' , 'jackson' :	'ms' , 'charlotte' :	'nc' , 'wilmington' :	'nc' , 'raleigh' :	'nc' , 'omaha' :	'ne' , 'albuquerque' :	'nm' , 'las vegas' :	'nv' , 'reno' :	'nv' , 'albany' :	'ny' , 'brooklyn' :	'ny' , 'columbus' :	'oh' , 'tulsa' :	'ok' , 'oklahoma city' :	'ok' , 'portland' :	'or' , 'columbia' :	'sc' , 'charleston' :	'sc' , 'greenville' :	'sc' , 'nashville' :	'tn' , 'memphis' :	'tn' , 'knoxville' :	'tn' , 'houston' :	'tx' , 'san antonio' :	'tx' , 'austin' :	'tx' , 'dallas' :	'tx' , 'el paso' :	'tx' , 'richmond' :	'va' ,'seattle' :	'wa' ,};
for(i=0; i < cityObj.length; i++){
  if(query.has(cityObj[i])){
   city = city[i];
   cityURL = "https://www.enterprise.com/en/car-rental/locations/us/"+state+"/"+city+".html" + query;
   window.location.href = cityURL;
   exit();
   }
  }
 })();