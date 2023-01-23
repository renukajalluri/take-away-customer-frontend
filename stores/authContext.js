import { createContext,  } from "react";
import {useEffect,useState} from "react"



const AuthContext = createContext({
    // user:null,
   token:null
    
})

export const AuthContextProvider = ({children})=>{
  const [token,setToken] = useState(null)
    useEffect(()=>{
        if(window.localStorage.userToken){
          setToken(window.localStorage.getItem("userToken"))
        }
      })

    // const [user,setUser] = useState("");
    // console.log(token)
 
    return(
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext