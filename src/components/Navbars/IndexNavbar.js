import React from "react";
import classnames from "classnames";
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/"
                        title="Hotel App"
                    >
                        Hotel App
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1"/>
                        <span className="navbar-toggler-bar bar2"/>
                        <span className="navbar-toggler-bar bar3"/>
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                href="/rooms"
                            >Rooms</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="/reservation"
                            >Reservation</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button
                                className="btn-round"
                                color="danger"
                                href="/contact"
                            >
                                <i className="nc-icon nc-compass-05"></i> Contact
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;
