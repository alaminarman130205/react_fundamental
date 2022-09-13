const addToLocalStorage = () =>{
    const idinput = document.getElementById('storage_id');
    const id = idinput.value; 
    const value1 = document.getElementById('storage_value');
    const value = value1.value; 
    if(id && value){

    localStorage.setItem(id, value);
    idinput.value = "";
    value1.value = "";

    }else {
        console.log('nothing to added sir ');
    }
}

// local storage a array othoba object rakete caile json stringyfy kore rakte hobe 