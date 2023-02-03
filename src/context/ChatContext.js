import {
    createContext,
    useContext,
    useReducer,
  } from "react";
import { UseAuth } from "./context";
  
  export const ChatContext = createContext();
  
  export const ChatContextProvider = ({ children }) => {
    const { users } = UseAuth();
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,
            chatId:
              users.uid > action.payload.uid
                ? users.uid + action.payload.uid
                : action.payload.uid + users.uid,
          };
  
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };
  