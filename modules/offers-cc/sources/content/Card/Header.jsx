import React from 'react';
import send from '../transport';
import { css, i18n } from '../common/utils';

const _css = css('card-header__');
export default function Header(props) {
  const { voucher = {}, autoTrigger } = props;
  const {
    validity: { text = '', expired = {} } = {},
    template_data: templateData,
    offer_id: offerId
  } = voucher;
  const { call_to_action: { url } = {} } = templateData;

  /* eslint-disable no-nested-ternary */
  const expiredClass = expired.soon
    ? 'till-soon'
    : (expired.leftSome ? 'till-left-some' : '');
  /* eslint-enable no-nested-ternary */

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div className={_css('container')}>
      <div className={_css('left-item')}>
        {templateData.logo_dataurl && (
        <div
          onClick={() => {
            send('openURL', {
              offerId,
              url,
              closePopup: false,
              isCallToAction: true,
            });
            send('sendTelemetry', { target: 'use' });
          }}
          style={{ backgroundImage: `url(${templateData.logo_dataurl})` }}
          className={_css('image')}
        />
        )}
      </div>
      <div className={_css('right-item')}>
        <div className={_css('expired-icon', `${expiredClass}-icon`)} />
        <div className={_css('till-wrapper')}>
          <div className={_css('till', expiredClass)}>{text}</div>
          <div className={_css('affiliate-link')}>
            {i18n('affiliate_link')}
          </div>
        </div>
        {!autoTrigger && (
          <div
            onClick={props.onRemove}
            className={_css('trash')}
          />
        )}
      </div>
    </div>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}
