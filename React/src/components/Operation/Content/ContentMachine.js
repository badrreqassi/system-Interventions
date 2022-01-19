export const content  = {    
        
        
    inputs:[
        { 
            label : "Name:",
            type : "text",
            name: "machineName",
            
        },
        { 
            label : "Num Machine:",
            type : "text",
            name: "numMachine",
            
        },
             
            { 
                label : "Start Date:",
                type : "date", 
                name: "startDate",
                
            },
            { 
                label : "Date Of Death:",
                type : "date",
                name: "dateOfDeath",
                
            },
            { 
                label : "Date Of Normal Treatment:",
                type : "date",
                name: "dateOfNormalTreatment",
                
            },
            
            
         
    ] ,

    select :[
        { 
            label : "Statue:",      
            name: "statue", 
            ValueSelect :[
                    {
                    value: "Life"
                    },
                    {
                    value: "Death"
                    }
                ] 
           
            
        },
    ]



}