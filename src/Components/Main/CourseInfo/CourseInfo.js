import React from 'react'
import './CourseInfo.css'

const CourseInfo = () => {
    return (
        <div className='course'>

            <h2>Course Information</h2>

            <div className="details">
                <small>Course: Integrated MSc. Maths & Comp. | Intake: 120 | Year: 2023-24</small>

                <div className="box">
                    <img src='/logo.png' alt='Profile Picture' />
                    <div className="box-right">
                        <small>Status: Pending</small>
                        <small>GRE: 760</small>
                        <small>Application ID: JH-09-23241-1235</small>
                        <small>English Profeciency: Fluent</small>
                        <small>University ID: UID135T34</small>
                        <small>Official Transcript: Available(8.63)</small>
                    </div>
                </div>


            </div>

            <table>
                <thead>

                    <tr>
                        <th>Check</th>
                        <th>Document Type</th>
                        <th>Status</th>
                        <th>Third Column</th>

                    </tr>


                </thead>
                <tbody>

                    <tr>
                        <td>
                        <label> <input type="checkbox"/> Bike</label>
                        </td>
                        <td>Academic Transcript</td>
                        <td>Not Reviwed</td>
                        <td>Upload</td>
                    </tr>

                </tbody>

            </table>


        </div>
    )
}

export default CourseInfo