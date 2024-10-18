import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { authRoutes, publicRoutes } from '../config/routes';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '../../stores/userStore';
import { toast } from 'react-toastify';
import vector from "../assets/Vector.svg";
import { jwtDecode } from "jwt-decode";

const Header = observer(() => {
    const navigate = useNavigate();

    useEffect(() => {
        userStore.checkAuth();
        
        const restrictedAuthPaths = ["/auth", "/register"]
        if (userStore.isAuth && restrictedAuthPaths.includes(window.location.pathname)) {
            navigate('/');
        }
    }, [userStore.isAuth, navigate]);

    const logout = () => {
        userStore.logoutUser();
        toast.info('Вы вышли с аккаунта!');
        navigate('/auth');
        window.location.reload();
    };

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{ fontSize: "25px" }}>
                <Nav.Link to="/" as={Link}>
                    LOGO
                </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="burger" />
                <Navbar.Collapse id="burger">
                    {userStore.isAuth ? (
                        <div className="ms-auto d-flex gap-4 align-items-center">
                            <Nav>
                                <Nav.Link to="/profile" as={Link}>
                                    <p style={{ color: "white", margin: "unset"}}>
                                    <img src={vector} width={15}/> {jwtDecode(JSON.parse(localStorage.getItem("userData")).token).username}
                                    </p>
                                </Nav.Link>
                            </Nav>
                            <Button
                                type="button"
                                style={{ border: "1px solid white", color: "white" }}
                                variant="transparent"
                                onClick={logout}
                            >
                                ↩ Выйти
                            </Button>
                        </div>
                    ) : (
                        <Nav className="ms-auto">
                            {publicRoutes.map((el, i) => (
                                <Nav.Link key={i} to={el.path} as={Link}>
                                    {el.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default Header;
