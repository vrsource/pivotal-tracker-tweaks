(function(exports, storage) {
   var storage_key = 'ptt-options',
       defaults    = { rearrangePanels: true,
                       epicOverrides: false};

   var Options = exports.Options = function() {
   };

   _.extend(Options.prototype, {
      load: function () {
         var stored_options = storage[storage_key];

         // If the options have not be modifed then set them to something
         // - Defaulting will be taken care of later
         stored_options = stored_options ? JSON.parse(stored_options) : {};
         console.log('Current Options:', stored_options);

         // If the user has not customized some of the options then we use the defaults.
         return _.defaults(stored_options, defaults);
      },

      set: function(options) {
         storage[storage_key] = JSON.stringify(options);
      },

      resetAll: function() {
         storage.removeItem(storage_key);
      }
   });
})(window, window.localStorage);
