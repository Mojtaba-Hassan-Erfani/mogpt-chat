import React, { useRef, useEffect, useState } from 'react';

const ChatBox = () => {

    // OpenAI API handling.
    // ---------------------------------------------------------------------------------------
    const [ prompt, setPrompt ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ response, setResponse ] = useState( '' );

    const getResponseFromOpenAi = async () => {
        setResponse( '' );
        setIsLoading( true );

        const response = await fetch( '/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { prompt: prompt } ),
        } );

        const data = await response.json();
        setIsLoading( false );
        console.log( data.text );
        setResponse( data.text );
    };
    // ---------------------------------------------------------------------------------------


    // Textarea functionality.
    // ---------------------------------------------------------------------------------------
    const formRef = useRef<HTMLFormElement | null>( null );
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
    const handleKeyDown = ( e: React.KeyboardEvent<HTMLTextAreaElement> ) => {

        if ( e.key === 'Enter' && ! e.shiftKey ) {
            e.preventDefault();

            if ( textAreaRef.current?.value.trim() !== "" ) {
                getResponseFromOpenAi();
                formRef.current?.reset(); // TODO: Still not working.
            }
        }

    };
   // ---------------------------------------------------------------------------------------

   return (
    <div className="chatbox-container d-flex col-md-8">

        {/*  Prompt request and response messages  */}
        <div className="prompt-display">

            {prompt && prompt.trim() !== '' && (
                <div className="d-flex justify-content-between mb-3">
                    <div className="prompt-req">
                        <p>
                            <strong>User: </strong> {prompt}
                        </p>
                    </div>
                    <i className="bi bi-pin-angle"></i>
                </div>
            )}

            <div className="d-flex mb-3 justify-content-end">

                {isLoading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                response && (
                    <div className="prompt-res">
                        <p>
                            <strong>Moji: </strong>
                            {response}
                        </p>
                    </div>
                )
                )}

            </div>
        </div>
        {/* End Prompt request and response messages  */}
        <form className="chatbox">
            <div className="mb-3 input-group">
                <label htmlFor="prompt-input" className="form-label visually-hidden">
                    Enter your message:
                </label>
                <div className="prompt-input">
                    <textarea id="prompt-input"
                    placeholder="Type your prompt here..."
                    rows={1}
                    ref={textAreaRef}
                    onChange={( e ) => {
                        setPrompt( e.target.value );
                    }}
                    onKeyDown={handleKeyDown}
                    ></textarea>
                    <div className="send-icon">
                    <a type="submit" onClick={getResponseFromOpenAi}>
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
