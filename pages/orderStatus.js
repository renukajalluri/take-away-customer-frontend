import Order from "../components/Order/Confirmed";
import { useEffect,useContext,useState } from "react"
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header/Header";
const OrderStatus = ()=>{
  
    return(
        <div>
             <Header/>
           <Order/>
        </div>
    )
}

export default OrderStatus