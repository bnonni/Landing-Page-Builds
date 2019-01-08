(function (){
 'use strict';
 console.log('Entered redirect');
 var query, variable, helpers, url, brandURL, cityRE, obj, city, underScore, state, cityURL;
 query = window.location.search.substring(1);
 url = window.location.href;
 brandURL = 'https://www.enterprise.com/en/car-rental/campaigns/enterprise-cars.html' + query;
 obj = {'mobile' :	'al', 'phoenix' :	'az', 'tucson' :	'az', 'san-diego' :	'ca', 'los-angeles' :	'ca', 'san-francisco' :	'ca', 'fresno' :	'ca', 'sacramento' :	'ca', 'denver' :	'co','miami' :	'fl', 'orlando' :	'fl', 'tampa' :	'fl', 'jacksonville' :	'fl', 'fort-myers' :	'fl', 'atlanta' :	'ga', 'savannah' :	'ga', 'honolulu' :	'hi', 'maui' :	'hi', 'chicago' :	'il', 'louisville' :	'ky', 'new-orleans' :	'la', 'boston' :	'ma', 'st-louis' :	'mo', 'jackson' :	'ms', 'charlotte' :	'nc', 'wilmington' :	'nc', 'raleigh' :	'nc','omaha' :	'ne', 'albuquerque' :	'nm', 'las-vegas' :	'nv', 'reno' :	'nv', 'albany' :	'ny', 'brooklyn' :	'ny', 'columbus' :	'oh', 'tulsa' :	'ok', 'oklahoma-city' :	'ok', 'portland' :	'or', 'columbia' :	'sc', 'charleston' :	'sc', 'greenville' :	'sc', 'nashville' :	'tn', 'memphis' :	'tn', 'knoxville' :	'tn', 'houston' :	'tx', 'san-antonio' :	'tx', 'austin' :	'tx', 'dallas' :	'tx', 'el-paso' :	'tx', 'richmond' :	'va','seattle' :	'wa'};
try{
 //Check to see if the URL is the brand lander
 if(window.location.href === brandURL){
   console.log('Searching query: ' + query);
   //Reduce the size of our lookup
  
   var vars = query.split('&');
   for (var i = 0; i < vars.length; i++) {
     var pair = vars[i].split('=');
     if (decodeURIComponent(pair[0]) == variable) {
     variable = decodeURIComponent(pair[1]);
     }
    }
   //Check to see if one of our cities is in the query
   if(cityRE.test(variable)){
     //Define the city as the RegEx match;
     //[0] -> using this because .match() returns an array, so this allows us to take the first item in the array which is always the city name
     //Cast the match as a String()
     city = String(query.match(cityRE)[0]);

     //If the city has an _ in it, replace that with a -
     city = city.replace('_', '-');
     console.log('Found city: ' + city);
     //Search the JSON for the value attached to the key city and store it
     state = obj[city];
     console.log('You\'re in: ' + state);
     //Create the redirect URL by placing the city var and state var into the base structure + the query
     cityURL = 'https://www.enterprise.com/en/car-rental/locations/us/'+state+'/'+city+'.html' + query;
     console.log('URL built' + cityURL);
     console.log('Redirecting');
     //Redirect to the City Page
     window.location.replace(cityURL);
   }
 }
}catch(e){
 console.log(e);
 }
})();
