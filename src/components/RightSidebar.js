const RightSidebar = () => {
    return (
        <>
            <div className="col-md-2 bg-light d-flex flex-column">
                <div className="d-flex justify-content-around border-bottom py-2">
                    <i className="bi bi-pin-angle-fill" style={{ fontSize: '1.1rem', cursor: 'pointer' }}></i>
                    <i className="bi bi-gear" style={{ fontSize: '1.1rem', cursor: 'pointer' }}></i>
                    <i className="bi bi-palette" style={{ fontSize: '1.1rem', cursor: 'pointer' }}></i>
                </div>
                <div className="flex-grow-1">
                    {/*  titles with chat icons */}
                    <ul className="list-unstyled pt-3" style={{ fontSize: '.8rem' }}>
                        <li className="d-flex align-items-center justify-content-between ps-3" style={{ lineHeight: '3' }}>
                            <span>Sample Title 1</span>
                            <div>
                                <i className="bi bi-pencil" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                <i className="bi bi-x-circle" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                            </div>
                        </li>
                        <li className="d-flex align-items-center justify-content-between ps-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', lineHeight: '3' }}>
                            <span>200 Lorem Ipsum words</span>
                            <div>
                                <i className="bi bi-pencil" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                <i className="bi bi-x-circle" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default RightSidebar;