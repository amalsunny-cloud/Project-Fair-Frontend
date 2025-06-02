import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import prjctCard from '../assets/people-working-in-office.png'
import { server_url } from '../Services/serverurl';

function ProjectCard({project}) {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <Card style={{ width: '18rem' }} className='mt-5'>
      <Card.Img variant="top" src={prjctCard} width={"100%"} onClick={handleShow} />
      <Card.Body>
        <Card.Title style={{color:"	rgb(255, 158, 2)"}}>{project?.title}</Card.Title>
      </Card.Body>
    </Card>

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
            <Row>
              <Col>
                  <img src={`${server_url}/uploads/${project?.projectImage}`} width={"100%"} alt="" />
              </Col>
              <Col>
                  <h2>{project?.title}</h2>
                  <h3><span className='text-warning'>Languages used</span>:{project?.languages}</h3>
                  <p className='fw-bolder'><span className='text-success'>{project?.overview}</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi, aperiam molestiae esse vel autem.</p>
      
              </Col>
            </Row>

            <div className="mt-2">
                <a href={project?.github} target='_blank' className='me-3 btn text-dark'><i className='fa-brands fa-github fa-2x'></i></a>
                <a href={project?.website} target='_blank' className='me-3 btn text-dark'><i className='fa-solid fa-link fa-2x'></i></a>
            </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard
