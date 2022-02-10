import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <h1 className='footer-name'>NỀN TẢNG HỖ TRỢ KỸ NĂNG P2S</h1>
                <div className='descrip'>
                    <p style={{width:1300}}>P2S là một nền tảng giúp các bạn cải thiện kỹ năng bán hàng mà 
                    không cần phải bỏ bất kỳ một đồng vốn nào trước khi 
                    bắt đầu với sự nghiệp kinh doanh của chính bạn !!</p>
                </div>

                <div className='descrip'>
                    <p style={{width:800}}>Xin lưu ý rằng đây là một nền tảng tạo ra nhằm mục đích trải nghiệm kinh doanh, chưa phải là doanh nghiệp đăng ký kinh doanh, 
                    chủ yếu dành cho các bạn trẻ có thêm kinh nghiệm thực tế. Mọi thắc mắc có thể liên hệ qua số điện thoại hoặc email bên dưới</p>
                </div>
                <p>
                    <Link to='/Dieukhoan'> -- Điều khoản P2S || Chính sách Bảo mật -- </Link>
                </p>
                <p><b>Email:</b> leminhnghia111095@gmail.com - <b>Hotline:</b> (+84)-764-592-262</p>            
            </div>
        )
    }
} 

export default Footer