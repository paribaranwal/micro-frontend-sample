import React from 'react';
const Listing_List = React.lazy(
  () => import('Listing/List')
);
function App() {
  return (
    <div className="App">
      <React.Suspense fallback='Loading Button'>
          <Listing_List items={[
        { label: 'Hosted on somewhere else' }
      ]}/>
        </React.Suspense>
    </div>
  );
}

export default App;
