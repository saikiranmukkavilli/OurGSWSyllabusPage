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

//Faculty Variables
var emp_name, email, phone, building, office;

//Class variables
var CRN, subj_Code, courseNum, title, days, time, cLocation, instructor, cType, hrs;

function button(){
    var searchtxt = document.getElementById("search-input").value;

    fetch('index.json')
    .then(response => response.json())
    .then(data => {
        
        emp_name = JSON.stringify(data.faculty.fullName);
        email = JSON.stringify(data.faculty.email);
        phone =JSON.stringify(data.faculty.phone);
        building = JSON.stringify(data.faculty.building);
        office = JSON.stringify(data.faculty.roomNum);
    });

    fetch('Classes2022.json')
    .then(response => response.json())
    .then(data => {
    
    CRN = JSON.stringify(data.Classes.SSBSECT_CRN);
    subj_Code = JSON.stringify(data.Classes.SSBSECT_CRN);
    courseNum = JSON.stringify(data.Classes.SSBSECT_CRN);
    title = JSON.stringify(data.Classes.SSBSECT_CRN);
    days = JSON.stringify(data.Classes.SSBSECT_CRN);
    time = JSON.stringify(data.Classes.SSBSECT_CRN);
    cLocation= JSON.stringify(data.Classes.SSBSECT_CRN);
    instructor= JSON.stringify(data.Classes.SSBSECT_CRN);
    cType= JSON.stringify(data.Classes.SSBSECT_CRN);
    hrs= JSON.stringify(data.Classes.SSBSECT_CRN);
    Create();
    });

}

function Create(){
    var div = document.getElementById('demo');
    var para = document.createElement('p');
    var node = document.createTextNode("");


    para.appendChild(node);
    div.appendChild(para);
}

var clickCounter = 0;

function Reset(){
    
    clickCounter += 1;

    if (clickCounter == 1)
        alert("WARNING!!!This will completely reset your form.\n"+
        "You will have to enter all data again.\n"+
        "If you are sure you want to delete your work click delete again.");

    else if (clickCounter == 2){
        location.reload()
        clickCounter = 0;
    }
}

//foreach loop to search through 
