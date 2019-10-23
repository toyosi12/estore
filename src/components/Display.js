import React, { Component } from 'react';
import './assets/custom.css';
class Display extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row disp">
                    <div className="col-12 text-center">
                        <h1 className="text-white">REACT ONLINE STORE</h1>
                        <h3 className="text-white">Clothes, shoes, bags</h3>
                        <button type="button" className="btn mt-4 text-dark" id="shop">Shop Now</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Display;