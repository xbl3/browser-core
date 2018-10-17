/* eslint-disable */

'use strict';

const base = require('./common/system');
const urls = require('./common/urls-ghostery');
const subprojects = require('./common/subprojects/bundles');

module.exports = {
  "platform": "firefox",
  "baseURL": "resource://cliqz/",
  "testsBasePath": "./build/ghostery@cliqz.com/chrome/content",
  "testem_launchers": ["unit-node", "Chrome"],
  "testem_launchers_ci": ["unit-node"],
  "pack": "cd build && fab package:version=$VERSION,cert_path=$CLIQZ_CERT_PATH,cert_pass_path=$CLIQZ_CERT_PASS_PATH",
  "publish": "cd build && fab publish:beta=$CLIQZ_BETA,channel=$CLIQZ_CHANNEL,pre=$CLIQZ_PRE_RELEASE,version=$VERSION,cert_path=$CLIQZ_CERT_PATH,cert_pass_path=$CLIQZ_CERT_PASS_PATH",
  "updateURL": "https://s3.amazonaws.com/cdncliqz/update/browser/latest.rdf",
  "updateURLbeta": "https://s3.amazonaws.com/cdncliqz/update/browser_beta/latest.rdf",
  "settings": Object.assign({}, urls, {
    "id": "ghostery@cliqz.com",
    "name": "Ghostery",
    "channel": "GB00",
    "homepageURL": "https://ghostery.com/",
    "freshTabNews": true,
    "showDataCollectionMessage": false,
    "antitrackingButton": true,
    "helpMenus": true,
    "showNewBrandAlert": true,
    "suggestions": false,
    "onBoardingVersion": "3.0",
    "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB\/hFrSMQ+\/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3\/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q\/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
    "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl\/NtZ+fOooNglZct\/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR\/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv\/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH\/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq\/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB\/uF1UjYETBavwUZAxx9Wd\/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz\/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
    "HW_CHANNEL": "ghostery-browser",
    "HPN_CHANNEL": "ghostery",
    "OFFERS_CHANNEL": "ghostery",
    "NEW_TAB_URL": "resource://cliqz/freshtab/home.html",
    "ONBOARDING_URL": "resource://cliqz/onboarding-v3/index.html",
    "HISTORY_URL": "resource://cliqz/cliqz-history/index.html#/",
    "modules.history.search-path": "?query=",
    "ICONS": {
      "active": {
        "default": "control-center/images/cc-active.svg",
        "dark": "control-center/images/cc-active-dark.svg"
      },
      "inactive": {
        "default": "control-center/images/cc-critical.svg",
        "dark": "control-center/images/cc-critical-dark.svg"
      },
      "critical": {
        "default": "control-center/images/cc-critical.svg",
        "dark": "control-center/images/cc-critical-dark.svg"
      }
    },
    "PAGE_ACTION_ICONS": {
      "default": "control-center/images/page-action-dark.svg",
      "light": "control-center/images/page-action-dark.svg",
      "dark": "control-center/images/page-action-light.svg"
    },
    "BACKGROUNDS": {
      "active": "#471647",
      "critical": "#471647"
    },
    "ATTRACK_TELEMETRY_PROVIDER": "hpn",
    "ALLOWED_COUNTRY_CODES": ["de", "at", "ch", "es", "us", "fr", "nl", "gb", "it", "se"],
    "antitrackingPlaceholder": ".com/tracking",
    "antitrackingHeader": "CLIQZ-AntiTracking",
    "FRESHTAB_TITLE": 'Ghostery Tab',
  }),
  "default_prefs" : {
    "modules.context-search.enabled": false,
    "modules.history.enabled": false,
    "modules.type-filter.enabled": false,
    "modules.antitracking-blocker.enabled": false,
    "modules.history-analyzer.enabled": false,
    "proxyPeer": false,
    "proxyTrackers": false,
    "modules.cookie-monster.enabled": true,
    "modules.hpnv2.enabled": true,
    "suggestionChoice": 2,
    'freshtab.search.mode': 'search',
  },
  "modules": [
    "core",
    "core-cliqz",
    "dropdown",
    "firefox-specific",
    "static",
    "geolocation",
    "ui",
    "last-query",
    "human-web",
    "context-menu",
    "freshtab",
    "webrequest-pipeline",
    "performance",
    "hpn",
    "control-center",
    "offers-v2",
    "popup-notification",
    "history-analyzer",
    "offers-debug",
    "browser-panel",
    "message-center",
    "offboarding",
    "anolysis",
    "anolysis-cc",
    "abtests",
    "context-search",
    "privacy-dashboard",
    "https-everywhere",
    "onboarding-v3",
    "type-filter",
    "history",
    "offers-cc",
    "video-downloader",
    "market-analysis",
    "p2p",
    "proxyPeer",
    "pairing",
    "antitracking-blocker",
    "search",
    "cookie-monster",
    "hpnv2",
    "privacy",
    "inter-ext-messaging",
    "privacy-migration",
    "myoffrz-helper",
    "serp"
  ],
  "subprojects": subprojects([
    '@cliqz-oss/dexie',
    'pouchdb',
    '@cliqz/adblocker',
    'ajv',
    'cliqz-history',
    'handlebars',
    'jquery',
    'mathjs',
    'moment',
    'moment-range',
    'pako',
    'qrcodejs',
    'react',
    'reactDom',
    'rxjs',
    'simple-statistics',
    'tldts',
    'tooltipster-css',
    'tooltipster-js',
    'tooltipster-sideTip-theme',
    'ua-parser-js',
    'jsep',
  ]),
  systemDefault: base.systemConfig,
  builderDefault: base.builderConfig,
  bundleConfigs: Object.assign({}, base.appBundleConfig),
};
