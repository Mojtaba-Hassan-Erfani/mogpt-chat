import Head from 'next/head'
// import styles from '@/styles/Home.module.css'
import { useEffect, useRef } from 'react';


export default function Home() {
	const textareaRef = useRef();

	const handleTextareaResize = () => {
	  if (textareaRef.current) {
		textareaRef.current.style.height = 'auto';
		textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
	  }
	};

	useEffect(() => {
	  handleTextareaResize();
	  return () => {
		if (textareaRef.current) {
		  textareaRef.current.style.height = null;
		}
	  };
	}, []);

  return (
    <>
		<Head>
		<title>MoGPT-Chat</title>
		<meta name="description" content="Mogpt chat interface a simple user friendly GPT-4 TextBot using OpenAI API" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
		</Head>
		<main>
			<div className="container-fluid d-flex flex-column vh-100 p-0">
				<div className="row flex-grow-1">

					{/* Left sidebar */}
					<div className="col-md-2 bg-light">

					</div>

					{/* Chat interface */}
					<div className="col-md-8 mx-auto d-flex flex-column row-padding">
						<div className="card flex-grow-1" style={{ height: 'calc(100vh - 120px)' }}>
							<div className="card-body d-flex flex-column">
								<form>
									<div className="mb-3 input-group">
										<label htmlFor="chatbox-input" className="form-label visually-hidden">Enter your message:</label>
										<textarea className="form-control" id="chatbox-input" ref={textareaRef} placeholder="Type your message here..."
										style={{
											maxHeight: '500px',
											paddingRight: '50px',
											borderBottom: 'none',
											borderRight: 'none',
											borderLeft: 'none',
											}} rows="1" onChange={handleTextareaResize}>
										</textarea>
										<div className="input-group-append" style={{ position: 'absolute', right: '0', top: '0', paddingTop: '8px', paddingRight: '5px' }}>
											<a type="submit">
												<i className="bi bi-chevron-right" style={{ height: '12px', width: '12px' }}></i>
											</a>
										</div>
									</div>
								</form>
								<div id="chat-messages" className="chat-messages-container message-text" style={{ height: 'calc(100vh - 120px)' }}>
									{/*  Sample chat messages  */}
									<div className="d-flex justify-content-between mb-3">
										<div className="p-2 rounded bg-light">
											<p><strong>User: </strong>Hello! How are you?</p>
										</div>
										<i className="bi bi-pin-angle" style={{ fontSize: '1rem' }}></i>
									</div>
									<div className="d-flex mb-3 justify-content-end">
										<div className="p-2 rounded bot-message">
											<p><strong>Moji: </strong>I&#39;m doing well, thank you! How can I help you today?</p>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-3">
										<div className="p-2 rounded bg-light">
											<p><strong>User: </strong>Give me 200 words of lorem ipsum.</p>
										</div>
										<i className="bi bi-pin-angle-fill" style={{ fontSize: '1rem' }}></i>
									</div>
									<div className="d-flex mb-3 justify-content-end">
										<div className="p-2 rounded bot-message">
											<p><strong>Moji: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et erat eu tellus tincidunt varius. Proin sodales dui eget risus venenatis, vel consectetur magna cursus. Pellentesque accumsan neque id volutpat laoreet. Aenean nec velit vitae est imperdiet ultrices id id elit. Etiam ultricies tincidunt elit, nec ultrices arcu tempor nec. Pellentesque facilisis nisi vitae purus venenatis, at tempor enim bibendum. Integer eget odio nibh.

Mauris rhoncus libero vitae felis ullamcorper, non pharetra lectus consequat. Duis ac orci a mi condimentum viverra. Nulla facilisi. Vestibulum nec quam neque. Nullam auctor libero eu nulla pharetra, et hendrerit odio laoreet. Nunc faucibus facilisis ex, et fringilla libero. Integer fringilla sapien ac sem tincidunt, in cursus mi commodo. Cras vel elementum velit.

Phasellus condimentum neque quis odio consectetur, vitae euismod mauris laoreet. Donec et commodo sem. Sed auctor bibendum quam, ac ultricies est condimentum in. Suspendisse potenti. In laoreet elit et orci venenatis, vitae feugiat quam vehicula. Nunc tempus, sem at fermentum iaculis, lectus libero feugiat libero, nec cursus metus tellus vitae erat. Etiam mollis dapibus sapien, id ultricies lorem.

These 200 words of Lorem Ipsum text can be used as placeholder content in your design or development projects.</p>
										</div>
									</div>
									{/*  End of chat messages  */}
								</div>
							</div>
						</div>
					</div>

					{/* Right sidebar */}
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
				</div>
			</div>
		</main>
    </>
  )
}
