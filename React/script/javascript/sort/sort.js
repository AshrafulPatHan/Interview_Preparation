// node sort.js

let data = [
    {id:3, name:"D" , isStudent:true, date:"2023-04-01" },
    {id:1, name:"B" , isStudent:false, date:"2023-06-01"},
    {id:5, name:"F" , isStudent:true, date:"2023-02-01" },
    {id:0, name:"A" , isStudent:true, date:"2023-07-01" },
    {id:2, name:"C" , isStudent:false, date:"2023-05-01"},
    {id:4, name:"E" , isStudent:true, date:"2023-03-01" },
]


// sort by id
function SortById() {
    data = data.sort((a,b) =>{
        if (a.id < b.id) {
            return -1
        }
    })
    console.log(data);
}

SortById()

// sort by id
function SortByIds() {
    data = data.sort((a, b) => a.id - b.id);
    console.log(data);
}

SortByIds()

// sort by name
function SortByName() {
    data = data.sort((a,b) =>{
        if (a.name < b.name) {
            return -1
        }
    })
    console.log(data);
}

// SortByName()

// sort by Student valuation
function SortByNIsStudent() {
    data = data.sort((a,b) =>{
        if (!a.isStudent < !b.isStudent) {
            return -1
        }
    })
    console.log(data);
}

// SortByNIsStudent()

// sort by date
function SortByNDate() {
    data = data.sort((a,b) =>{
        let date1 = new Date(a.date) 
        let date2 = new Date(b.date) 
        if (date1 < date2) {
            return -1
        }
    })
    console.log(data);
}

SortByNDate()