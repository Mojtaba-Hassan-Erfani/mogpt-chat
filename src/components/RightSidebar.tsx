const RightSidebar = () => {
    return (
        <div className="sidebar-right d-flex flex-column vh-100 border-end px-4 py-3 col-md-2">
            <h5 className="text-muted">Language Model</h5>
            <span><small className="text-muted">Choose language model...</small></span>
            <select className="form-select mb-4" aria-label="Language select">
                <option selected>gpt-3.5-turbo</option>
                <option value="2">code-davinci-002</option>
                <option value="3">gpt-4</option>
            </select>

            <h5 className="text-muted">Pinned Chats</h5>
            <div className="pinned-chats overflow-auto">
                <div className="card mb-1">
                    <div className="card-body">
                        <span className="card-title">Chat Title 1</span>
                        <p className="pinned-desc">This is a description for Chat Title 1.</p>
                        <div className="text-end pinned-icons">
                            <a href="#" className="text-decoration-none me-2"><i className="bi bi-pencil-fill"></i></a>
                            <a href="#" className="text-decoration-none"><i className="bi bi-trash-fill"></i></a>
                        </div>
                    </div>
                </div>

                <div className="card mb-2">
                    <div className="card-body">
                        <span className="card-title">Chat Title 2</span>
                        <p className="card-text pinned-desc">This is a description for Chat Title 2.</p>
                        <div className="text-end pinned-icons">
                            <a href="#" className="text-decoration-none me-2"><i className="bi bi-pencil-fill"></i></a>
                            <a href="#" className="text-decoration-none"><i className="bi bi-trash-fill"></i></a>
                        </div>
                    </div>
                </div>

                <div className="card mb-2">
                    <div className="card-body">
                        <span className="card-title">Chat Title 3</span>
                        <p className="card-text pinned-desc">This is a description for Chat Title 3.</p>
                        <div className="text-end pinned-icons">
                            <a href="#" className="text-decoration-none me-2"><i className="bi bi-pencil-fill"></i></a>
                            <a href="#" className="text-decoration-none"><i className="bi bi-trash-fill"></i></a>
                        </div>
                    </div>
                </div>

                <div className="card mb-2">
                    <div className="card-body">
                        <span className="card-title">Chat Title 4</span>
                        <p className="card-text pinned-desc">This is a description for Chat Title 4.</p>
                        <div className="text-end pinned-icons">
                            <a href="#" className="text-decoration-none me-2"><i className="bi bi-pencil-fill"></i></a>
                            <a href="#" className="text-decoration-none"><i className="bi bi-trash-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
