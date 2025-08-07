import { BrowserRouter, Routes, Route } from "react-router-dom";


import AuthLayout from "../layouts/authLayout";
import SignUp from '../features/auth/pages/Signup';
import LogIn from "../features/auth/pages/Login";


import UserLayout from "../layouts/userLayouts/userLayout";
import Task from "../features/user/pages/Task";

function Index() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UserLayout />} >
          <Route index element={<Task/>} ></Route>

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
