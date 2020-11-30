import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonProfile = () =>{
    return(
        <div className='skeleton-wrapper'>
            <div className='skeleton-profile'>
                <SkeletonElement type='profile'/>
                <div>
                <SkeletonElement type='text'/>
                <SkeletonElement type='text'/>
                <SkeletonElement type='text'/>
                </div>
            </div>

        </div>
    )
}

export default SkeletonProfile;