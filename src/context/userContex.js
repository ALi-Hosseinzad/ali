import { createContext } from "react";

const userContext = createContext({
    id: "",
    name: "",
    phone: "",
    mobile: "",
    image: "",
    fax:"",
    web:"",
    email:"",
    linkedin:"",
    instagram:"",
    twitter:"",
    percentage:"",
    accountID:"",
    handelShowImage : ()=>{}
});

export default userContext;
