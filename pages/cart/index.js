import AuthContext from "../../stores/authContext"
import Cart from "../../components/Cart/Cart";
import { useEffect,useContext,useState } from "react"
import { useRouter } from "next/dist/client/router";
import Header from "../../components/Header/Header"
const CartDetails = ()=>{
 
    return(
        <div>
            <Header/>
           <Cart/>
        </div>
    )
}

export default CartDetails