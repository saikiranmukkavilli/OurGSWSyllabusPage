/*
Needed attributes from index:
Full Name  JSON.parse(index).faculty.fullName;
Email      JSON.parse(index).faculty.email;
Phone #    JSON.parse(index).faculty.phone;
Building   JSON.parse(index).building;
RoomNum    JSON.parse(index).faculty.roomNum;

Needed attributes from Classes2022:
CRN        JSON.parse(classes).Classes.SSBSECT_CRN;
Subj_Code  JSON.parse(classes).Classes.SSBSECT_CODE;
Course #   JSON.parse(classes).Classes.SSBSECT_NUMB;
Title      JSON.parse(classes).Classes.COURSE_TITLE;
Days       JSON.parse(classes).Classes.DAYS;
Class Time JSON.parse(classes).Classes.CLASS_TIME;
Location   JSON.parse(classes).Classes.LOCATION;
Instructor JSON.parse(classes).Classes.INSTRUCTOR;
(try to link with index to get info)
Class type JSON.parse(classes).Classes.METHOD;
Credit Hrs JSON.parse(classes).Classes.CREDIT_HOURS;
*/
/*
var classfile;
function button(){
    fetch('Classes2022.json')
    .then(response => response.json())
    .then(data => {
       data.forEach(Classes => {
           
       })
           
       }); 
};
*/

//Faculty Variables
var emp_name, email, phone, building, office;
//Class variables
var CRN,subj_Code,courseNum,title, days, Time, CLocation, Instructor, CType, Hrs;

function button(){
    var searchtxt = document.getElementById("search-input").value;

    fetch('Classes2022.json')
    .then(response => response.json())
    .then(data => {
    
    CRN = JSON.stringify(data.Classes.SSBSECT_CRN);
    document.getElementById("demo").innerText = CRN;

    });

}

function Create(){

}

/*foreach loop to search through 

/* using fs to parse json.
(not sure how to integrate searchbar function)

var fs = require('fs');
// make sure to have correct json file here otherwise error will occur
fs.readFile('index.json', 'utf8', function (err, index) {
    if (err){
        console.log(err);
    }
    else {
        // Select department from faculty at index 0
        facultyInfo = JSON.parse(index);
        console.log(JSON.parse(index).faculty[0]);

    }
});
fs.readFile('Classes2022.json','utf8', function(err,classes){
        if (err){
            console.log(err);
        }
        else{
            console.log(JSON.parse(classes).Classes[0]);
        }
});
*/

/* Using Fetch API.
Works with search bar, just have to figure out how to make it work now without database

const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function (){
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/'+ searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
}

//search
app.get('/search/:TYPE' , (request, response) => {
    const { FIRST_NAME } = request.params;
    const db = dbService.getDbServiceInstance();
   
    const result = db.searchByType(FIRST_NAME);
       
       result
       .then(data => response.json({data : data}))
       .catch(err => console.log(err));
   })

   async searchByType(TYPE){
    try {
        const response  = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM weapons WHERE TYPE = ?;";

            connection.query(query, [TYPE], (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        });
        return response;
    }catch(error){

    console.log(error);
    }
}
}
*/

/* using Fetch API again
Need to work on how to make searchbar work
const searchClasses = async searchText => {
    const res = await fetch {'/Classes2022.json'};
    const classes = await res.json();

    //Get matches to current text input
    let matches = classes.filter(class => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return class.COURSE_TITLE.match(regex)
    });


};

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.COURSE_TITLE}<h4>
        </div>
        `).join('');

        matchList.innerHTML = html;
    }
}
search.addEventListener('input', () => searchClasses(search.value));
*/