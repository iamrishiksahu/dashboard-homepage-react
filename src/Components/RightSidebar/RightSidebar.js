import React, {useState} from 'react'
import './RightSidebar.css'
import PopupComponent from '../Main/PopupComponent/PopupComponent';

const RightSidebar = () => {

    const handleMenuClick =  () => {
        const sideMenu =  document.querySelector('aside');
        sideMenu.style.display = 'block';
    }

    const [openPopup, setOpenPopup] = useState(false);

    const applyToNewUniversity = () => {

        setOpenPopup(true);

    }
    return (
        <div className="right-side">
            {openPopup? <PopupComponent setOpenPopup={setOpenPopup}/> : <></>}

            <div className="top">

                <span class="material-icons hamburger" onClick={handleMenuClick}>
                    menu
                </span>

                <div className="right">
                    <button id='apply-btn'>Apply Now</button>
                    <span class="material-icons">
                        notifications
                    </span>
                    <img className='profile-picture' src='/profile-picture-placeholder.jpg' alt='profile_picture' />
                </div>

            </div>

            {/** ----------------------------- STUDENT APPLICATIONS --------------------------- */}
            <div className="student-application">
                <h2>Student Applications</h2>

                <div className="applications-list">
                    <div className="application-item">
                        <h3>Birla Institute of Technology, Mesra</h3>
                        <small>Integrated MSc in Mathematics & Computing</small>
                    </div>
                    <div className="application-item">
                        <h3>National Institute of Technology, Rourkela</h3>
                        <small>Integrated MSc in Physics</small>
                    </div>
                    <div className="application-item">
                        <h3>Indian Institute of Technology, KGP</h3>
                        <small>Bachelor of Technology in Civil Engineering</small>
                    </div>

                    {/* <div className="new-application">
                        <button className='new-univ-apply' onClick={applyToNewUniversity}>Apply Now to Neew University</button>
                    </div> */}
                </div>
            </div>

            {/** ----------------------------- STUDENT TIMELINE --------------------------- */}

            <div className="timeline">
                <h2>Student Timeline</h2>
                <div className="timeline-list">
                    <ul>
                        <li className='completed'>Application Submitted by Agent</li>
                        <li className='completed'>Under Rapid Review</li>
                        <li className='completed'>Application Submitted to University</li>
                        <li className='completed'>Admission Confirmed</li>
                        <li className='completed'>Deposit Made</li>
                        <li className='active'>1:20 Applied</li>
                        <li>1:20 Recieved</li>
                        <li>13 New Alerts</li>

                    </ul>
                </div>

            </div>

        </div>
    )
}

export default RightSidebar