import './FormComponent.css'
import { useState } from 'react'
const FormComponent =()=>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword]=useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRePasswordColor] = useState('')


    const validteForm = (e)=>{
        e.preventDefault()
        
        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('ป้อนชื่อผู้ใช้มากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }

        if(repassword !=='' && repassword === password){
            setRepassword('')
            setRePasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validteForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}></input>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}></input>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type='password' value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:repasswordColor}}></input>
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default FormComponent