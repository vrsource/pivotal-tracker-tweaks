/**
 * Very basic backround script which runs in the extensions context instead of
 * the pages.  This allows calls to localStorage, and other context based tools,
 * to utilize the extensions resources instead of the currently executing page.
 *
 * Note: The options page also runs in the extensions context so using
 *       localStorage there is the same as the localStorage here.
 */


/**
 * Expose calls to the user script which will execute in the extensions context
 * and return the result.
 *
 * Usage
 * =====
 * To call a method use `chrome.extension.sendRequest` with the first parameter
 * being the messasge.  By convension the method to execute is stored as the key
 * `name` on the message.  Additionally, parameters can be passed through as
 * other keys on the message.
 *
 * Example
 * -------
 * // Call getOptions method which takes 0 args
 * chrome.extensions.sendMessage({ name: 'getOptions' }, function(options) { ... });
 *
 * // Call a function which takes args
 * chrome.extensions.sendMessage({ name: 'getOptions', arg1: 1 }, function(options) { ... });
 *
 * Methods
 * =======
 * getOptions
 * ----------
 * Reads the options from localStorage which were set by the options page.
 *
 * @returns <object>
 *
 */
(function(Options) {
   chrome.extension.onRequest.addListener(
      function(request, sender, sendResponse)
      {
         switch (request.name)
         {
         case "getOptions":
            var options = new Options();
            sendResponse(options.load());
            break;

         }
      }
   );
})(window.Options);
