function ChatInp(){
          return (
            <>
              <input type="text" placeholder="ask anything" />
              <button>Send</button>
            </>
          )
        }
        function ChatMsg(props){
          const message=props.message
          const sender=props.sender
          return (
            <>
                {sender === "user" && (
                <div id="user">
                  {message}
                  <img 
                    src="https://imgs.search.brave.com/hTvTNBzxQhdVzNHWp0r5e48rro5EL6rHP2CPKKWLZJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWF2YXRh/ci1wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bl8yNjg4MzQtNTM4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA" 
                    alt="profile pic" 
                    width="50px" 
                  />
                </div>
                )}
                {sender === "bot" && (
                <div id="bot">
                  <img 
                    src="https://img.lovepik.com/free-png/20211129/lovepik-robot-avatar-png-image_401191268_wh1200.png" 
                    alt="profile pic" 
                    width="50px" 
                  />
                  {message}
                </div>
                )}
            </>
           )
        }
 function App(){
          return (
             <div >
              <div id="box">
                  <ChatMsg message='hello bro' sender="user"/>
                  <ChatMsg message='how can i help u?' sender="bot"/>
                  <ChatMsg message='hello bro' sender="user"/>
                  <ChatMsg message='how can i help u?' sender="bot"/>
                  <ChatMsg message='hello bro' sender="user"/>
                  <ChatMsg message='how can i help u?' sender="bot"/>
              </div>
              <div>
                  <ChatInp />
              </div>
            </div>
          )
        }
const container=document.querySelector(".js-container")
ReactDOM.createRoot(container).render(<App />);