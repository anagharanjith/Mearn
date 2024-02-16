import { Nav, Navbar, Container,Button } from 'react-bootstrap'
import './App.css'
import couplepic from './images/couplepic.jpg'

function App() {

  return (
    <>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-valentine" viewBox="0 0 16 16">
              <path d="M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132M2.25 4a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .5 0V4.5h1.25a.25.25 0 0 0 0-.5zm10 0a.25.25 0 1 0 0 .5h1.25v1.25a.25.25 0 1 0 .5 0v-1.5a.25.25 0 0 0-.25-.25zM2.5 10.25a.25.25 0 1 0-.5 0v1.5c0 .138.112.25.25.25h1.5a.25.25 0 1 0 0-.5H2.5zm11.5 0a.25.25 0 1 0-.5 0v1.25h-1.25a.25.25 0 1 0 0 .5h1.5a.25.25 0 0 0 .25-.25z" />
              <path fill-rule="evenodd" d="M0 2.994v-.06a1 1 0 0 1 .859-.99l13-1.857a1 1 0 0 1 1.141.99V2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zM1 3v10h14V3z" />
            </svg> E&N</Navbar.Brand>
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#home">OUR STORY</Nav.Link>
            <Nav.Link href="#features">TRAVEL & STAY</Nav.Link>
            <Nav.Link href="#pricing">REGISTRY</Nav.Link>
            <Nav.Link href="#pricing">Q & A</Nav.Link>
            <Nav.Link href="#pricing">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg> Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="row">
      <div style={{margin:'100px'}} className="col-6 d-flex justify-content-left flex-column">
          <p className='tsize2'>We 're getting Married</p>
          <h1 className='tsize1'>EMMA & NILES</h1>
          <p className='tsize3'>Friday, Oct. 20, 2035 <br />The Old Chapel, San Francisco</p>
          <Button style={{width:'130px',padding:'25px',borderRadius:'50px'}} variant="outline-dark">RSVP</Button>{' '}
      </div>
      <div style={{height:'400px',width:'400px'}} className="col-6 d-flex justify-content-right align-items-right couple">
        {/* <img src={couplepic} alt="" /> */}
      </div>
      </div>

    </>
  )
}

export default App
