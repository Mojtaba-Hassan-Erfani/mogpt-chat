import React, { useRef, useEffect, useState } from 'react';

/**
 * Renders a chat box component with functionality for sending and receiving messages.
 *
 * @return {JSX.Element} The chat box component.
 */
const ChatBox = () => {

    const [ messages, setMessages ] = useState( [] );
    const [ input, setInput ] = useState( '' );
    const ws = useRef( null );


    // Textarea functionality.
    // ---------------------------------------------------------------------------------------
    const textAreaRef = useRef( null );

    useEffect( () => {
        const textArea = textAreaRef.current;
        /**
         * Resizes the textarea element to fit its content.
         *
         * @param {None} None - This function does not take any parameters.
         * @return {None} None - This function does not return a value.
         */
        const autoResize = () => {
            if ( textArea ) {
                textArea.style.height = 'auto';
                textArea.style.height = `${textArea.scrollHeight}px`;
            }
        };

        if ( textArea && textArea.value.trim() !== "" ) {
            textArea.addEventListener( 'input', autoResize );
        }

        // Clean up event listener on unmount, for performance issues and to prevent bugs.
        return () => {
            if ( textArea ) {
            textArea.removeEventListener( 'input', autoResize );
            }
        }
    }, [] );

    useEffect( () => {
        ws.current = new WebSocket( 'ws://localhost:3001' );

        /**
         * Handles the onmessage event of the WebSocket connection.
         *
         * @param {Event} event - The event object containing the received data.
         */
        ws.current.onmessage = ( event ) => {
            setMessages( prevMessages => {
                const lastMessage = prevMessages[prevMessages.length - 1];

                // Check if the last message is from the AI and the received message is not from the user
                if ( lastMessage && ! lastMessage.isUser ) {
                    // Append the new content to the last AI message
                    return prevMessages.map( ( msg, index ) =>
                        index === prevMessages.length - 1
                            ? { ...msg, text: msg.text + event.data }
                            : msg
                    );
                } else {
                    // If the last message is from the user or there is no last message, add a new message
                    return [ ...prevMessages, { isUser: false, text: event.data } ];
                }
            } );
        };

        /**
         * Sets up an event listener for when the WebSocket connection is closed.
         *
         * @param {type} paramName - description of parameter
         * @return {type} description of return value
         */
        ws.current.onclose = () => {
            console.log( 'WebSocket Connection closed' );
        }

        /**
         * Handles the error event for the WebSocket connection.
         *
         * @param {Error} error - The error object describing the WebSocket error.
         */
        ws.current.onerror = ( error ) => {
            console.error( 'WebSocket error:', error );
        };


        return () => {
            ws.current.close();
        };
    }, [] );

    // Handle Enter action for Textarea.
    const handleKeyDown = ( event ) => {

        if ( event.key === 'Enter' && ! event.shiftKey ) {
            event.preventDefault();
            handleSendMessage();

            // Clear the textarea after sending the prompt.
            textAreaRef.current.value = '';
        }
    };

    // Handle the messages to render correctly.
   // ---------------------------------------------------------------------------------------
   const handleSendMessage = async () => {

        if ( ! input || input.trim() === '' ) {
            return;
        }

        if ( input.trim() ) {
            setMessages( prevMessages => [ ...prevMessages, { text: input, isUser: true } ] );
            ws.current.send( input );
            setInput( '' );
        }
   }

   // ---------------------------------------------------------------------------------------

   return (

    <div className="chatbox-container d-flex col-md-8">

         {/* Prompt request and response messages */}
        <div className="chat-messages">
            {messages.map( ( message, index ) => (
                <div key={index} className={`d-flex align-items-start ${message.isUser ? 'user-message' : 'bot-message'}`}>
                    <div className="msg-bubble">
                        <span className="msg-text">{message.text}</span>
                        {message.isUser && <i className="bi bi-pin-angle-fill msg-pin" />}
                    </div>
                </div>
            ) ) }
        </div>
        {/* End Prompt request and response messages  */}
        <form className="chatbox" onSubmit={ ( e ) => {e.preventDefault(); handleSendMessage();}}>
            <div className="mb-3 input-group">
                <label htmlFor="prompt-input" className="form-label visually-hidden">
                    Enter your message:
                </label>
                <div className="prompt-input">
                    <textarea id="prompt-input"
                    placeholder="Type your prompt here..."
                    rows={1}
                    ref={textAreaRef}
                    onKeyDown={handleKeyDown}
                    onChange={( ( e ) => setInput( e.target.value ) ) }
                    value={input}
                    ></textarea>
                    <div className="send-icon">
                        <a onClick={handleSendMessage}>
                            <i className="bi bi-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </form>
    </div>
   );
};

export default ChatBox;
