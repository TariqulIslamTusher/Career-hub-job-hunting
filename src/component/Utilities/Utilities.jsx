// make the handler to view details of the single card in a container

export function addToLocalStorage(title){
    let applyJob = {}

    const storedCart = localStorage.getItem('cart')

    if(storedCart){
        applyJob = JSON.parse(storedCart)
    }

    let qty = applyJob[title]
    if(qty){
        confirm('oh no!!! You already applied here, press ok to exit')
        if(!confirm){
            const newQty= qty+1
            applyJob[title] = newQty
        } else{
            return;
        }
    } else{
        
        applyJob[title] = 1
    }

    localStorage.setItem('cart', JSON.stringify(applyJob))
}


export function getItemFromLocalStoreage () {
    
}