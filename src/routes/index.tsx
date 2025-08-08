import { BrowserRouter, Routes, Route } from "react-router-dom";


import AuthLayout from "../layouts/authLayout";
import SignUp from '../features/auth/pages/Signup';
import LogIn from "../features/auth/pages/Login";


import UserLayout from "../layouts/userLayouts/userLayout";
import Tasks from "../features/user/pages/tasks";
import Projects from '../features/user/pages/projects';
import Teams from "../features/user/pages/teams";
import Profile from '../features/user/pages/profile';


function Index() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UserLayout />} >
          <Route index  element={<Tasks/>} ></Route>
          <Route path='projects'  element={<Projects/>} ></Route>
          <Route path='teams'  element={<Teams/>} ></Route>
          <Route path='profile'  element={<Profile/>} ></Route>
        </Route>
        <Route path='log' element={<AuthLayout />}  >
          <Route index element={<SignUp />} ></Route>
          <Route path='log-in' element={<LogIn />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index
