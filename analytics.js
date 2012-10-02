// Federated Analytics Tracking Code

//check to see if an existing _gaq object exists
// if so, extend that object, otherwise create a new one
var _gaq = _gaq || [];

//create a new tracker called "dotGovTracker" and set the account ID
_gaq.push(['dotGovTracker._setAccount', 'UA-XXXX-X']);

//create a new tracker called "dotGovTracker" and set the account ID
_gaq.push(['_gat._anonymizeIp']);

//record the page view on the new account
_gaq.push(['dotGovTracker._trackPageview']);

//Conditionally load the main Google Analytics library
(function() {
  
  //if Google analytics is already loaded, 
  // don't try to load it again
  if ( typeof _gat != 'undefined' )
    return;
  
  //append the Google Analytics library to the page
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  
})();