import React, { useContext, useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';
import { addProjectResponseContext } from '../ContextAPI/ContextShare';


function AddProject() {

  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)


  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);
    setProjectData({
      title:"",languages:"",overview:"",github:"",website:"",projectImage:""
    })

    setPreview("")
  }


  const handleShow = () => setShow(true);
  const [projectData,setProjectData] = useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })


  const [preview,setPreview] = useState("")
  const [fileStatus,setFileStatus] = useState(false)

  useEffect(()=>{
    if(projectData.projectImage.type == "image/png" || projectData.projectImage.type=='image/jpg' || projectData.projectImage.type == 'image/jpeg'){
      console.log("generate url");  
      setFileStatus(false)
      setPreview(URL.createObjectURL(projectData.projectImage));
      
    }
    else{
      console.log("Please upload following formats only (png/jpg/jpeg");
      setFileStatus(true)
      setProjectData({...projectData,projectImage:""})
    }
  },[projectData.projectImage])

  console.log(projectData);
  
  
  const handleAddProject=async()=>{
    const {title,languages,overview,github,website,projectImage} = projectData
    if(!title || !languages || !overview || !github || !website || !projectImage){
      toast.info("Please fill missing fields")
    }
    else{
      //reqBody = formData

      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)

      const token = sessionStorage.getItem("token")

      //reqHeader
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

        //api call

        try{
          const result= await addProjectAPI(reqBody,reqHeader);
          console.log(result);
          if(result.status ==200){
            toast.success("Project uploaded")
            handleClose()
            setAddProjectResponse()
          }
          else{
            toast.warning(result.response.data);
          }
          
        }catch(err){
          console.log(err);
          
        }
      }
    }
  }
  

  return (
    <>
        <Button variant="dark" onClick={handleShow} className='me-5 mb-3 rounded'>
          Add-Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
              <div className="col-6">

                <label>
                  <input type="file" style={{display:"none"}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}/>
                  <img src={preview?preview:"https://vectorified.com/images/image-placeholder-icon-15.png"} alt="" width={"100%"} height={"350px"}/>
                </label>
                {fileStatus&& <div className='mb-3 text-danger'>Please upload following formats only(png/jpg/jpeg)</div>}
              </div>
              <div className="col-6">

                <Form>
                  <div className="mb-2">
                <FloatingLabel controlId="floatingTitle" label="Project-Title">
                    <Form.Control type="text" placeholder="Enter your Project Title" onChange={e=>setProjectData({...projectData,title:e.target.value})}/>
                </FloatingLabel>
                </div>

                <div  className='mb-2'>
                <FloatingLabel controlId="floatinglanguage" label="Language-used">
                    <Form.Control type="text" placeholder="Enter your Project Language" onChange={e=>setProjectData({...projectData,languages:e.target.value})}/>
                </FloatingLabel>
                </div>
                
                
                <div className='mb-2'>
                <FloatingLabel controlId="floatingOverview" label="Project-Overview">
                    <Form.Control type="text" placeholder="Overview" onChange={e=>setProjectData({...projectData,overview:e.target.value})}/>
                </FloatingLabel>
                </div>

                <div  className='mb-2'>
                <FloatingLabel controlId="floatingGit" label="Github Link">
                    <Form.Control type="text" placeholder="Github" onChange={e=>setProjectData({...projectData,github:e.target.value})}/>
                </FloatingLabel>
                </div>


                <div  className='mb-2'>
                <FloatingLabel controlId="floatingTitle" label="Website-Link">
                    <Form.Control type="text" placeholder="Enter your Project Title" onChange={e=>setProjectData({...projectData,website:e.target.value})}/>
                </FloatingLabel>
                </div>
                
                </Form>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddProject}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  )
}

export default AddProject
