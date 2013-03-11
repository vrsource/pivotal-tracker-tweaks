/*global EpicPreviewWidget: false, Epic: false, app:false, Panel:false */
/*
* Overrides for epics.
*
* This file has to be injected into the page context.
*
* Notes:
*   - EpicsWidgetSource: Seems to be the place epics are partitioned to display
*   - Epic: Main class for epics and holds the content.
*   - EpicPreviewWidget._showEpicStoriesPanel: hook to show stories from main interface
*   - layout.showEpicStoriesPanel
*/
if(window.app) {
   console.log('Loading Epic Overrides');
   var project = window.app.project;

   console.log('Project', project);
   console.log('Epic', Epic);

   // Override the isDone and isAccepted to make PT
   // treat all Epics the same with no auto completion
   Epic.prototype.isDone = function() {
      return false;
   };
   Epic.prototype.isAccepted = function() {
      return false;
   };

   // Override the default way EpicPreviewWidget shows epics so that we
   // can force all other epic panels closed before showing the new one.
   // note: this doesn't not prevent all places from do this, but works for us.
   //       to prevent all, look at layout.showEpicsStoriesPanel
   EpicPreviewWidget.prototype._showEpicStoriesPanel = function() {
      console.log('showing epic');
      app.layout.hidePanels(Panel.EPIC_STORIES);
      app.layout.showEpicStoriesPanel(this.model.id());
   };

   // Override the epic stories update method to add count to the epic
   // table that shows the number of points remaining
   var orig_updateStoriesInEpicGraph = EpicPreviewWidget.prototype._updateStoriesInEpicGraph;
   EpicPreviewWidget.prototype._updateStoriesInEpicGraph = function() {
      orig_updateStoriesInEpicGraph.apply(this, arguments);
      if(!this._graphElement) {
         return;
      }

      // Lazy add a div for remaining point count.
      var $point_count = this.j('.epic_remaining_points');
      if($point_count.length === 0) {
         $point_count = j('<div class="epic_remaining_points"></div>');
         this.j(this._graphElement).before($point_count);
      }
      // compute the updated value and set it in the DOM.
      var pseudo_points = this.model.getPseudopoints();
      var remaining_points = pseudo_points.unscheduled + pseudo_points.unstarted;
      $point_count.html('' + remaining_points);
   };

}