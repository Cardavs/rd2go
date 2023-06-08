import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    const {title} = props;
  return (
    <div className='BreadCrumb'>
        <div className="xxl-container">
            <div className="line-row">
                <div className="onh-container">
                    <p className='text-center'>
                        <Link to="/" className='text-darker'>
                            Home &nbsp;
                        </Link> 
                        / {title}
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BreadCrumb