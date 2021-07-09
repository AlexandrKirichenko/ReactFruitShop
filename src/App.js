import React from 'react';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Shop} from './layout/Shop';
import {ContextProvider} from './context';
import {OrdersCart} from './components/OrdersCart'
import {Notfound} from './components/Notfound'

function App() {
  return (
   <>
     <Router basename='/ReactFruitShop'>
         <Header />

             <main className='container content'>
                 <Switch>
                     <ContextProvider>
                         <Switch>
                             <Route exact path="/" component={Shop}  />
                             <Route path="/cart" component={OrdersCart} />
                             <Route component={Notfound} />
                         </Switch>
                     </ContextProvider>
                 </Switch>
             </main>
         <Footer />
     </Router>
   </>
  );
}

export default App;
