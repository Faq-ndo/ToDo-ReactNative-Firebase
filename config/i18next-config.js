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
          //sinpup
          "Username": "Nombre de Usuario",
          "Password": "Contraseña",
          "Register": "Registrar",
          "Spanish": "Español",
          "English": "Inglés",
          //ToDoCreate
          "Name": "Nombre",
          "Description":"Descripción",
          "Date DD-MM-YY":"Fecha DD-MM-YY",
          "Save ToDo":"Guardar ToDo",
  
  
  
        },
      },
      en: {
        translation: {
               //login
          "Email":"Email",  
          //sinpup
          "Username": "Username",
          "Password": "Password",
          "Register": "Register",
          "Spanish": "Spanish",
          "English": "English",
           //ToDoCreate
           "Name": "Name",
           "Description":"Description",
           "Date DD-MM-YY":"Date DD-MM-YY",
           "Save ToDo":"Save ToDo",
   
        },
      },
    },
  });
  
export default i18n;