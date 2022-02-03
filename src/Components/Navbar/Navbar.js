import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Autocomplete from './Autocomplete';
import './Navbar.css';

function  Navbar() {

        const [targetdata, setTargetdata] = useState([]);
        const [data,setData] = useState([]);
        const [key,setKey] = useState('');
        const [Showresult,setShowresult] = useState(false);


        useEffect(() => {
            const loadData = async () => {
                const res = await axios.get('https://script.google.com/macros/s/AKfycbyPd2r8KXnqZj0ckFJbpnakvT8Wkna_l7ADf94OXK6G6h0CbX-639NSLMIs9FIorXCe/exec');
                setData(res.data.data);
            };

            loadData();
        },[]);

        
        
        
        const filteredData = (text) => {
          
          let matches = data.filter((row) => {
              const regex = new RegExp(text,'gi')
              return row.name.match(regex);
          })
          
          setTargetdata(matches);
          setKey(text);
          setShowresult(true);
          
        }


      

         return (
                    <nav className="NavbarItems">
                          <h2 className="Navbar-logo"><Link to="/" style={{color:'white' }}>PracticeToSell</Link></h2>
                          <input className='form-control' 
                                 style={{width:450, height:50}} 
                                 placeholder='Tìm Kiếm Sản Phẩm' 
                                 onInput={(e) => filteredData(e.target.value)} 
                                 onClickCapture={()=>  setShowresult(false) }
                                 />
                          <div>
                            {Showresult ?
                            <Autocomplete 
                                    target={targetdata}
                                    keyword ={key}
                                    /> 
                                    :null }
                          </div>
                          <ul className='Navbar-list-items'>
                            <li className="items invisible">
                              <svg 
                                   height='25' 
                                   aria-hidden="true" 
                                   focusable="false" 
                                   data-prefix="fas" 
                                   data-icon="shopping-cart" 
                                   class="svg-inline--fa fa-shopping-cart fa-w-18" 
                                   role="img" xmlns="http://www.w3.org/2000/svg" 
                                   viewBox="0 0 576 512">
                              <path fill="white" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                              &#160;
                              <Link to="./Giohang" >Giỏ Hàng</Link>
                            </li>      
                            <li className="items"  >                                                       
                                <svg height='25' 
                                     aria-hidden="true" 
                                     focusable="false" 
                                     data-prefix="fas" 
                                     data-icon="receipt" 
                                     class="svg-inline--fa fa-receipt fa-w-12" 
                                     role="img" 
                                     xmlns="http://www.w3.org/2000/svg" 
                                     viewBox="0 0 384 512">
                                <path fill="white" d="M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"></path></svg>
                                &#160;
                              <Link to="./Donhang" >Tạo Đơn</Link>
                            </li>               
                            <li className="items invisible">
                            <svg height='25' 
                                 aria-hidden="true" 
                                 focusable="false" 
                                 data-prefix="fas" 
                                 data-icon="user" 
                                 class="svg-inline--fa fa-user fa-w-14" 
                                 role="img" 
                                 xmlns="http://www.w3.org/2000/svg" 
                                 viewBox="0 0 448 512">
                            <path fill="white" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>

                              &#160;
                              <Link to="./Profile"> Hồ Sơ của bạn
                              </Link>
                            </li>                                             
                          </ul>    
                    </nav>
         )       
}




export default Navbar