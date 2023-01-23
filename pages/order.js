// import AuthContext from "../../stores/authContext"
import Order from "../components/Order/Order";
import { useEffect,useContext,useState } from "react"
import { useRouter } from "next/dist/client/router";
import Header from '../components/Header/Header'
const CartDetails = ()=>{
  
    return(
        <div>
            <Header/>
          
           <Order/>
        </div>
    )
}

export default CartDetails