import React from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Shop} from './layout/Shop';
import {ContextProvider} from './context';
import {OrdersCart} from './components/OrdersCart'

function App() {
  return (
   <>
     <Header />
     <main className='container content'>
     <ContextProvider>
         <Switch>
             <Route path="/" exact><Shop /></Route>
             <Route path="/Cart"><OrdersCart /></Route>
         </Switch>
     </ContextProvider>
     </main>
     <Footer />
   </>
  );
}

export default App;
