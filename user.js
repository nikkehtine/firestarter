// Turn off telemetry
user_pref("app.normandy.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable controversial "studies" and "experiments"
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("network.allow-experiments", false);

// Disable AI features
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.pageAssist.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.userEnable", false);
user_pref("extensions.ml.enabled", false);

// Disable other junk/annoyances
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.promo.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.sponsoredTopSites", false);
user_pref("browser.urlbar.sponsoredSuggestions", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable first run popups
user_pref("browser.aboutConfig.showWarning", false);
user_pref(
  "browser.firefox-view.feature-tour",
  "{\"message\":\"FIREFOX_VIEW_FEATURE_TOUR\",\"screen\":\"\",\"complete\":true}",
);
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);

// Privacy enhancements
user_pref("browser.sendPings", false);
user_pref("dom.battery.enabled", false);
user_pref("device.sensors.enabled", false);

// Enable UI tweaks
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Extra quality-of-life goodies
user_pref("browser.urlbar.trimURLs", false);

// Steal smoother scrolling from Zen Browser
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15");
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80);
user_pref("general.smoothScroll.mouseWheel.stopDecelerationWeighting", "0.6");
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.3");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);

// Better font rendering on Windows (this has no effect on Linux/macOS)
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);
