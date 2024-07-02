import CartWidget from "./CartWidget"

const NavBar = () => {
    return (

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <img src="img/vissio.jpg" alt="foto logo" width={100} />
                </div>

                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Bolsos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Carteras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Valijas</a>
                        </li>

                    </ul>
                </div>
                <div classNameName="col">
                    <CartWidget />
                </div>
            </div>
        </div>

    )
}

export default NavBar 