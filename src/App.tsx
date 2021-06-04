import React from 'react';
import Nav from './components/nav'
import Footer from './components/footer'

const App: React.FC = () => {
  const routes = Nav(false)
  return (
  <div>
      <header>
          {routes}
      </header>
    <Footer/>
  </div>


  );
}

export default App;
