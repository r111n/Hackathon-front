import { useState } from "react"
import { useNavigate } from "react-router"
import { useLogin } from "../../hooks/useLogin"
import { useUserStore } from "../../store/UserStore"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {setIsLoading, setUser} = useUserStore()

  const handleEmail = (e) => {
      setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleLogin = () =>{
    setIsLoading(true)
    const data = {
      email: email,
      password: password,
      role: "employer"
    }
    useLogin(data, setUser, setIsLoading, navigate)
  }
  return (
    <>
    <div className="w-full grid grid-cols-2 h-[100vh]">
        <div className="flex justify-center items-center flex-col">
            <div className="absolute top-0 left-0 p-4">
              <span className="text-lg hover:cursor-pointer" onClick={() => navigate('/')}>Back</span>
            </div>
            <div className="grid gap-10 w-[60%]">
                <div>
                <h4 className="text-semibold text-blue-600">Hack-a-Job</h4>
                <h1 className="text-8xl font-bold text-slate-800">Log In</h1>
                </div>
                <div className="grid gap-2">
                  <div className="p-2">
                    <label>Email</label><br />
                    <input type="text" className="px-6 py-4 bg-blue-100 w-[100%]" onChange={handleEmail}/>
                  </div>
                 <div className="p-2">
                    <label>Password</label><br />
                    <input type="text" className="px-6 py-4 w-[100%] bg-blue-100" onChange={handlePassword}/>
                 </div>
                 <div className="px-2">
                 <button className="px-8 py-3 rounded-md bg-blue-600 font-bold text-slate-50 text-lg" onClick={handleLogin}>Log in</button>
                 </div>
                </div>
            </div>
        </div>
        <div className="w-full rounded-tl-[4rem] rounded-bl-[4rem] bg-blue-600">
          asdsa
        </div>
    </div>
    </>
  )
}

export default Login