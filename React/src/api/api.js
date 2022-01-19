import axios from "axios";

export const apiComplain = ()=>{
     return axios.create({
    baseURL:'http://localhost:8081/Complain/Complaints'
}) ;
}
export const apiCompanyEmp = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/CompanyEmployee/CompanyEmployees'
}) ;
}
export const apiStateEmp = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/EmployeeState/stateEmployees'
}) ;
}
export const apiTreatment = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/Treatment/Treatments'
}) ;
}

export const apiCompany = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/Company/companies'
}) ;
}
export const apiDaysWorked = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/Day/Days'
}) ;
}

export const apiMachine = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/Machine/Machines'
}) ;
}
export const apiPiece = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/Piece/Pieces'
}) ;
}
export const apiAccess = ()=>{
    return axios.create({
   baseURL:'http://localhost:8081/Access'
}) ;
}
 