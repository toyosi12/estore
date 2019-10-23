import React, { Component } from 'react';
import Item from './Item';
class Categories extends Component {
    categories = [
        {
          id: 1, 
          name: 'CLOTHES',
          items: [
              {id: 12, name:'cloth1', img:'./assets/images/bg.jpg', price: 2000},
              {id: 13, name:'cloth1', img:'./assets/images/bg.jpg', price: 2000},
              {id: 14, name:'cloth1', img:'./assets/images/bg.jpg', price: 2000},
              {id: 4, name:'cloth1', img:'./assets/images/bg.jpg', price: 2000},
          ],
        },
        {
          id: 2,
          name: 'SHOES',
          items: [
            {id: 5, name:'shoe1', img:'./assets/images/bg.jpg', price: 2000},
            {id: 6, name:'shoe2', img:'./assets/images/bg.jpg', price: 3000},
            {id: 7, name:'shoe3', img:'./assets/images/bg.jpg', price: 4000},
            {id: 8, name:'shoe4', img:'./assets/images/bg.jpg', price: 3000},
          ],
        },
        {
          id: 3,
          name: 'BAGS',
          items: [
            {id: 9, name:'cloth1', img:'./assets/images/bg.jpg', price: 3000},
            {id: 10, name:'cloth2', img:'./assets/images/bg.jpg', price: 4000},
            {id: 11, name:'cloth3', img:'./assets/images/bg.jpg', price: 5000},
            {id: 12, name:'cloth4', img:'./assets/images/bg.jpg', price: 1000},
          ]
        }
      ]
      state = {
        categories: this.categories
      }
    render() { 
        return ( 
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">CATEGORIES</h3>
                    </div>
                </div>
                <div>
                    {
                        this.state.categories.map(c => (
                            <div className="row mt-4 mb-4" key={c.id}>
                                <div className="col-12 mt-5"><h6 className="text-center">{c.name}</h6></div>
                                    {
                                        c.items.map((i, index) => (
                                           <Item key={index} />
                                        ))
                                    }
                            </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default Categories;