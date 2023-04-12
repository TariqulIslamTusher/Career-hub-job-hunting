// make the handler to view details of the single card in a container

import { toast } from "react-toastify";


export const notifySuccess = ()=>{
    toast.success('Applied your cv',{position: 'top-center'})
}

export const notifyError = ()=>{
    toast.error('You can not apply sevaral time',{ position: 'top-center'})
}

export function addToLocalStorage(id){
    let applyJob = {}

    const storedCart = localStorage.getItem('cart')

    if(storedCart){
        applyJob = JSON.parse(storedCart)
    } 

    let qty = applyJob[id]
    if(qty){
        notifyError()
    } else{
        notifySuccess()
        applyJob[id] = 1
    }

    localStorage.setItem('cart', JSON.stringify(applyJob))
}


export function getItemFromLocalStoreage () {
    const getItemFromLS = localStorage.getItem('cart')
    const Cart = JSON.parse(getItemFromLS)

    return Cart
}




//delete the local storage

export function deleteLocalStorage (){
    localStorage.clear()
}

