import React from 'react';

import { BrowserRouter as Link, useParams } from "react-router-dom";
function Detail(props) {
    let {id} = useParams();
    return (
      <div>
        <h1>Detalle pokemon : {id}</h1>
        <Link to="/"> volver</Link>
      </div>
    );
  }

  export default Detail;