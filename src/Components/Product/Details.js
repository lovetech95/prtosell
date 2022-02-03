import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import ImageGallery from 'react-image-gallery';


function Details() {

    /*    
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
          }        
      ];

    */  

    const [item,setItems] = useState({});
    const [image,setImages] = useState([]);
    const [count,setCount] = useState(1);
    const Id = window.location.pathname.replace('/Product/','')
  
    useEffect(() => {
            fetch(`https://app-api.selly.vn/products/${Id}`)
                 .then(res => res.json())
                 .then(row => row.data.product)
                 .then(item => {
                     setItems(item)
                     setImages(item.photos)
                 
                    });

   },[Id])




   const images = image.map((row) => {
       return {
                original: row.dimensions.md.url,
                thumbnail: row.dimensions.sm.url
       }
   })


   //fomular to give the comma in number
   const separator = (numb) => {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        var finalStr = str.join(".")+'₫';

        return finalStr;
    }



    const productInfos = [
            {
                title: 'Giá bán thị trường',
                value: JSON.stringify(item).includes('market') === true ? separator(item.price.market) : null
            },
            {
                title: 'Giá nhà cung cấp',
                value: JSON.stringify(item).includes('supplier') === true ? separator(item.price.supplier + 0.6*item.price.profit) : null 
            },
            {
                title: 'Hoa hồng',
                value: JSON.stringify(item).includes('profit') === true ? separator(0.4*item.price.profit) : null 
            },
            {
                title: 'Thương hiệu',
                value: JSON.stringify(item).includes('supplier') === true ? item.info.supplier.name : '' 
            },
            {
                title: 'Chi nhánh',
                value: JSON.stringify(item).includes('inventory') === true ? item.info.inventory.location.provinceName : '' 
            }
    ];

    


 

    return (
        <div className='details-product'>
              <div className='route-link'>
                  <Link to='/' >Trang Chủ</Link>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="align-self-center"><path d="M9 6L15 12L9 18" stroke="#384059" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <Link to={`/Product/${Id}`} >
                      {item.name}
                  </Link>  
              </div>

              <div className='summary-product'>
                  <div className='row'>
                        <div className='col-md-5 col-xs-12'>
                            <ImageGallery items={images} 
                                          showPlayButton={false}  
                              />
                        </div>
                        <div className='col-md-7 col-xs-12 info-product'>
                            <h3>{item.name}</h3>  
                            <div className='price'>
                                <i>Giá bán:</i>&nbsp;&nbsp; <b style={{color:'red',fontSize:'30px'}}>{ JSON.stringify(item).includes('market') === true ? separator(item.price.market) : '' }</b>
                                <br />
                                <i>Hoa Hồng:</i>&nbsp; <b style={{color:'black',fontSize:'20px'}}>{ JSON.stringify(item).includes('profit') === true ? separator(0.4*item.price.profit) : '' }</b>
                            </div>
                            <div className='ship'>
                                <div className='free-ship'>                 
                                    <svg height='32' 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="shipping-fast" 
                                        class="svg-inline--fa fa-shipping-fast fa-w-20" role="img" 
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#6d97e6" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
                                    &nbsp;<p>Freeship với đơn từ 149k</p>
                                </div>
                                <div className='free-ship'>                      
                                    <svg height='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" class="svg-inline--fa fa-medal fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#6d97e6" d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path></svg>
                                    &nbsp;<p>Đảm bảo hàng chính hãng</p>
                                </div>
                                <div className='free-ship'>                   
                                    <svg height='32' aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#6d97e6" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                    &nbsp;<p>Giao hàng từ 1-3 ngày</p>
                                </div>
                            </div>
                            <div className='number'>
                                <div className='n-product'>Số Lượng</div>
                                <div className='increase'>
                                    <button className="ele-increase btn btn-default" 
                                    onClick={() => {
                                                if (count > 0) {
                                                   setCount(count-1)
                                                } else {
                                                   setCount(0)
                                    }}}>-</button> 
                                    <input className="ele-increase none" type="number" value={count} />
                                    <button className="ele-increase btn btn-default" onClick={() => setCount(count+1)}>+</button> 
                                </div>
                            </div>  
                            <div className='add-cart'>
                                <button type='button' className='add-items-cart btn btn-default'>                          
                                        <svg height='16' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" class="svg-inline--fa fa-cart-plus fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
                                        &nbsp; Thêm vào giỏ hàng
                                </button>
                            </div>                          
                            <hr/> 
                            <i style={{color:'red'}}>*Mọi thắc mắc bạn hãy liên hệ P2S để xử lý</i>
                        </div>
                  </div>

              </div>

              <div className='product-description'>
                    <div className='row'>
                        <div className='col-md-5 col-xs-12'>
                            <p className='header-des'>THÔNG TIN SẢN PHẨM</p>
                            <div className='product-info'>
                                {
                                    productInfos.map((row) => {
                                        return (
                                            <div className='list-products'>
                                                <b>{row.title}</b>
                                                <p className='right-list-product' style={row.title === 'Hoa hồng' ? {color:'#2edf45'}:{} }>{row.value}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='col-md-7 col-xs-12'>
                            <p className='header-des'>MÔ TẢ SẢN PHẨM</p>
                            <div className='description-content' dangerouslySetInnerHTML={{ __html: item.desc }}>                         
                            </div>
                        </div>
                 </div>
              </div>
        </div>
       
    )
}


export default Details