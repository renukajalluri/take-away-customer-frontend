
// import AuthContext from "../../stores/authContext"
import Order from "../components/Order/Order";
import { useEffect,useContext,useState } from "react"
import { useRouter } from "next/dist/client/router";
import Header from '../components/Header/Header'
import FeedbackForm from '../components/Order/FeedBack'
const  Feedback= ()=>{
    // const token =  useContext(AuthContext)
    // const router  = useRouter()
    // useEffect(() => {
    //     if(!token){
    //         router.push('/login')
    //     }
    // })
    return(
        <div>
            <Header/>
            <FeedbackForm/>
        </div>
    )
}

export default Feedback