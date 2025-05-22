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
      <div className="projects mt-3">
        <h1 className="text-center mb-4">
          All Projects
        </h1>

        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center border w-75 rounded mb-3">
            <input type="text" onChange={e=>setSearchKey(e.target.value)} className='form-control w-100 mx-auto' placeholder='Search by technologies'/>
            <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{padding:"10px"}}></i>

          </div>
        </div>
      </div>


      <Row className="container-fluid mt-5 ps-5">
        {allProjects?.length>0?allProjects.map(project=>(<Col sm={12} md={6} lg={3} >
          <ProjectCard project={project} />
        </Col>
        )):
        <p className='text-danger fw-bolder ms-2'>Nothing to display</p>
      }
      </Row>
    </>
  )
}

export default Projects
