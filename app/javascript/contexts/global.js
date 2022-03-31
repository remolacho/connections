import React from "react"
import Toastr from 'toastr';
import { useCookies } from "react-cookie"

const GlobalContext = React.createContext()

function GlobalProvider(props) {
  const [_cookies, _setCookie, removeCookie] = useCookies()

  function handleRemoveCookie(success = true, message = ''){
    removeCookie("authorization", {
      path: '/'
    })
    Toastr.options.closeButton = true;
    Toastr.options.timeOut = 5000;
    Toastr.options.extendedTimeOut = 1000;
    Toastr.options.positionClass = "toast-bottom-right";
    if(success){
      Toastr.success("Gracias por su visita 👋");
    } else {
      Toastr.error(message); 
    }
  }

  const value = {
    handleRemoveCookie
  }

  return <GlobalContext.Provider value={value} {...props} />
}

export { GlobalProvider, GlobalContext }

