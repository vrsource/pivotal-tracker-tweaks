// Copied from:
//   https://chrome.google.com/webstore/detail/rearrange-panels-in-pivot/opjidnmongipncgdeggklmjihpmjollh
//
$(function() {
	// Make sure that everything is in place first.  I know, using a time delay is a hack, but I've not done enough digging to do this right.
	setTimeout("setupRearrange();", 500);
});

function setupRearrange() {
	console.log("Rearrange Panels in Pivotal Tracker: Loading.");
	
	// Prevent the title text from being slected
	jQuery('table#layout div.panelHeaderLeft').disableSelection();
	jQuery('table#layout div.panelHeaderRight').disableSelection();
	jQuery('table#layout div.panelHeader').disableSelection();
	
	// TODO: Load order from local storage
	
	// Set the panels to be re-arranged
	jQuery('table#layout').sortable({
		items: 'td',
		axis: 'x',
		containment: 'parent',
		cancel: 'div.list, div.list *, div.panelHeader > div > *',
		update: function (event, ui) {
			// TODO: save order into local storage.
		}
	});
	
	// TODO: Add reset option
	
	
	console.log("Rearrange Panels in Pivotal Tracker: Loaded.");
};
