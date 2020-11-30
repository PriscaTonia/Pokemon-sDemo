import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonProfile from '../skeletons/SkeletonProfile';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    useEffect(()=>{
        setTimeout(
            axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res =>{
                const data = res.data;
                setProfile(data);
                
            })
            )
    }, 3000)
       
        return(
            <div className=' profile'>
                <h1 className='text-center py-2'>Profile</h1>
                   
                {profile && 
        
                    <div className=' p-2' key={profile.id}>
                        <div >
                            <h5>
                                {profile.name}
                            </h5>
                            <p >
                              Phone:  {profile.phone} <br />
                               Email:  {profile.email}
                            </p>
                        </div>
                    </div> 
                    
                    }

                   {!profile &&  <SkeletonProfile />}
                </div>
        )
}

export default Profile