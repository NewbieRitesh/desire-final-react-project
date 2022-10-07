import { useState } from "react";
const Login = () => {
    var [PasswordType, setPasswordType] = useState("password")
    // var a;
    const showPassword = () => {
        if (PasswordType === "password") {
            setPasswordType("text");
        }
        else {
            setPasswordType("password")
        }
    }
    return (
        <>
        <h1 className="mt-4 text-center text-white text-2xl">Login</h1>
            <form className="m-4 flex justify-center">
                <div className="p-4 border rounded-xl flex flex-col justify-center backdrop-blur-sm">
                    <div className="flex flex-col">
                        <input type="text" name="username" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" placeholder="Username" required />
                        <input name="password" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" type={PasswordType} placeholder="Password" />
                        <span className="p-1 mx-4 focus:outline-none sm:w-80 text-slate-100 text-sm"><input onClick={showPassword} type="checkbox" /> Show Password</span>
                    </div>
                    <div className="flex mx-4 p-1 sm:w-80 justify-center">
                        <input type='submit' className="text-lg bg-transperent border rounded-full text-white m-1 w-1/3" value="Submit" />
                        <input type='reset' className="text-lg bg-transperent border rounded-full text-white m-1 w-1/3" value="Reset" />
                    </div>
                </div>
            </form></>
    )
}
export default Login;