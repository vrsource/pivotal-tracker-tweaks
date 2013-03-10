/*global $: false, Options: false*/

function OptionsPage() {
   this._options = new Options();
}

_.extend(OptionsPage.prototype, {
   events: {
      'change #enable-rearrange':     '_onToggleRearrange',
      'change #enable-epicOverrides': '_onToggleEpicOverrides'
   },

   start: function() {
      this.$rearrangeCB     = $('#enable-rearrange');
      this.$epicOverridesCB = $('#enable-epicOverrides');

      this._connectEvents();
      this._updateUi();
   },

   _connectEvents: function() {
      _.each(this.events, function(handler, eventSig) {
         var event    = eventSig.split(' ')[0],
             selector = eventSig.split(' ')[1];

         if (! this[handler]) {
            throw 'Object does not have a method: ' + handler;
         }

         handler = _.bind(this[handler], this);
         $(selector)[event](handler);
      }, this);
   },

   _updateUi: function() {
      var settings = this._options.load();

      this.$rearrangeCB.prop('checked', settings.rearrangePanels);
      this.$epicOverridesCB.prop('checked', settings.epicOverrides);
   },

   _toggleSetting: function(setting) {
      var settings = this._options.load();
      settings[setting] = !settings[setting];
      this._options.set(settings);

      this._updateUi();
   },

   _onToggleRearrange: function() {
      this._toggleSetting('rearrangePanels');
   },

   _onToggleEpicOverrides: function() {
      this._toggleSetting('epicOverrides');
   }
});


/**
 * Options App setup
 */
$().ready(function() {
   var options_page = new OptionsPage();
   options_page.start();
});
