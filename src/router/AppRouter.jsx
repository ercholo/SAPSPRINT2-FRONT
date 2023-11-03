import { Navigate, Route, Routes } from "react-router-dom"
import { TablaTortosa, TablaMelilla, TablaGranada } from "../components/"
import { Navbar } from "../ui/"
import { useKeycloak } from "@react-keycloak/web";
import { Backdrop, CircularProgress } from "@mui/material";
import { PaginaPrincipal, PaginaToken } from "../pages/";

export const AppRouter = () => {

    const { initialized } = useKeycloak();

    if (!initialized) {
        return (
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    return (
        <>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
                <Route path="/tortosa" element={<TablaTortosa />} />
                <Route path="/melilla" element={<TablaMelilla />} />
                <Route path="/granada" element={<TablaGranada />} />
                <Route path="/token" element={<PaginaToken />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

        </>
    )
}