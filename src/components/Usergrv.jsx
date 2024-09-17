import React from 'react'
import { getUserGrvApi } from '../services/allApi'
import AddGreviance from './AddGrv'

function Usergrv({ }) {
    const [usergrev, setUserGrev] = useState([])
    useEffect(() => {
        getusergrev()
    }, [])

    const getusergrev = async () => {
        const result = await getUserGrvApi()
        setUserGrev(result.data)
    }
    console.log(usergrev)
    return (
        <p>

            
            <div>


                <div className='row p-5 my-4'>
                    <div className='col-md-6 p-3'>
                        <h3><span className='text-primary'>My Greviances</span></h3>
                        {usergrev?.map((item) => (
                            <AddGreviance usergrev={item} />
                        ))}
                    </div>

                    
                </div>




            </div>

        </p>
    )

}

export default Usergrv