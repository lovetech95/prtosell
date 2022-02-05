import React from 'react';
import { Link } from 'react-router-dom';
import './Autocomplete.css';

function Autocomplete(target_data) {

    const Listitems = target_data.target;
    const keyword = target_data.keyword;



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
                             <Link className='suggest-box btn btn-default'
                                     to={`Product/${row.id}`}
                             >
                                
                                <img src={row.photos_links} className='suggest-img'/> &#160; &#160;
                                <b className='items-suggest'>{row.name}</b>   
                             </Link>
                             
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
