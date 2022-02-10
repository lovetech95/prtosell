import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

function Modal() {
    
    
    return (
            <div className='Modal'>
                 <Link to="../" style={{height: '50px'}}> Quay trở lại Trang Chủ </Link>
                 <div style={{height: '10px'}}></div>
                 <h4><b>CHÍNH SÁCH ĐIỀU KHOẢN VÀ BẢO MẬT DỮ LIỆU - NỀN TẢNG P2S</b></h4>
                 <i>Cập nhật tháng 2/2022</i>
                 <div style={{height: '40px'}}></div>
                 <b>🎫 Chính sách tạo và xác nhận đơn hàng</b>
                 <p>Người bán sẽ lựa chọn và bán sản phẩm bằng cách điền thông tin trên biểu mẫu Giỏ hàng của P2S. 
                  Sau khi đơn hàng được khởi tạo, P2S sẽ xử lý trong vòng 24h kể từ lúc tiếp nhận, 
                  xác nhận và phản hồi thông tin đơn hàng qua email của người bán</p>
                 <div style={{height: '20px'}}></div>
                 <b>⏱ Thời gian giao hàng</b>
                 <li><i>Nội thành các thành phố lớn (Hà Nội, Thành phố Hồ Chí Minh): từ 03 đến 05 ngày.</i></li>
                 <li><i>Ngoại thành các thành phố lớn và đơn hàng đi tỉnh: từ 05 đến 07 ngày..</i></li>

                 <p>Tuy nhiên, có những trường hợp việc giao hàng có thể kéo dài hơn trong những tình huống không mong muốn thì P2S sẽ nhanh chóng thông báo và xử lý trong thời gian sớm nhất có thể</p>
                 <div style={{height: '40px'}}></div>
                 <b>💳 Cách Thức Thanh Toán</b>
                 <p>Hình thức thanh toán hiện tại của P2S là hình thức thanh toán tiền mặt khi nhận hàng (COD)</p>
                 <li>Shipper sẽ thu tiền trực tiếp từ khách hàng mà không thông qua trung gian</li>
                 <li>Shop sẽ chủ động liên hệ với nền tảng để đối soát sau khi giao hàng thành công (7 ngày làm việc)</li>
                 <p>Nhấn vào phần Users theo dõi hoa hồng thu được và bạn có thể rút tiền sau khi chạm mốc 200,000 VND trong tài khoản</p>

                 <div style={{height: '40px'}}></div>
                 <b>💸 Cách Thức Rút Tiền</b>
                 <p>P2S cung cấp 2 hình thức rút tiền cho người bán như sau:</p>
                 <p>+ Ví MoMo (Khuyên dùng)</p>
                 <p>+ Tài khoản ngân hàng (Người bán phải chịu phí rút)</p>
                <p>Tất cả thông tin liên quan sẽ được thu nhận trong quá trình đăng ký mới và bạn có quyền lựa chọn giữa 2 hình thức này để rút tiền về ví riêng của mình</p>   
                <div style={{height: '40px'}}></div> 
                <b>⭕ Bảo mật thông tin</b>
                <p>Thông tin người bán P2S sẽ tạm thời lưu trữ để phục vụ cho quá trình hỗ trợ và thanh toán giữa 2 bên, ngoài ra không có ý định sử dụng thông tin cá nhân của người bán cho mục đích khác. 
                Vì vậy, thông tin lưu trữ sẽ bị hủy bỏ nếu tài khoản P2S không hoạt động dưới 1 tháng</p>
                <h5>MỌI THẮC MẮC KHÁC XIN VUI LÒNG LIÊN HỆ QUA EMAIL ĐỂ ĐƯỢC GIẢI QUYẾT</h5>       
            </div>
    )
}

export default Modal