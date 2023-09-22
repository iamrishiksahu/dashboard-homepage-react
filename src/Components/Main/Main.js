import React from 'react'
import './Main.css'
import Details from './Details/Details'
import CourseInfo from './CourseInfo/CourseInfo'
import RightSidebar from '../RightSidebar/RightSidebar'

const Main = () => {
    return (
        <main>

            <h1>Dashboard</h1>
            <div className="date">
                <input type="date" />
            </div>

            <Details />

            <CourseInfo />


        </main>
    )
}

export default Main