

const translations = (mounted,key) =>{
   
    if(mounted){
        const data = JSON.parse(localStorage.getItem('translations'));
        return data[key]
    }

}

export default translations