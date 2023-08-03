import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'
import Error404 from "containers/errors/Error404";
import Blog from "containers/pages/blog/Blog";
import Dashboard from "containers/pages/Dashboard";
import ResetPassword from "containers/auth/ResetPassword";
import ResetPasswordConfirm from "containers/auth/ResetPasswordConfirm";
import EditPost from "containers/pages/blog/EditPost";
import Home from "containers/pages/Home";
 
function AnimatedRoutes(){

    const location = useLocation()

    return(
        <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404/>} />

            {/* Home Display */}
            <Route path="/" element={<Home/>} />
            <Route path="/forgot_password" element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />

            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:post_id" element={<EditPost/>} />
        </Routes>
    )
}

export default AnimatedRoutes