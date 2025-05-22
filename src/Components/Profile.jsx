import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';


function Profile() {


  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{marginTop:"30px"}}>
          <div className="card shadow mt-3 p-3 me-2">
            <div className="d-flex justify-content-between">
              <h4>profile</h4>
              <button  onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
            </div>


           <Collapse in={open}>
           <div className="row justify-content-center p-4">
              <label className='d-flex justify-content-center'>
                <input type="file" style={{display:"none"}}/>
                <img width={'50%'} height={'auto'} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-Transparent.png" alt="profile" />


              </label>

              <div className="mt-5">
                <input type="text" placeholder='Github Link' className='form-control'/><br />
                <input type="text" placeholder='LinkedIn Link' className='form-control'/>

                <div className="d-grid mt-5">
                  <button className='btn btn-warning'>Update</button>
                </div>
              </div>
            </div>
           
           </Collapse>


          </div>
      </div>
    </>
  )
}

export default Profile
