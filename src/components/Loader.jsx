import React from 'react';
// import LoaderPic from '../images/lens.png';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css"

const Loader = () => {

    // Check out https://www.npmjs.com/package/react-loading-skeleton 
    // Also check out bwstrakins in simplyVite folder for an alternative mode of rendering the above
  return (
    <div className="loader">
        <Skeleton count={5} className='skeleton' />
    </div>
  )
}

export default Loader