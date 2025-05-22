import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { TokenAuthContext } from '../ContextAPI/TokenAuth'


function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized} = useContext(TokenAuthContext)
  
  const navigate = useNavigate()

  const logout = () =>{
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    navigate('/')
  }
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">
            <Link to={'/'} style={{textDecoration:"none"}}>
                <i className='fa-solid fa-list-check me-2'></i>
            </Link>
            Project Fair
          </Navbar.Brand>
          {insideDashboard&&<button className='btn btn-danger rounded' onClick={logout}>Logout</button>}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
