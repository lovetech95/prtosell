import React, { Component } from 'react';
import './Content.css';
import Slideshow from './slideshow-img';
import Products from './Products';

class Content extends Component {

        // Constructor 
        constructor(props) {
            super(props);
            this.state = {
                items: [],
                DataisLoaded: false
            };
        }

        // ComponentDidMount is used to
        // execute the code 
        componentDidMount() {
            fetch(
        "https://script.google.com/macros/s/AKfycbyPd2r8KXnqZj0ckFJbpnakvT8Wkna_l7ADf94OXK6G6h0CbX-639NSLMIs9FIorXCe/exec")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json.data,
                        DataisLoaded: true
                    });
                })
        }


        HandleSort = (event) => {
            const { DataisLoaded, items } = this.state;
            const sortKey = event.target.id;

            if (sortKey === 'Low') {
                items.sort((a, b) => parseFloat(a.price_market) - parseFloat(b.price_market));
            } else if (sortKey ==='High') {
                items.sort((a, b) => parseFloat(b.price_market) - parseFloat(a.price_market));
            } else {
                items.sort((a, b) => parseFloat(b.profit_seller) - parseFloat(a.profit_seller));
            }

            this.setState({
                items: items,
                DataisLoaded: true
            });
          };



    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <b> Pleses wait a minute.... </b> </div> ;

        const total_product = items.length;

        return (

                        <div className='grid wide'>
    
                            <Slideshow />

                            <div className='header-product'>
                                <h2>SẢN PHẨM TRONG KHO ({total_product} sản phẩm)</h2> 
                                <div className='filter-product'>
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary-outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                           
                                        <svg height='30' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-amount-down-alt" class="svg-inline--fa fa-sort-amount-down-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z"></path></svg>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" id="High" onClick={this.HandleSort} >Giá Cao</a>
                                        <a className="dropdown-item" id="Low" onClick={this.HandleSort} >Giá Thấp</a>
                                        <a className="dropdown-item" id="HighProfit" onClick={this.HandleSort}>Hoa Hồng Cao</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <Products data={items}  />
                        </div>
                    
        )
    }
}

export default Content