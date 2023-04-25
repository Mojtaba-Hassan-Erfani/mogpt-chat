import Head from 'next/head'

import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import ChatInterface from '@/components/ChatInterface';

// import styles from '@/styles/Home.module.css'


export default function Home() {

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
					<LeftSidebar></LeftSidebar>
					{/* Chat interface */}
					<ChatInterface></ChatInterface>
					{/* Right sidebar */}
					<RightSidebar></RightSidebar>
				</div>
			</div>
		</main>
    </>
  )
}
