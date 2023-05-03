const LeftSidebar = () => {
   return (
      <>
         <div className="col-md-2 bg-light">
            {/* Add new Chat */}
            <div className="d-flex justify-content-around border-bottom py-2">
               <div> Add a new chat</div>
               <i
                  className="bi bi-plus-square"
                  style={{ fontSize: '1rem', cursor: 'pointer' }}
               ></i>
            </div>
            {/* Sample titles with chat icons */}
            <ul className="list-unstyled pt-3" style={{ fontSize: '.8rem' }}>
               <li
                  className="d-flex align-items-center justify-content-between ps-3"
                  style={{ lineHeight: '3' }}
               >
                  <div>
                     <i
                        className="bi bi-chat-left"
                        style={{
                           fontSize: '1rem',
                           marginRight: '10px',
                        }}
                     ></i>
                     <span>Sample Title 1</span>
                  </div>
                  <div>
                     <i
                        className="bi bi-pencil"
                        style={{
                           fontSize: '1rem',
                           marginRight: '10px',
                        }}
                     ></i>
                     <i
                        className="bi bi-x-circle"
                        style={{
                           fontSize: '1rem',
                           marginRight: '10px',
                        }}
                     ></i>
                  </div>
               </li>
               <li
                  className="d-flex align-items-center justify-content-between ps-3"
                  style={{
                     backgroundColor: 'rgba(0, 0, 0, 0.1)',
                     lineHeight: '3',
                  }}
               >
                  <div>
                     <i
                        className="bi bi-chat-left-fill"
                        style={{
                           fontSize: '1rem',
                           marginRight: '10px',
                        }}
                     ></i>
                     <span>Current using chat</span>
                  </div>
                  <div>
                     <i
                        className="bi bi-pencil"
                        style={{
                           fontSize: '1rem',
                           marginRight: '10px',
                        }}
                     ></i>
                     <i
                        className="bi bi-x-circle"
                        style={{
                           fontSize: '1rem',
                           marginRight: '10px',
                        }}
                     ></i>
                  </div>
               </li>
            </ul>
         </div>
      </>
   );
};

export default LeftSidebar;
