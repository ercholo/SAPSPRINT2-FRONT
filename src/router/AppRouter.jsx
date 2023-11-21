import { Navigate, Route, Routes } from "react-router-dom"
import { TablaTortosa, TablaMelilla, TablaGranada, TablaSantomera, TablaGerona, TablaCartagena, TablaAlmeria, TablaAlicante, TablaAlbacete, TablaMadrid, TablaMalaga, TablaBarcelona, TablaRibarroja } from "../components/"
import { Navbar } from "../ui/"
import { useKeycloak } from "@react-keycloak/web";
import { Backdrop, CircularProgress } from "@mui/material";
import { PaginaPrincipal, PaginaToken } from "../pages/";
import { TablaBusqueda } from "../components/TablaBusqueda";

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
                <Route path="/albacete" element={<TablaAlbacete />} />
                <Route path="/alicante" element={<TablaAlicante />} />
                <Route path="/almeria" element={<TablaAlmeria />} />
                <Route path="/barcelona" element={<TablaBarcelona />} />
                <Route path="/cartagena" element={<TablaCartagena />} />
                <Route path="/gerona" element={<TablaGerona />} />
                <Route path="/granada" element={<TablaGranada />} />
                <Route path="/madrid" element={<TablaMadrid />} />
                <Route path="/malaga" element={<TablaMalaga />} />
                <Route path="/melilla" element={<TablaMelilla />} />
                <Route path="/santomera" element={<TablaSantomera />} />
                <Route path="/tortosa" element={<TablaTortosa />} />
                <Route path="/ribarroja" element={<TablaRibarroja />} />
                <Route path="/busqueda" element={<TablaBusqueda/>} />
                <Route path="/token" element={<PaginaToken />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}