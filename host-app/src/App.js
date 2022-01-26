import React, { lazy, Suspense } from "react";
// import TokenApp from './TokenApp'
// const TokenAppLazy = lazy(() => {<TokenApp />})

const TokenApp = lazy(() => import('./TokenApp.js'))

const App = () => {
  return (
    <>
      <h1>Host</h1>
      <Suspense fallback={<h1>Loading QR ...</h1>}>
        <TokenApp />
      </Suspense>
    </>
  );
};

export default App;
