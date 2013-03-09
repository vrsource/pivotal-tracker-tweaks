/*
* Overrides for epics.
*
* This file has to be injected into the page context.
*
* Notes:
*   - EpicsWidgetSource: Seems to be the place epics are partitioned to display
*   - Epic: Main class for epics and holds the content.
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

}
