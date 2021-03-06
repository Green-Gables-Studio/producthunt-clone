import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';

import { globalStyles } from '../styles/global';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
// import { GlobalStyle } from '../styles/global';

// const App = ({ Component, pageProps }) => {
//   return (
//     <>
//       <GlobalStyle />
//       <Component {...pageProps} />
//     </>
//   );
// };

// export default App;
