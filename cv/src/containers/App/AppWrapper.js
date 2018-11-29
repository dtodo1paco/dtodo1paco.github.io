import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from "react-intl";
import esLocaleData from "react-intl/locale-data/es";
import translations from "i18n/locales"
import App from "containers/App/App";

addLocaleData(esLocaleData);

class AppWrapper extends Component {
  render() {
    // get locale from url
    const locale = window.location.search.replace("?locale=","") || "en"
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App locale={locale} />
      </IntlProvider>
    );
  }
}

export default AppWrapper;
