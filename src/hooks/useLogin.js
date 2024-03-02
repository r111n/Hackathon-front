/* eslint-disable no-unused-vars */
import axios from "axios"

const useLogin = async(email, password, setUser, setIsLoading ) => {
    setIsLoading(true)
    const data = {
        email: email,
        password: password
    }
    try{
        const response = await axios.post(`http://192.168.0.69:1234/login`, data)
        if(response.status >= 200 || response.status < 300){
            setUser(response.data)
            setIsLoading(false)
        }
    }catch(error){
        console.error("Login errro:", error.message)
    }
}