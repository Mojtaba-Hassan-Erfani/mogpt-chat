require( 'dotenv' ).config();

const { Server } = require( 'ws' );
const http = require( 'http' );
const { parse } = require( 'url' );
const next = require( 'next' );
const { OpenAI } = require( 'openai' );

const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
const handle = app.getRequestHandler();

// Set up OpenAI.
const openai = new OpenAI( {
	organization: process.env.OPENAI_ORGANIZATION,
	apiKey: process.env.OPENAI_API_KEY,
} );

// Server setup.
app.prepare().then( () => {
	const server = http.createServer( ( req, res ) => {
		const parsedUrl = parse( req.url, true );
		handle( req, res, parsedUrl );
	} );

	// Set up HTTP server on port 3000
	server.listen( 3000, ( err ) => {
		if ( err ) throw err;
		console.log( '> Next.js server is running on http://localhost:3000' );
	} );

	// Set up WebSocket server on port 3001
	const wss = new Server( { port: 3001 } );
	console.log( "WebSocket server is running on ws://localhost:3001" );

	wss.on( 'connection', ws => {
		ws.on( 'message', async messageBuffer => {
			const messageText = messageBuffer.toString(); // Convert buffer to string
			console.log( 'Received message:', messageText );
			try {
			const messages = [ {
				role: 'user',
				content: messageText
			} ];
			console.log( 'messages: ', messages );

			const stream = await openai.chat.completions.create( {
				model: 'gpt-3.5-turbo',
				messages: messages,
				stream: true,
			} );

			for await ( const chunk of stream ) {
				if ( chunk.choices[0]?.delta?.content ) {
					ws.send( chunk.choices[0]?.delta?.content );
				}
			}

			stream.controller.abort();
			} catch ( error ) {
			console.error( 'Error in processing request: ', JSON.stringify( error, null, 2 ) );
			ws.send( 'Error in processing your request.' );
			}
		} );

		ws.on( 'close', () => {
			console.log( 'Client disconnected' );
		} );
	} );
} );
