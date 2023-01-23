import Header from "../../components/Header/Header";
import RestaurantMenu from "../../components/restaurant/RestaurantProfile";
import { useRouter } from 'next/router'
const RestaurantDetails = ()=>{
    const router = useRouter()
    return(
       
        <div>
            <Header/>
        <div>
           <RestaurantMenu ownerId={router.query.ownerId}/>
        </div>
        </div>
  
    )
}

export default RestaurantDetails