/*!
 * Copyright (c) 2014-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const configBase = require('../offers');
const publish = require('../common/publish');

const id = 'firefox@sparalarm.chip.de';

module.exports = Object.assign({}, configBase, {
  publish: publish.toPrereleaseFullName('chip_sparalarm', 'offers_pre', 'firefox', 'zip'),
  settings: Object.assign({}, configBase.settings, {
    id,
    name: 'chipAppName',
    description: 'chipAppDesc',
    storeName: 'chipsparalarm',
    channel: 'MC00', // CHIP Sparalarm Firefox Release
    OFFERS_CHANNEL: 'chip',
    OFFERS_BRAND: 'chip',
    ONBOARDING_URL: 'https://sparalarm.chip.de/onboarding#step-0',
    OFFBOARDING_URL: 'https://sparalarm.chip.de/offboarding',
    SUPPORTED_LANGS: ['de'],
    'dynamic-offers.enabled': false,
  }),
  default_prefs: {
    'humanWebOptOut': true,
  },
  versionPrefix: '14',
  specific: 'offers',
  PRODUCT_PREFIX: 'chip',
  PRODUCT_TITLE: 'CHIP Sparalarm',
});
