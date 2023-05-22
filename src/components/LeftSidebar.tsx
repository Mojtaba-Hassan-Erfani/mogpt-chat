const LeftSidebar = () => {
    return (
		<div className="sidebar-left col-md-2 bg-light">

			{/* Add new Chat */}
			<div className="add-new-chat d-flex">
				<span> Add a new chat</span>
				<i className="bi bi-plus-square"></i>
			</div>

			{/* Sample titles with chat icons */}
			<ul className="chatbar">
				<li className="d-flex">
					<div>
						<i className="bi bi-chat-left"></i>
						<span>Sample Title 1</span>
					</div>
					<div>
						<i className="bi bi-pencil"></i>
						<i className="bi bi-x-circle"></i>
					</div>
				</li>
				<li className="d-flex active">
					<div>
						<i className="bi bi-chat-left-fill"></i>
						<span>Current using chat</span>
					</div>
					<div>
						<i className="bi bi-pencil"></i>
						<i className="bi bi-x-circle"></i>
					</div>
				</li>
			</ul>
		</div>
   );
};

export default LeftSidebar;
