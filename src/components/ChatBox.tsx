import React, { useState } from 'react';

const ChatBox = () => {
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

   const handleKeyDown = ( e: React.KeyboardEvent<HTMLTextAreaElement> ) => {
      if ( e.key === 'Enter' && !e.shiftKey ) {
         e.preventDefault();
         getResponseFromOpenAi();
      }
   };

   return (
      <div className="col-md-8 mx-auto d-flex flex-column row-padding">
         <div
            className="card flex-grow-1"
            style={{ height: 'calc(100vh - 120px)' }}
         >
            <div className="card-body d-flex flex-column">
               <form>
                  <div className="mb-3 input-group">
                     <label
                        htmlFor="chatbox-input"
                        className="form-label visually-hidden"
                     >
                        Enter your message:
                     </label>
                     <textarea
                        className="form-control"
                        id="chatbox-input"
                        placeholder="Type your message here..."
                        style={{
                           maxHeight: '500px',
                           paddingRight: '50px',
                           borderBottom: 'none',
                           borderRight: 'none',
                           borderLeft: 'none',
                        }}
                        rows={1}
                        onChange={( e ) => {
                           setPrompt( e.target.value );
                        }}
                        onKeyDown={handleKeyDown}
                     ></textarea>
                     <div
                        className="input-group-append"
                        style={{
                           position: 'absolute',
                           right: '0',
                           top: '0',
                           paddingTop: '8px',
                           paddingRight: '5px',
                        }}
                     >
                        <a type="submit" onClick={getResponseFromOpenAi}>
                           <i
                              className="bi bi-chevron-right"
                              style={{
                                 height: '12px',
                                 width: '12px',
                              }}
                           ></i>
                        </a>
                     </div>
                  </div>
               </form>
               <div
                  id="chat-messages"
                  className="chat-messages-container message-text"
                  style={{ height: 'calc(100vh - 120px)' }}
               >
                  {/*  Sample chat messages  */}
                  {prompt && (
                     <div className="d-flex justify-content-between mb-3">
                        <div className="p-2 rounded bg-light">
                           <p>
                              <strong>User: </strong> {prompt}
                           </p>
                        </div>
                        <i
                           className="bi bi-pin-angle"
                           style={{ fontSize: '1rem' }}
                        ></i>
                     </div>
                  )}
                  <div className="d-flex mb-3 justify-content-end">
                     {isLoading ? (
                        <div
                           className="spinner-border"
                           role="status"
                           style={{ fontSize: '1rem' }}
                        >
                           <span className="visually-hidden">Loading...</span>
                        </div>
                     ) : (
                        response && (
                           <div className="p-2 rounded bot-message">
                              <p>
                                 <strong>Moji: </strong>
                                 {response}
                              </p>
                           </div>
                        )
                     )}
                  </div>

                  {/*  End of chat messages  */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChatBox;
