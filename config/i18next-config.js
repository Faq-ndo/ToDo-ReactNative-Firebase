import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "es",
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          //login
          "Email":"Correo",  
          "Signin": "Entrar",
          "Don't have account? Click here to signup": "No tienes cuenta, haz click aquí para crear una",
          //sinpup
          "Username": "Nombre de Usuario",
          "Password": "Contraseña",
          "Register": "Registrar",
          "Spanish": "Español",
          "English": "Inglés",
          //ToDoCreate
          "Title": "Título",
          "Description":"Descripción",
          "Create":"Crear",
          //Signup
          "Name": "Nombre",
          "Email": "Correo",
          "Password": "Contraseña",
          "Signup": "Inscribirse",
          "Already Registered? Click here to login": "¿Ya estas registrado?,haz click aquí para entrar",
           //App
           "Dashboard":"Dashboard",
           "app_Sign_up":"Registrarse",
           "Log In": "Log In",
           "Create ToDo": "Crear ToDo",
           "ToDo Details": "ToDo Detalles",
           
        },
      },
      en: {
        translation: {
          //login
          "Email":"Email",  
          "Signin": "Sign In",
          "Don't have account? Click here to signup": "Don't have account? Click here to signup",
          //sinpup
          "Username": "Username",
          "Password": "Password",
          "Register": "Register",
          "Spanish": "Spanish",
          "English": "English",
          //ToDoCreate
          "Title": "Title",
          "Description":"Description",
          "Create":"Create",
          //Signup
          "Name": "Name",
          "Email": "Email",
          "Password": "Password",
          "Signup": "Sign Up",
          "Already Registered? Click here to login": "Already Registered? Click here to login",
          //App
          "Dashboard":"Dashboard",
          "app_Sign_up":"Sign Up",
          "Log In": "Log In",
          "Create ToDo": "Create ToDo",
          "ToDo Details": "ToDo Details",
        },
      },
    },
  });
  
export default i18n;