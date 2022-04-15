import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './containers/root';
import reportWebVitals from './reportWebVitals';
import './ui-lib/styles/themes/themes.light.css'
import './ui-lib/styles/themes/themes.dark.css'
import './ui-lib/styles/common.css'
import './ui-lib/styles/layout.css'
import './ui-lib/styles/space.css'

import './ui-lib/components/text/text.css'
import './ui-lib/components/text/text.variants.body.css'
import './ui-lib/components/text/text.variants.link.css'
import './ui-lib/components/text/text.variants.title.css'

import './ui-lib/components/box/box.css'

import './ui-lib/components/button/button.css'
import './ui-lib/components/button/button.variant.primary.css'
import './ui-lib/components/button/button.variant.secondary-fill.css'
import './ui-lib/components/button/button.variant.secondary.css'

import './ui-lib/components/checkbox/checkbox.css'

import './ui-lib/icons/icon-base/icon-base.css'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
