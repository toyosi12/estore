import React, { Component } from 'react';
class Item extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="col-3">
                        <div className="card">
                            <img src={require('../components/assets/images/bg.jpg')} className="card-img-top" />
                            <div className="card-body">
                                <p>text</p>
                            </div>
                        </div>
                </div>
            
         );
    }
}
 
export default Item;