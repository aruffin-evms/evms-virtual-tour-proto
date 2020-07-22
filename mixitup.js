// Initialize checkboxFilter code
checkboxFilter.init();
// Instantiate MixItUp      
$('#mixitup-container').mixItUp({
  controls: {
    enable: false // we won't be needing these
  },
  animation: {
    animateResizeTargets: true
  },
  layout: {
    containerClass: 'mixitup-container'
  },
  load: {
    filter: qryString
  }
});

// look at query string for pre-filters
var qryString = window.location.href;
var qryStringIndex = qryString.indexOf('filter=');
if (qryStringIndex > 0) {
	qryString = qryString.slice(qryStringIndex + 1, qryString.length);
	qryString = qryString.indexOf('&') > 0 ? qryString.slice(6, qryString.indexOf('&')) : qryString.slice(6, qryString.length);
	var aryQryString = qryString.split(",");
	var value = "", selector = "";
	for (var i = 0; i < aryQryString.length; i++) {
		selector = 'input[value="' + aryQryString[i] + '"]';
		$(selector).attr('checked', 'checked');
	}
} else {
	qryString = 'all';
}
