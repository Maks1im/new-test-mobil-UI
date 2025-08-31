import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import Loader from "./components/Loaders/Loader.jsx";
import Layout from "./components/layout/Layout.jsx";

// lazy loading
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Account = lazy(() => import("./pages/Account/Account.jsx"));
const Add = lazy(() => import("./pages/Add/Add.jsx"));
const Settings = lazy(() => import("./pages/Settings/Settings.jsx"));
const Recommendations = lazy(() => import("./pages/Recommendations/Recommendations.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const Users = lazy(() => import("./pages/Users/Users.jsx"));
const Watch = lazy(() => import("./pages/Watch/Watch.jsx"));
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFound.jsx'));
const LogIn = lazy(() => import("./pages/LogIn/LogIn.jsx"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp.jsx"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pages without Layout */}
                <Route path="/home" element={<WelcomePage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} /> {/* signup вместо signUp */}

                {/* Pages with Layout */}
                <Route path="/*" element={
                    <Layout>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                <Route index element={<HomePage />} />
                                <Route path="account" element={<Account />} />
                                <Route path="add" element={<Add />} />
                                <Route path="settings" element={<Settings />} />
                                <Route path="recommendations" element={<Recommendations />} />
                                <Route path="about" element={<AboutUs />} />
                                <Route path="user" element={<Users />} />
                                <Route path="watch" element={<Watch />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;