import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const getApplicants = async() => {
    const response = await axios.get("http://192.168.0.69:1234/applicants")
    return response.data
}

const addApplicant = async(data) =>{
    return await axios.post(`http://192.168.0.69:1234/applicants`, data)
} 

const useGetApplicants = () => {
    return useQuery({queryKey: ["applicant"], queryFn: getApplicants, refetchOnWindowFocus: false})
}

const useAddApplicant = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: addApplicant,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["applicant"]})
        },
    })
}