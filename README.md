# MoGPT-Chat: A Next.js + Electron Desktop Application

MoGPT-Chat is a powerful and feature-rich chat interface built with Next.js and Electron, designed to work seamlessly as a desktop application. The core functionality of MoGPT-Chat revolves around harnessing the power of OpenAI's API, allowing users to engage with AI-powered chatbots for both free and paid versions.

## Features

- Responsive chat interface using Bootstrap
- Integration with OpenAI's API for AI-powered chatbot functionality
- Support for both free and paid OpenAI API access
- Cross-platform desktop application powered by Electron

## Prerequisites

- Node.js (recommended version: 14.x or higher)
- NPM (recommended version: 6.x or higher) or Yarn (recommended version: 1.x or higher)
- OpenAI API key (either free or paid)

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To get started, follow these steps:

1. Clone the repository:

https://github.com/Mojtaba-Hassan-Erfani/mogpt-chat.git


2. Change into the project directory:

cd mogpt-chat


3. Install the dependencies:

npm install


4. Create a `.env.local` file in the root directory of the project and add your OpenAI API key:

Replace `your_api_key_here` with your actual OpenAI API key.

5. Start the development server:

npm run electron-dev

The MoGPT-Chat application should now be running in an Electron window.

## Building the Application for Production

1. Build the Next.js application for production:

npm run build


2. Package the Electron application for production:

npm run electron-build

You will find the packaged application in the `dist` directory.

## Available Scripts

The following scripts are available in the `package.json` file:

- `dev`: Starts the Next.js development server
- `build`: Builds the Next.js application for production
- `start`: Starts the Next.js production server
- `lint`: Lints the code using Next.js Lint
- `electron`: Starts Electron using the `electron.js` configuration file
- `electron-build`: Builds the Electron application for production
- `electron-rebuild`: Rebuilds the native modules for Electron
- `electron-dev`: Starts the Next.js app and Electron concurrently in development mode
- `package`: Packages the Electron application without publishing it

## Contributing

If you'd like to contribute to the MoGPT-Chat project, please submit a pull request or open an issue with your suggestions or bug reports.
