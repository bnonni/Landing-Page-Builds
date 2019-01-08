var commRiicCount=0;
function tallyReqInfoClicks() {
try {
        console.log('tally Func try entered.')
  commRiicCount+=1,
  adobe.target.trackEvent( {
    mbox:"RequestInfoInitiatedEvent",
    params: {
      RequestInfoInitiatedEvent : commRiicCount
    }
  });
    } catch(e) {
      console.log(e);
    }
}

try {
  console.log("Entered first try.")
  var button = $(document).find('div.CommunityNav__buttons > ul > li:nth-child(1)').find("button.btn.btn-default");
  button.click(function(){
    console.log("entered click function.")
    tallyReqInfoClicks()
  });
} catch(c) {
  console.log(c);
}