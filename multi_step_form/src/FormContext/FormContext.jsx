import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({children}) => {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        number: "",
        address: "",
        education: "",
        employment: "",
        income: "",
        marital: ""
    });

    return (
        <FormContext.Provider
            value={{
                formData, setFormData
            }}
        >{children}</FormContext.Provider>
    );

};

export default FormContext;