import React from 'react';
import './Autocomplete.css';

function Autocomplete(target_data) {

    const Listitems = target_data.target;
    const keyword = target_data.keyword;


    const HandleClick = (target_id) => {
        let host = window.location.host;
        let template = 'http://'+host+`/Product/${target_id}`;
        window.location.href = template;
    }     


    return (
        <div className='autocomplete' >
            <div >
                
            </div>
            <div className='suggestion'>
                <b>Từ khóa: {keyword || 'Không có từ khóa nào !'}</b>
                <hr />
                 {
                    keyword && Listitems.map((row) => {
                         return (
                             <button className='suggest-box btn btn-default'
                                     onClick={() => HandleClick(row.id)}   
                             >
                                
                                <img src={row.photos_links} className='suggest-img'/> &#160; &#160;
                                <b className='items-suggest'>{row.name}</b>   
                             </button>
                             
                         );
                     })
                 }
            
            </div>
            <div></div>
            <div></div>
        </div>
    )
}


export default Autocomplete
