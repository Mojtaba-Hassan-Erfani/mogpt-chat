const RightSidebar = () => {
    return (

        <div className="sidebar-right col-md-2 bg-light d-flex flex-column">
            <ul className="nav d-flex">
                <li className="nav-item">
                    <a className="active"  href="#"><i className="bi bi-pin-angle-fill"></i></a>
                </li>
                <li className="nav-item">
                    <a className="" href="#"><i className="bi bi-gear"></i></a>
                </li>
                <li className="nav-item">
                    <a className="" href="#"><i className="bi bi-palette"></i></a>
                </li>
            </ul>
            <div className="flex-grow-1">
                {/*  titles with chat icons */}
                <ul className="bookmark">
                    <li className="d-flex">
                        <span>Sample Title 1</span>
                        <div>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-x-circle"></i>
                        </div>
                    </li>
                    <li className="d-flex active">
                        <span>200 Lorem Ipsum words</span>
                        <div>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-x-circle"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RightSidebar;
