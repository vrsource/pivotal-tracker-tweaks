/*global $:false */
/* exported inject_script */

console.log('PT Tweaks Loading');

/**
* Helper method to inject scripts into a page.
*/
function inject_script(scriptFile) {
   var s = document.createElement('script');
   s.src = chrome.extension.getURL(scriptFile);
   s.onload = function() {
      this.parentNode.removeChild(this);
   };
   (document.head||document.documentElement).appendChild(s);
}

// Code to inject immediately
// todo: get this loaded as part of configuration
inject_script('epic_overrides.js');


(function(exports) {
   function App() {
      this.options         = null;
      this._optionWatchers = [];
   }

   _.extend(App.prototype, {
      start: function() {
         var me = this;
         chrome.extension.sendRequest(
            { name: "getOptions" },

            function(data) {
               // Store the options list
               me.options = data;

               // Notify all listeners
               _.each(me._optionWatchers, function(handler) {
                  handler(data);
               });

               // Clear the handler list
               me._optionWatchers = null;
            }
         );
      },

      onOptionsLoaded: function(handler) {
         if (! this.options) {
            this._optionWatchers.push(handler);
         }
         else {
            handler(this.options);
         }
      }
   });

   var extension = exports.PTT = new App();
   $().ready(_.bind(extension.start, extension));

})(window);
