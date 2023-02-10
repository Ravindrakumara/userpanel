/* eslint-disable */ 
import {useEffect,React,useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil, cilTrash
} from '@coreui/icons'

import apiService from 'src/service/apiService'

function serveylist() {
  const [formData, setformData] = useState([]);
  const [username,setUsername] = useState('')

  useEffect(() => {
    finduser()
    // serveyData()
  }, []);

  const finduser = async() =>{
    const respon = await apiService.getProfileInfo()
    setUsername(respon.data.username)
    setTimeout(()=> serveyData(respon.data.username),1000)
  }

  const serveyData = async(usr)=>{
    const respon = await apiService.getAll()
    const filterData = respon.data
    const x = filterData.filter(function(creature) {
      return creature.createUser === usr;
    });
    setformData(...formData,x)
  }
  

  const redirect = (x)=>{
    let id  = x.id
    window.location.href = `servey/form/${id}/`;  
  }
  
  return (
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>One minutes for succesfull life</strong>
        </CCardHeader>
        <CCardBody>
            <CTable>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Fullname</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">How do you feel about life in the present days?</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Are you engaged in any coping mechanisms?</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Would you like to consider spiritual engagement..?</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Are you prepared to allocate at least a minute daily..?</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Would you like to receive email ?</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Would you like to receive SMS ?</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Delete</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {formData && formData.map((data,index)=>(
                <CTableRow>
                  <CTableHeaderCell className="text-danger" key={data.id} scope="row">{index+1}</CTableHeaderCell>
                  <CTableDataCell className="text-primary">{new Date(data.createDate).toLocaleDateString()}</CTableDataCell>
                  <CTableDataCell>{data.fullname}</CTableDataCell>
                  <CTableDataCell>{data.address}</CTableDataCell>
                  <CTableDataCell>{data.phone}</CTableDataCell>
                  <CTableDataCell>{data.email}</CTableDataCell>
                  <CTableDataCell>{data.q1}</CTableDataCell>
                  <CTableDataCell>{data.q2}</CTableDataCell>
                  <CTableDataCell>{data.q3}</CTableDataCell>
                  <CTableDataCell>{data.q4}</CTableDataCell>
                  <CTableDataCell>{data.acceptsms}</CTableDataCell>
                  <CTableDataCell>{data.acceptemail}</CTableDataCell>
                  {/* <CTableDataCell>{data.softdeleteUser}</CTableDataCell> */}
                  <CTableDataCell>
                  <a onClick={()=>redirect(data)}  className="pe-auto" ><CIcon icon={cilPencil} className="text-primary" /></a>
                  &nbsp;
                  <CIcon icon={cilTrash} className="text-danger"/>
                  </CTableDataCell>
                </CTableRow>
                ))}
              </CTableBody>
            </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default serveylist