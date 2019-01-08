//purchaseFrequency
if(mbox.name == "orderConfirmPage"){
 return (user.get("user70_purchaseFrequency") || 0) + 1;
}

//numVisits
user.numVisits;
if(user.sessionId != user.getLocal("lastSessionId")) {
   user.setLocal("lastSessionId", user.sessionId);
   return (user.get("numVisits") || 0) + 1;
}

user.numVisits;
if(user.numVisits == 1){
 return typeof(user.get('numVisits')) == 1;
}else if(user.numVisits > 1 && user.numVisits < 10){
 return user.get('numVisits') > 1 && user.get('numVisits') < 10;
}else if(user.numVisits >= 10 && user.numVisits < 20){
 return user.get('numVisits') >= 10 && user.get('numVisits') < 20;
}else if(user.numVisits >= 20){
 return user.get('numVisits') >= 20;
}else{
 return typeof(user.get('numVisits')) == 'undefined';
}


//getGeo
return profile.geolocation.city;

//highestOrder
user.mostSpent
if (mbox.name == "orderConfirmPage") {
   var orderTotal = parseInt(mbox.param("orderTotal"));
   if (orderTotal > user.get("mostSpent")) {
      return orderTotal;
   }
}