import React from 'react'
import './CourseInfo.css'

const CourseInfo = () => {
    return (
        <div className='course'>

            <h2>Course Information</h2>

            <div className="details">

                <div className="overview2">
                    <p><b>Course:</b> Integrated MSc. Maths & Comp.</p> <p><b>Intake:</b> 120 </p> <p><b>Year:</b> 2023-24</p>
                </div>


                <div className="box">
                    <img src='/profile-picture-placeholder.jpg' alt='Profile Picture' />
                    <div className="box-right">
                        <p><b>Status:</b> Pending</p>
                        <p><b>GRE:</b> 760</p>
                        <p><b>Application ID:</b> JH-09-23241-1235</p>
                        <p><b>English Profeciency:</b> Fluent</p>
                        <p><b>University ID:</b> UID135T34</p>
                        <p><b>Official Transcript:</b> Available(8.63)</p>
                        <p><b>Preferred Course:</b> BTech - Computer Science</p>
                    </div>
                </div>


            </div>

            <table style={{ overflowX: 'auto' }}>
                <thead>

                    <tr>
                        <th width="5%" align='center'>Check</th>
                        <th  >Document Type</th>
                        <th>Status</th>
                        <th>Third Column</th>

                    </tr>


                </thead>
                <tbody>

                    <tr>
                        <td align='center'>
                            <input type='checkbox' />
                        </td>
                        <td>Academic Transcript</td>
                        <td>Not Reviwed</td>
                        <td><span class="material-icons">
                            file_upload
                        </span></td>
                    </tr>
                    <tr>
                        <td align='center'>
                            <input type='checkbox' />
                        </td>
                        <td>English Test Scores</td>
                        <td>Accepted</td>
                        <td><span class="material-icons">
                            file_upload
                        </span></td>
                    </tr>
                    <tr>
                        <td align='center'>
                            <input type='checkbox' />

                        </td>
                        <td>GRE/GMAT Scores</td>
                        <td>Not Reviwed</td>
                        <td><span class="material-icons">
                            file_upload
                        </span></td>
                    </tr>

                </tbody>

            </table>


        </div>
    )
}

export default CourseInfo