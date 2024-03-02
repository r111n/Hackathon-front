import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getUsers = async() => {
    const response = await axios.get("http://192.168.8.126:1234/users")
    return response.data
}

export const useGetUsers = () => {
    return useQuery({queryKey: ["users"], queryFn: getUsers, refetchOnWindowFocus: false})
}

