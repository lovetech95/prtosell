import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <h1 className='footer-name'>NỀN TẢNG P2S</h1>
                <div className='descrip'>
                    <p style={{width:1000}}>P2S là một nền tảng giúp các bạn cải thiện kỹ năng bán hàng mà 
                    không cần phải bỏ bất kỳ một đồng vốn nào trước khi 
                    bắt đầu với sự nghiệp kinh doanh của chính bạn !! Chúng tôi luôn đồng hành với các bạn</p>
                </div>
                <p>
                    <a href='#'>Điều khoản P2S</a>  
                    &#160; | &#160;
                    <a href='#'>Chính Sách Bảo Mật</a>
                </p>
                <p><b>Email:</b> leminhnghia111095@gmail.com - <b>Hotline:</b> (+84)-764-592-262</p>            
            </div>
        )
    }
} 

export default Footer