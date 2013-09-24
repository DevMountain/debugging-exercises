$._get = function(url, callback) {
	if (!url) return;
	callback({
		results: ['Awesomeness', 'Amazing', 'Astounding', 'Congrats, you got it.']
	})
}

$(document).ready(function() {
	var masterLocation;
	var search_term = 'devmountain';
	function setupApi() {
		var masterLocation = 'http://devmounta.in?q='+search_term;		
		$(document).ajaxError(function(e, xhr, settings, thrown) {
			console.log("Ajax ERROR", xhr, settings, thrown);
		})
	}
	setupApi();
	$._get(masterLocation, function(data) {
		$.each(data.results, function(index, tweet) {
			$('#results').append('<p><span class="glyphicon glyphicon-thumbs-up"></span> '+this.tweet+'</p>');
		});
	});
});