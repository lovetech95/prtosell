import React, {useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './Giohang.css';
import {targetArr} from '../modules/storage';
import ModifyProduct from '../modules/storage';




function Giohang () {
        
        //const location = useLocation();
        
        const navigate = useNavigate();
        const [finalArr, setFinalArr] = useState(targetArr);
        
        

        const separator = (numb) => {
            var str = numb.toString().split(".");
            str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
            var finalStr = str.join(".")+'đ';
    
            return finalStr;
        }

        function RemoveElemnt(index){

            setFinalArr(() => ModifyProduct(targetArr,null,'REMOVE',index))
        
        }

        

        return (
            <h1 class="bag">
                <div className='bag-content'>
                    <div className='row'>
                        <div className='col-8 customer-bag'>
                            <div className='filter-bag'>Tất cả có {finalArr.length} sản phẩm</div>
                            <div className='result-bag'>
                                <h5>Thông tin Đơn hàng</h5>    
                                <hr />
                                <div class='order-bag'>
                                    {   
                                            finalArr.length > 0 ? finalArr.map((items,index) => {
                                            const totalsell =  items.quantity*items.market;
                                            const totalrecevice = items.quantity*items.profit;
                                                
                                            return (
                                                        <div className='order-items' key={index}>
                                                             <div className='toggle'>
                                                                <button className='hide btn btn-default' onClick={() => RemoveElemnt(index)}>
                                                                    <svg height='20' 
                                                                    aria-hidden="true" 
                                                                    focusable="false" 
                                                                    data-prefix="far" 
                                                                    data-icon="trash-alt" 
                                                                    class="svg-inline--fa fa-trash-alt fa-w-14" 
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" 
                                                                    viewBox="0 0 448 512">
                                                                <path fill="grey" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>                                                                    
                                                                </button>
                                                                <img class="img-order" src={items && items.photo} alt={items && items.name} />
                                                             </div>
                                                             <div className='info-order'>
                                                                <b>{items && items.name}</b>   
                                                                <div className='ele-order'><i>x {items && items.quantity}</i></div> 
                                                                <div className='ele-order' style={{color:'red'}}>Tổng Bán: {items && separator(totalsell)}</div>
                                                                <div className='ele-order' ><b>Tổng nhận: {items && separator(totalrecevice)}</b></div>
                                                                <br />
                                                                
                                                             </div>
                                                        
                                                        </div>  
                                            )
                                        }) : (<p>Bạn chưa chọn sản phẩm nào</p>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-4 fill-customer-information'>
                            <form className='form-bag'>
                                <h5>Thông tin khách hàng</h5>    
                                <hr />
                                <div className='box-bag'>
                                    <label class="control-label">Tên Khách Hàng</label>
                                    <input name="firstname" className='form-control' placeholder='Nguyễn Văn A..' />
                                    
                                    <br />
                                    <label class="control-label">Số điện thoại</label>
                                    <input name="phone" className='form-control' placeholder='0756452135..' />
                                    <br />
                                    <label class="control-label">Địa chỉ liên hệ</label>
                                    <input name="address" className='form-control' placeholder='12 Lý Thường Kiệt, P.10, Q.5, TPHCM' />
                                    <i style={{color:'red', fontSize:'10px'}}>*Hãy điền đầy đủ thông tin địa chỉ để quá trình xác nhận diễn ra nhanh chóng</i>   
                                    <br /> <br />
                                    <button className='add-order btn btn-default' >TẠO ĐƠN HÀNG</button>                                 
                                </div>
     
                            </form>
                        </div>
                    </div>
                </div>
            </h1>
        );
    }
 

export default Giohang