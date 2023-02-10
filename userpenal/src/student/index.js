/* eslint-disable */ 
import { CButton } from '@coreui/react'
import React ,{useEffect} from 'react'
import background from './../assets/images/18759.jpg'
function index() {
  const clickdirect = () =>{
    window.location.href = `/coed/app/login`
  }
  
  return (
<div class="container ">
  <div className=''>
    <img src={background} class="img-fluid rounded"/>  
      <div class="h1 text-center shadow-sm p-3 mb-5 bg-body rounded text-danger fw-bolder fs-1 figure-img img-fluid" > 
      එකම එකතු කරන්නා &nbsp; ||  The One Collector  ||  ஒரு சேகரிப்பாளர்
    </div>
    <CButton onClick={()=>{clickdirect()}}>Click</CButton>
  </div>
  
</div>
  )
}

export default index