import axios from "axios"
export const useLogin = async(data , setUser, setIsLoading, navigate) => {
    setIsLoading(true)
    try{
        const response = await axios.post(`http://192.168.8.126:1234/login`, data)
        if(response.status >= 200 || response.status < 300){
            setUser(response.data)
            setIsLoading(false)
            console.log(response.data)
            console.log("hello")
            navigate("/application")
        }
    }catch(error){
        console.error("Login errro:", error.message)
    }
}