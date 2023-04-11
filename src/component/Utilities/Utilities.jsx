// make the handler to view details of the single card in a container

export function addToLocalStorage(id){
    let applyJob = {}

    const storedCart = localStorage.getItem('cart')

    if(storedCart){
        applyJob = JSON.parse(storedCart)
    }

    let qty = applyJob[id]
    if(qty){
        confirm('oh no!!! You already applied here, press ok to exit')
        if(!confirm){
            const newQty= qty+1
            applyJob[id] = newQty
        } else{
            return;
        }
    } else{
        
        applyJob[id] = 1
    }

    localStorage.setItem('cart', JSON.stringify(applyJob))
}


export function getItemFromLocalStoreage () {
    const getItemFromLS = localStorage.getItem('cart')
    const Cart = JSON.parse(getItemFromLS)

    return Cart
}


//delete the local storeage