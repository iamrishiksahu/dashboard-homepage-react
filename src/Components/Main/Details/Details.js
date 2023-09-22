import React from 'react'
import './Details.css'

const Details = () => {
    return (
        <div className="details">

            <div className="student">
                <h3>Student</h3>
                <div className="data">

                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            badge
                        </span>
                        IMH/10059/19
                    </p>

                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            alternate_email
                        </span>
                        iamrishiksahu@gmail.com
                    </p>

                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        RISHIK KUMAR SAHU
                    </p>
                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            phone_in_talk
                        </span>
                        +91-8987400143
                    </p>
                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        156, H-5, BIT Mesra, 835215
                    </p>
                </div>
            </div>

            <div className="agent">
                <h3>Agent</h3>
                <div className="data">

                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            badge
                        </span>
                        AG-2023-24-990
                    </p>

                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            alternate_email
                        </span>
                        iamanagent@gmail.com
                    </p>

                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        AGENT KUMAR
                    </p>
                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            phone_in_talk
                        </span>
                        +91-9876543210
                    </p>
                    <p className='text-muted'>
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        D-32/1245, Lonavla East, Mumbai, 123456
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Details