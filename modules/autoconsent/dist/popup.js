/*!
 * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// i18n
document.getElementById('autoconsent-onboarding-message').innerText = chrome.i18n.getMessage('autoconsent-onboarding-message');
document.getElementById('autoconsent-onboarding-description').innerText = chrome.i18n.getMessage('autoconsent-onboarding-description');
document.getElementById('enable').innerText = chrome.i18n.getMessage('autoconsent-onboarding-enable');
document.getElementById('later').innerText = chrome.i18n.getMessage('autoconsent-onboarding-later');

// message handlers
function emit(message) {
  if (window.parent) {
    window.parent.postMessage(message, '*');
  }
}

['close', 'enable', 'later'].forEach((action) => {
  document.getElementById(action).addEventListener('click', () => {
    emit({ action });
  });
});

emit({ action: 'ping' });
