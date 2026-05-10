import { Route, Routes } from "react-router-dom";
import {useForm} from '../Hooks/useForm.jsx'
import { useData } from "../Hooks/useData.jsx";
import {url} from '../Utils/url.js'
import About from '../Pages/About.jsx'
import Home from "../Pages/Home.jsx"

export const AppRouter = () => {

    const {status, onName, onEmail, handleSubmit, name, email} = useForm(url)
    const {data} = useData(url)

    return (
        <Routes>
            <Route path="/" element={<Home status={status} onName={onName} onEmail={onEmail} handleSubmit={handleSubmit} name={name} email={email}/>}/>
            <Route path="/about" element={<About data={data}/>}/>
        </Routes>
    )
};