# pivotal-tracker-tweaks Chrome Extension

Overview
========

This is a chrome extension that provides a variety of tweaks to help make pivotal tracker more useful for our workflow.  It includes the following tweaks:

* Prevent Epics from being auto completed

By default PT will automatically handle epics and mark them as done as soon as any stories from an epic have been marked as done and there are no other stories for that epic in the backlog.  This doesn't work well for a workflow where you want to use epics to group items from the icebox that may not yet be scheduled.  This change removes this default behavior and prevents epics from ever being marked as completed or done.

* Only allow one Epic story panel to open at a time

When clicking on epics and opening epics from the Epic list panel, the default behavior is to continue opening one new panel for each epic you click on.  This makes it difficult to rapidly scan through a number of epics looking at their detailed stories. The extensions changes this behavior and will close all epic story panels before opening the new panel.

* Allow dragging of panels

We include the excellent extension for allowing rearrange_panels.

See: https://chrome.google.com/webstore/detail/rearrange-panels-in-pivot/opjidnmongipncgdeggklmjihpmjollh

Installation
============

1. Download the latest .crx file from the build/ directory.
2. Open 'chrome://extensions'
3. Drag and drop the .crx file onto the extensions page.

Building
========
We use grunt and node for the build.  On most systems this should be very easy to use.

1. Make sure node.js is installed on your system
2. Go to the base directory for the extension
3. Run 'npm install'
4. Run './node_modules/.bin/grunt build'
5. The extension should now be located in the build directory.

Contributing
============
Please fork the repository and add new features.
