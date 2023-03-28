
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAuthContext } from './hooks/useAuthContext';
import RecruiterPage from './pages/Recruiter/RecruiterPage';
import EmployeePage from './pages/Employee/EmployeePage';
import UpdateEmployee from './pages/UpdateProfile/UpdateEmployee';
import UpdateRecruiter from './pages/UpdateProfile/UpdateRecruiter';
import ProfileEmployee from './pages/Profile/ProfileEmployee';
import ProfileRecruiter from './pages/Profile/ProfileRecruiter';



function App() {
  const { user } = useAuthContext()
  const { role } = {...user}
  console.log(role)

  return (
    <div>
    <BrowserRouter>
    
      
      <main > 
  
<Header />
      <Routes>


        <Route path="/" element={<LandingPage/>}  exact  />
        {/* <Route path="/login" element={<LoginPage/>}  exact />
        <Route path="/signup" element={<RegisterPage/>} exact />
        <Route path="/employee" element={<EmployeePage/>} exact />
        <Route path="/recruiter" element={<RecruiterPage/>} exact /> */}

        <Route 
            path="/recruiter"
            element={role==="Recruiter"? <RecruiterPage/> : <Navigate to="/login" />}
          />
          
        <Route 
            path="/employee"
            element={role==="Employee"? <EmployeePage/> : <Navigate to="/login" />}
          />
         
          <Route 
            path="/login" 
            element={!user ? <LoginPage /> : role==="Recruiter"? <Navigate to="/recruiter"/>
            : role==="Employee"? <Navigate to="/employee"/>: <LoginPage /> }
          />
          <Route 
            path="/signup" 
            element={!user ? <RegisterPage /> : role==="Recruiter"? <Navigate to="/recruiter"/>
            : role==="Employee"? <Navigate to="/employee"/>: <RegisterPage />   }
          />

<Route 
            path="/updateprofile"
            element={role==="Employee"? <UpdateEmployee/> : <UpdateRecruiter/>}
          />
          {/* <Route 
            path="/updateprofile"
            element={role==="Recruiter"? <UpdateRecruiter/> : <ProfileRecruiter/>}
          /> */}



<Route 
            path="/profile"
            element={role==="Employee"? <ProfileEmployee/> : <ProfileRecruiter/>}
          />


        
        </Routes>
        <Footer />
        
      </main>
      
      
      
    </BrowserRouter>
    </div>
  );
}

export default App;
