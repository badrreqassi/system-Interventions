export const content = {
  inputs: [
    {
      label: "Date Complain:",
      type: "datetime-local",
      name: "dateComplain",
    },
    {
      label: "Description Complain:",
      type: "text",
      name: "descriptionComplain",
    },
  ],

  select: [
    {
      label: "Status:",
      name: "status",
      ValueSelect: [
        {
          value: "Emergence",
        },
        {
          value: "Non-Emergence",
        },
      ],
    },
    {
      label: "Type Complain:",
      name: "typeComplain",
      ValueSelect: [
        {
          value: "System",
        },
        {
          value: "Machine",
        },
      ],
    },
  ],
};

/*   inputs:[
         
             
            { 
                label : "Date Complain:",
                type : "datetime-local", 
                name: "DateComplain",
                
            },
            { 
                label : "Status:",
                type : "text",
                name: "status",
                
            },
            { 
                label : "Access:",
                type : "text",
                name: "accessComplain",
                
            },
            { 
                label : "Description Complain:",
                type : "text",
                name: "descriptionComplain",
                
            },
            { 
                label : "Type Complain:",
                type : "text",
                name: "typeComplain",
                
            }
         
    ] ,

    FK:[{ 
        label : "Employee State:",
        type : "number", 
        name: "empS",
        
    },
    { 
        label : "Employee company:",
        type : "number", 
        name: "empC",
        
    },
    { 
        label : "Machine:",
        type : "number", 
        name: "machine_id",
        
    } 
]*/
