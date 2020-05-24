import React from 'react';
import Catalog from '../Catalog';
import Detail from '../Detail';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Home() {
    return(
      <Router>
        <div>
          <Switch>
           
              <Catalog/>
            
            <Route exact path='/detail/:id' component={Detail}>
                
            </Route>
          </Switch>
        </div> 
      </Router>
    ) 
  }

  export default Home;