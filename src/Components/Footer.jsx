import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5 pt-3'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset' style={{border:"1px solid grey",padding:"11px 12px",borderRadius:"50%",backgroundColor:"white"}}>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset' style={{border:"1px solid grey",padding:"10px",borderRadius:"50%",backgroundColor:"white"}}>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset' style={{border:"1px solid grey",padding:"10px",borderRadius:"50%",backgroundColor:"white"}}>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset' style={{border:"1px solid grey",padding:"10px",borderRadius:"50%",backgroundColor:"white"}}>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset' style={{border:"1px solid grey",padding:"10px",borderRadius:"50%",backgroundColor:"white"}}>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset' style={{border:"1px solid grey",padding:"10px",borderRadius:"50%",backgroundColor:"white"}}>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Project Fair
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' style={{textDecoration:"none"}} href=''>
          projectfair.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
