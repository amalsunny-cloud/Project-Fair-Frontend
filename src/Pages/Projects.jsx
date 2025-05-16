import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { getAllProjectAPI } from '../Services/allAPI'


function Projects() {

  const [allProjects,setAllProjects] = useState([])
  const [searchKey,setSearchKey] = useState("")

  const getAllProjects = async()=>{
    const token = sessionStorage.getItem("token")
    //reqHeader
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }

    //api call
      const result = await getAllProjectAPI(reqHeader,searchKey)
        console.log(result);
    
        if(result.status==200){
          setAllProjects(result.data)
        }
        else{
          console.log(result);
        }
  }
}

  useEffect(()=>{
    getAllProjects()
  },[searchKey])

  // console.log(allProjects);
  console.log(searchKey);
  
  return (
    <>
    <Header/>
      <div className="projects mt-5">
        <h1 className="text-center mb-5">
          All Projects
        </h1>

        <div className="d-flex jutify-content-center align-items-center">
          <div className="d-flex border w-50 rounded mb-3 ms-5">
            <input type="text" onChange={e=>setSearchKey(e.target.value)} className='form-control' placeholder='Search by technologies'/>

            <i style={{marginLeft:"-50px"}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
      </div>


      <Row className="container-fluid mt-5">
        {allProjects?.length>0?allProjects.map(project=>(<Col sm={12} md={6} lg={3} >
          <ProjectCard project={project}/>
        </Col>
        )):
        <p className='text-danger fw-bolder ms-2'>Nothing to display</p>
      }
      </Row>
    </>
  )
}

export default Projects
