export const targetArr = window.location.state;


function ModifyProduct (newData,type,index) {


    if(type === 'ADD') {
        targetArr.push(newData)  

    } else if (type === 'REMOVE' && index !== null && targetArr.length > 1) {
       
        targetArr.slice(index,1)

        

    } else if (type === 'REMOVE' ) {
        targetArr.pop()
    }

    window.location.state = targetArr
    return targetArr
}

export default ModifyProduct;