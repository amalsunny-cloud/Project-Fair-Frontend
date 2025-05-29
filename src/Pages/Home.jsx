import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import titleImage from '../assets/images/pr-integrated-communications.gif'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../Services/allAPI'



function Home() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)


  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
    
  },[])

const navigate = useNavigate();
const [allProjects,setAllProjects] = useState([])


const getHomeProjects=async()=>{
  //api call

  const result = await getHomeProjectAPI()
    console.log(result);

    if(result.status==200){
      setAllProjects(result.data)
    }
    else{
      console.log(result);
    }
    
  
}

  const handleProjectsPage = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects');
    }
    else{
      toast.warning("Please login to explore more projects...")
    }
  }

  console.log(allProjects);
  
  return (
    <>
      <div className="container-fluid bg-primary" style={{height:"90vh",width:"100%",paddingLeft:"90px"}}>
        <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
                <h1 style={{fontSize:"80px"}} className='fw-bolder text-light mt-5 pt-2'><i className='fa-solid fa-list-check me-2'></i>Project Fair</h1>

                    <p className='text-light pt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis quaerat nihil adipisci cupiditate, eveniet dolore beatae nemo consequuntur laudantium?
                    </p>

                    {isLoggedIn?
                    <Link to={'/dashboard'} className='btn btn-warning'>Manage Your Projects</Link>:
                    <Link to={'/login'} className='btn btn-warning' style={{marginLeft:"210px",marginTop:"10px"}}>Start to Explore</Link>
}
            </Col>
            <Col sm={12} md={6} style={{paddingLeft:"40px"}}>
                <img src={titleImage} style={{marginTop:"80px",borderRadius:"20px"}} width={"400px"} alt="" />
            
            </Col>
        </Row>
      </div>


{/* allProjects */}


      <div className="allProject mt-5">
        <h1 className='text-center text-primary fw-bolder'>Explore Your Projects</h1>

        <marquee scrollAmount={25}>

          <Row>
        {
          allProjects.length>0?allProjects.map(project=>(
            <Col sm={12} md={6} lg={4}>
                <ProjectCard project={project}/>
            </Col>
        )):null
      }
      </Row>
        </marquee>
      </div>


      <div className="text-center">
        <p className='btn fw-bold' style={{textDecoration:"underline",marginTop:"25px"}} onClick={handleProjectsPage}>View more projects</p>
      </div>

      <ToastContainer theme="colored" autoClose={2000} position="top-center"/>
      
    </>
  )
}

export default Home
