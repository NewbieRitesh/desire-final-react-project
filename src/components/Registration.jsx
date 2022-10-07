import { useState } from "react";


const Registration = () => {
    // object
    const [name, setname] = useState({
        fname: "",
        username: "",
        city: "",
        email: "",
        password: "",
    });

    const [FnameError, setFnameError] = useState()
    const [usernameError, setusernameError] = useState()
    const [EmailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [confirmPassword, setconfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState()
    var [PasswordType, setPasswordType] = useState("password")
    var a;

    const vali = (evt) => {
        var name = evt.target.name
        var value = evt.target.value
        setname((pval) => {
            switch (name) {
                case "fname":
                    return {
                        fname: value,
                        email: pval.email,
                        city: pval.city,
                        password: pval.password,
                        username: pval.username,
                    }
                case "email":
                    return {
                        fname: pval.fname,
                        email: value,
                        city: pval.city,
                        password: pval.password,
                        username: pval.username,
                    }
                case "city":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: value,
                        password: pval.password,
                        username: pval.username,
                    }
                case "username":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: pval.username,
                        password: pval.password,
                        username: value,
                    }
                case "password":
                    return {
                        fname: pval.fname,
                        email: pval.email,
                        city: pval.city,
                        password: value,
                        username: pval.username,
                    }
                default:
            }
        })
    }
    const handleName = () => {
        if (name.fname.length < 6) {
            setFnameError(true)
            return a = 1;
        }
        else {
            setFnameError(false)
        }
    }
    const Handleusernameerror = () => {
        if (name.username.length < 3 || name.username.length > 20) {
            setusernameError(true)
            return a = 1;
        }
    }
    const handleEmail = () => {
        if (name.email.length < 3) {
            setEmailError(true)
            return a = 1;
        }
        else {
            setEmailError(false)
        }
    }
    const handlPassword = () => {
        if (name.password.length < 8) {
            setPasswordError(true)
            return a = 1;
        }
        else {
            if (name.password.length > 16) {
                setPasswordError(true)
                return a = 1;
            }
            else {
                setPasswordError(false)
            }
        }
    }
    const confirmpass = (evt) => {
        setconfirmPassword(evt.target.value)
    }
    const handleConfirmPassword = () => {
        if (name.password !== confirmPassword) {
            setConfirmPasswordError(true)
            return a = 1;
        }
        else {
            setConfirmPasswordError(false)
        }
    }
    const showPassword = () => {

        if (PasswordType === "password") {
            setPasswordType("text")
            return a = 1;
        }
        else {
            setPasswordType("password")
        }
    }
    const formSubmit = (e) => {
        handleName()
        handleEmail()
        Handleusernameerror()
        handlPassword()
        handleConfirmPassword()
        if (a == 1) {
            e.preventDefault();
        }
    }
    return (
        <>
            <h1 className="mt-4 text-center text-white text-2xl">Registration Form</h1>
            <form onSubmit={formSubmit} className="m-4 flex justify-center">
                <div className="p-4 border rounded-xl flex flex-col backdrop-blur-sm">
                    <input type='text' name="fname" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" placeholder="Full Name" onChange={vali} required />{FnameError ? <span className="text-red-400">*Full name should atleast 6 character</span> : ""}
                    <input type="text" name="username" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" placeholder="Username" onChange={vali} required />{usernameError ? <span className="text-red-400">*Invalid Username</span> : ""}
                    <input type='email' name="email" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" placeholder="Email" onChange={vali} required />{EmailError ? <span className="text-red-400">*Invalid Email</span> : ""}
                    <select name="city" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent " onChange={vali}>
                        <option className="backdrop-blur-sm text-black" value="" selected disabled>City</option>
                        <option className="backdrop-blur-sm text-black" value="Modasa">Modasa</option>
                        <option className="backdrop-blur-sm text-black" value="Ahmadabad">Ahmadabad</option>
                        <option className="backdrop-blur-sm text-black" value="Gandhinagar">Gandhinagar</option>
                        <option className="backdrop-blur-sm text-black" value="Surat">Surat</option>
                        <option className="backdrop-blur-sm text-black" value="Rajkot">Rajkot</option>
                    </select>
                    <input name="password" className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" type={PasswordType} placeholder="Password" onChange={vali} />{passwordError ? <span className="text-red-400">*Password Length Must Be Greater 8 or Lessthen 16</span> : ""}
                    <input type={PasswordType} className="p-1 mx-4 border-b-2 focus:outline-none sm:w-80 text-slate-100 placeholder:text-slate-100 placeholder:text-center placeholder:text-lg text-center text-lg bg-transparent" placeholder="Confirm Password" onChange={confirmpass} />{confirmPasswordError ? <span className="text-red-400">*Password Not Match</span> : ""}
                    <span className="p-1 mx-4 focus:outline-none sm:w-80 text-slate-100 text-sm"><input onClick={showPassword} type="checkbox" /> Show Password</span>
                    <div className="flex mx-4 p-1 sm:w-80 justify-center">
                        <input type='submit' className="bg-white m-1 w-1/3" value="Submit" />
                        <input type='reset' className="bg-white m-1 w-1/3" value="Reset" />
                    </div>
                </div>
            </form>
            <div className="flex justify-center">
                <div className="mx-4 p-4 sm:w-96 border rounded-xl flex flex-col flex-wrap text-white text-center backdrop-blur-sm">
                    <span>Name: {name.fname}</span>
                    <span>Username: {name.username}</span>
                    <span>City: {name.city}</span>
                    <span>Email: {name.email}</span>
                    <span>Password: {name.password}</span>
                </div>
            </div>
        </>
    )
}
export default Registration;
