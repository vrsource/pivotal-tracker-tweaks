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


// --- INJECT SCRIPTS --- //
inject_script('epic_overrides.js');