import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web'
import { useContext, useEffect, useState } from 'react';
import { BusquedaContext } from '../../context/context';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Navbar = () => {

    const { keycloak } = useKeycloak()

    //Para dejar vacío el campo búsqueda del navbar cuando hemos punchado
    const [valorInicial, setValorInicial] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const params = useParams();
    console.log(params)

    //¿Estás logueado? pa'dentro
    useState(() => {
        if (keycloak?.authenticated) return;
        keycloak?.login();
    }, [keycloak]);

    //pa'fuera
    const onLogOut = () => {
        keycloak.logout()
    }

    //Pasamos el término de búsqueda al context para tenerlo de manera global
    const { setTerminoBusqueda, setBusqueda } = useContext(BusquedaContext);

    const onBusqueda = (e) => {
        e.preventDefault();

        // Por lo menos 4 caracteres en la búsuqeda
        if (valorInicial.length >= 4) {
            setTerminoBusqueda(valorInicial);
            setValorInicial('');
            setBusqueda(true);
            navigate(`/busqueda/${valorInicial}`, {
                replace: true
            })

        } else {
            setValorInicial('');
            alert('El término de búsqueda debe tener al menos 4 caracteres.');
        }
    };

    useEffect(() => {
        $('.dropdown-menu').on('click', function () {
            $("#bs_button").trigger("click");
        });
    }, []);

    return (

        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">

                <div className="d-flex align-items-center">
                    <button
                        className="navbar-toggler small-toggler-icon"

                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <i className="navbar-toggler-icon"></i>
                    </button>

                    <Link className="navbar-brand" to="/">Impresoras</Link>
                    <h4 >{location.pathname.substring(1).toUpperCase()}</h4>
                </div>

                <div className="d-flex align-items-center">

                    <form className="d-flex" role="search" onSubmit={onBusqueda}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                            name="search"
                            value={valorInicial}
                            onChange={(e) => setValorInicial(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>

                    <button onClick={onLogOut} className="btn btn-outline-primary" >
                        <i className="bi bi-box-arrow-right"></i>
                    </button>
                </div>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Impresoras</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" id="bs_button" ></button >
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Almacén
                                </NavLink>
                                <ul className="dropdown-menu list-group list-group-flush">
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/albacete">Albacete</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/alicante">Alicante</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/almeria">Almeria</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/barcelona">Barcelona</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/cartagena">Cartagena</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/gerona">Gerona</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/granada">Granada</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/madrid">Madrid</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/malaga">Malaga</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/melilla">Melilla</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/santomera">Santomera</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/tortosa">Tortosa</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/ribarroja">Ribarroja</Link></li>
                                    <li><Link className="dropdown-item mt-2 list-group-item" to="/token">Token</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}