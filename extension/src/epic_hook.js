/*global PTT:false, inject_script:false */

PTT.onOptionsLoaded(function(options) {

   // Only load this tool if the user has not disabled it.
   if (! options.epicOverrides) {
      console.log('Epic Overrides plugin has been disabled');
      return;
   }

   console.log('Loading Epic Overrides plugin.');

   // --- INJECT SCRIPTS --- //
   // TODO:
   // - Add option to split the epic overrides into two
   // - OR determine way to pass options into the injected script as arguments
   //
   inject_script('epic_overrides.js');

   /*
   var last_nodes = [],
       // nodes is a NodeList which the browser takes care to keep up to date
       // for us.  This makes the interval call very fast since we do not need
       // to do any DOM calls when nothing changes.
       nodes = document.getElementsByClassName('panel epic_stories');

   setInterval(function() {
      var new_nodes = Array.prototype.slice.call(nodes);

      if (new_nodes.length > 1) {
         // A new epic was opened so close any old ones
         _.each(last_nodes, function(node) {
            $('.closePanel', node)[0].click();
         });
      }
      last_nodes = new_nodes;
   }, 100);
   */

});