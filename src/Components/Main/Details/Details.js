import React from 'react'
import './Details.css'

const Details = () => {
    return (
        <div className="details">

            <div className="student">
                <h3>Student</h3>
                <div className="data">

                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            badge
                        </span>
                        IMH/10059/19
                    </small>

                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            alternate_email
                        </span>
                        iamrishiksahu@gmail.com
                    </small>

                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        RISHIK KUMAR SAHU
                    </small>
                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            phone_in_talk
                        </span>
                        +91-8987400143
                    </small>
                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            location_on
                        </span>
                        156, H-5, BIT Mesra, 835215
                    </small>
                </div>
            </div>

            <div className="agent">
                <h3>Agent</h3>
                <div className="data">

                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            badge
                        </span>
                        AG-2023-24-990
                    </small>

                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            alternate_email
                        </span>
                        iamanagent@gmail.com
                    </small>

                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        AGENT KUMAR
                    </small>
                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            phone_in_talk
                        </span>
                        +91-9876543210
                    </small>
                    <small className='text-muted'>
                        <span class="material-symbols-outlined">
                            location_on
                        </span>
                        D-32/1245, Lonavla East, Mumbai, 123456
                    </small>
                </div>

            </div>

        </div>
    )
}

export default Details