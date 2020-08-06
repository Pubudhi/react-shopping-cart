// Feature--1 
import React from 'react';
import data from './data.json'
import Products from './componets/Products';
import Filter from './componets/Filter';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: data.products,
        sizes: "",
        sort: ""
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
         <div className="content">
           <div className="main">
             <Filter count={this.state.products.length}>Filter</Filter>
             <Products products= {this.state.products}></Products>
           </div>
           <div className="sidebar">
             Cart Items
           </div>


         </div>
      </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
