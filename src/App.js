import './App.css';
import Sidenav from './Components/Sidenav/Sidenav';
import Main from './Components/Main/Main';
import RightSidebar from './Components/RightSidebar/RightSidebar';

const App = () => {
    return (
        <div className="App">

            <Sidenav />
            <Main/>
            <RightSidebar/>

            {/*  Floating Support Request */}
            <button id='support-request-floating'>+ New Support Request</button>


        </div>
    );
}

export default App;
