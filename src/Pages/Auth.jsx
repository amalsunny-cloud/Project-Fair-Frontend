import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { TokenAuthContext } from '../ContextAPI/TokenAuth';


function Auth({register}) {

    const {isAuthorized,setIsAuthorized} = useContext(TokenAuthContext)
    const isRegisterForm = register?true:false
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
            username:"",email:"",password:""
        }
    )
        
    const handleRegister = async(e) =>{
        e.preventDefault()
        const {username,email,password} = userData

        if(!username || !email || !password){
            toast.info("Please fill missing fields")
        }
        else{
            //api call
            const result = await registerAPI(userData)
            console.log(result);


            if(result.status==200){
                toast.success(`${result.data.username} has successfully registered`)
                navigate('/login')
                setUserData({username:"",email:"",password:""})
            }
            else{
                toast.warning(result.response.data)
            }
            
        }
    }

    const handleLogin = async(e)=>{
        e.preventDefault()
        const {email,password} = userData
        if(!email || !password){
            toast.info("Please fill missing fields")
        }
        else{
            try{
                //proceed to api call

                const result = await loginAPI({email,password})

                if(result.status==200){
                    sessionStorage.setItem("username",result.data.existingUser.username)

                    sessionStorage.setItem("token",result.data.token);
                    setIsAuthorized(true)
                    navigate('/')
                    setUserData({username:"",email:"",password:""})
                }
                else{
                    toast.warning(result.response.data)
                }
            }
            catch(err){
                console.log(err);
                
            }
        }
    }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
            <div className="w-75 container">
                <Link to={'/'} style={{color:"blue",textDecoration:"none",fontWeight:"bolder"}}><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>


                <div className="card shadow p-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" width={"100%"} className='rounded-start'/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                            <h1 className='fw-bolder text-primary mt-5 pt-2'><i className='fa-solid fa-list-check me-2'></i>Project Fair</h1>

                                <h5 className='text-primary fw-bolder text-center'>
                                    {
                                        isRegisterForm?'Sign-Up to your Account':'Sign-In your Account'
                                    }
                                </h5>



                                <Form className='text-primary w-100'>
                                    {
                                        isRegisterForm&&
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" placeholder="Enter your name" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username}/>
                                        </Form.Group>
                                    }

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="Enter your email" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}/>
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="exampleForm.Controlpswd">
                                            <Form.Control type="password" placeholder="Enter your password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}/>
                                        </Form.Group>

                                        {
                                            isRegisterForm?
                                            <div className='mt-3'>
                                                <button className='btn btn-warning' onClick={handleRegister}>Register</button>
                                                <p className='mt-2 fw-bolder'>Already have an Acoount? Click here to
                                                    <Link to={'/login'} style={{textDecoration:"none",color:"green"}}> Login</Link>
                                                </p>
                                            </div>:
                                            <div className='mt-3'>
                                                <button className="btn btn-success text-light" onClick={handleLogin}>Login</button>
                                                <p className='mt-2 fw-bolder'>New User? Click here to 
                                                    <Link to={'/register'} style={{textDecoration:"none",color:"red"}}> Register</Link>
                                                </p>
                                            </div>
                                        }



                                       
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <ToastContainer />

    </>
  )
}

export default Auth
