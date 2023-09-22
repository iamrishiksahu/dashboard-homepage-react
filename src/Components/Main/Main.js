import React from 'react'
import './Main.css'
import Details from './Details/Details'
import CourseInfo from './CourseInfo/CourseInfo'
import RightSidebar from '../RightSidebar/RightSidebar'

const Main = () => {
    return (
        <main>

            <div className="header">
                <h1>Agent Portal</h1>
                <div className="date">
                    Friday, 22 Sep - 2023
                </div>
            </div>

            <Details />

            <CourseInfo />


        </main>
    )
}

export default Main