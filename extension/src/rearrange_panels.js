/*global PTT:false */

PTT.onOptionsLoaded(function(options) {
   // Only load this tool if the user has not disabled it.
   if (! options.rearrangePanels) {
      console.log('Rearranging of Panels has been disabled');
      return;
   }

   // Wait for the DOM to be ready prior to starting this script
   // - We also wait for some extra time to ensure the plugin setup finds the
   //   DOM in the correct state;
   $().ready(setTimeout(setupRearrange, 500));

   /********************************************************************
    * The rest of this script was copied from the below projet.  The intent is to
    * allow the user to drag and drop panels inside of the pivotal display.
    *
    * https://chrome.google.com/webstore/detail/rearrange-panels-in-pivot/opjidnmongipncgdeggklmjihpmjollh
    */

   function setupRearrange() {
	   console.log("Rearrange Panels in Pivotal Tracker: Loading.");

	   // Prevent the title text from being slected
	   $('table#layout div.panelHeaderLeft').disableSelection();
	   $('table#layout div.panelHeaderRight').disableSelection();
	   $('table#layout div.panelHeader').disableSelection();

	   // TODO: Load order from local storage

	   // Set the panels to be re-arranged
	   $('table#layout').sortable({
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
});
