import React, { useRef, useEffect, useState } from 'react';

const ChatBox = () => {

    // Types..
    interface Message {
        isUser: boolean;
        text: string;
    }


    const [ messages, setMessages ] = useState<Message[]>( [] );
    const [ prompt, setPrompt ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );

    // OpenAI API handling.
    // ---------------------------------------------------------------------------------------
    const getResponseFromOpenAi = async ( prompt: string ) => {

        const response = await fetch( '/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { prompt: prompt } ),
        } );

        const data = await response.json();

        return data.text;
    };
    // ---------------------------------------------------------------------------------------


    // Textarea functionality.
    // ---------------------------------------------------------------------------------------
    const textAreaRef = useRef<HTMLTextAreaElement | null>( null );

    useEffect( () => {
        const textArea = textAreaRef.current;
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

    // Handle Enter action for Textarea.
    const handleKeyDown = ( event : React.KeyboardEvent<HTMLTextAreaElement> ) => {

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

        if ( ! prompt || prompt.trim() === '' ) {
            return;
        }

        setIsLoading( true );

        // Add the prompt and response to the messages array.
        setMessages( prevMessages => [ ...prevMessages, { isUser: true, text: prompt } ] );

        const response = await getResponseFromOpenAi( prompt );
        setMessages( prevMessages => [ ...prevMessages, { isUser: false, text: response } ] );

        setIsLoading( false );
   }

   // ---------------------------------------------------------------------------------------

   return (

    <div className="chatbox-container d-flex col-md-8">

         {/* Prompt request and response messages */}
        <div className="chat-messages">
            {messages.map( ( message, index ) => (
                <div key={index} className={`d-flex align-items-start ${message.isUser ? '' : 'prompt-res'}`}>
                    {message.isUser ? (
                         <><div className="msg-img"></div><div className="msg-bubble">
                            <span className="msg-text">
                                {message.text}
                            </span>
                            <i className="bi bi-pin-angle-fill msg-pin" />
                        </div></>
                    ) : (
                        <><div className="msg-img"></div><div className="msg-bubble">
                            <span className="msg-text">
                                {message.text}
                            </span>
                        </div></>
                    ) }
                </div>
            ) ) }
            {/* Display loading spinner if isLoading is true */}
            {isLoading &&
                <div className="d-flex mb-3 justify-content-start">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
        {/* End Prompt request and response messages  */}
        <form className="chatbox" onSubmit={handleSendMessage}>
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
                    onChange={( ( e ) => setPrompt( e.target.value ) ) }
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
