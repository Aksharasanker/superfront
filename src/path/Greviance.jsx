import React, { useEffect, } from 'react'
import { getUserGrvApi } from '../services/allApi'
import MyGrv from '../components/MyGrv'
import Usergrv from '../components/Usergrv'


function Greviance() {

    const [usergrv, setUserGrv] = useState([])
    useEffect(() => {
        getUsergrv()
    }, [])

    const getUsergrv = async () => {
        const result = await getUserGrvApi()
        setUserGrv(result.data)
    }
    console.log(usergrv)
    // const deleteProject= async(id)=>{
    //   if(sessionStorage.getItem("token")){
    //const token=sessionStorage.getItem("token")
    ///
    //    const reqHeader={
    //        "Content-Type":"application/json",
    //    "Authorization":`Bearer ${token}`
    //   }
    //   const result=await deleteAProjectApi(id,reqHeader)
    //   console.log(result);
    // if(result.status==200){
    //      getAllUserProject()
    //  }
    //  else{
    //   alert('Something went wrong')
    //    }

    //    }

    //}   

    return (
        <>

            <h1>My Greviance</h1>

            <div className='col-md-6 p-3'>
                <h3><span className='text-primary'>Greviances</span></h3>
                {usergrv?.map((item) => (
                    <Usergrv grv={item} />
                ))}
            </div>


        </>
    )
}

export default Greviance