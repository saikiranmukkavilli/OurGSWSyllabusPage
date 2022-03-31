/*
Needed attributes from index:
Full Name  JSON.parse(index).faculty.fullName;
Email      JSON.parse(index).faculty.email;
Phone #    JSON.parse(index).faculty.phone;
Building   JSON.parse(index).building;
RoomNum    JSON.parse(index).faculty.roomNum;

Needed attributes from Classes2022:
CRN        JSON.parse(classes).Classes.SSBSECT_CRN;
Subj_Code  JSON.parse(classes).Classes.SSBSECT_SUBJ_CODE;
Course #   JSON.parse(classes).Classes.SSBSECT_CRSE_NUMB;
Title      JSON.parse(classes).Classes.COURSE_TITLE;
Days       JSON.parse(classes).Classes.DAYS;
Class Time JSON.parse(classes).Classes.CLASS_TIME;
Location   JSON.parse(classes).Classes.LOCATION;
Instructor JSON.parse(classes).Classes.INSTRUCTOR;
(try to link with index to get info)
Class type JSON.parse(classes).Classes.METHOD;
Credit Hrs JSON.parse(classes).Classes.CREDIT_HOURS;
document.getElementById("demo").innerHTML = '<p>'+ 
    `${CRN}`+`${subj_Code}`+`${courseNum}`+`${title}`+`${days}`+`${time}`+
    `${cLocation}`+`${instructor}`+`${cType}`+`${hrs}`+'</p>';

    Quizzes,tests,assignements,projects
    ask questions about above how many?, when?
*/
var body = document.body;

document.addEventListener("load", LoadWelcome());

function LoadWelcome(){
    body.innerHTML = '<div id="welcomeBoxContainer"><div>';
    document.getElementById('welcomeBoxContainer').innerHTML += '<div id="welcomeBox" class="unit">';
    document.getElementById('welcomeBox').innerHTML += '<img src="Pictures/GSW-Initials-Badge-Name-Horizontal-2C.png"/>' + '<div id="welcome" class="welcomeTxt">' + 'Welcome to the GSW Syllabus Generator.' + '</div>';
    document.getElementById('welcome').innerHTML += '<div id="instructions" class="welcomeTxt">' + 'Please enter the CRN of your course.' + '</div>'
    document.getElementById('instructions').innerHTML += '<div id="txtBtnRow">';
    document.getElementById('txtBtnRow').innerHTML += '<input type="text" id="txtCRN" name="txtCRN"/>' + '<input type="submit" value="Go" id="btnCRN" name="btnCRN" onclick="button()"/>' + '</div>';
}

function LoadSyllabus(){
    body.innerHTML = '<div id="syllabus"></div>';
        document.getElementById('syllabus').innerHTML += '<div id="headerContainer"></div>';
            document.getElementById('headerContainer').innerHTML += '<div id="header">';
                document.getElementById('header').innerHTML += '<div class="hemiHeader unit" id="headerLeft">' + '</div>';
                    document.getElementById('headerLeft').innerHTML +='<img src="GSW_logo_large.png" id="headerLogo">';
                document.getElementById('header').innerHTML += '<div class="hemiHeader unit" id="headerRight">' + '</div>';
                    document.getElementById('headerRight').innerHTML +='<table id="tblHemiR">' + '</table>';
                        document.getElementById('tblHemiR').innerHTML += 
                            '<tr>' + '<td>' +'<h1 id="college" class="details rightHemiHeader">' + 'College of Business & Computing' + '</h1>' + '</td>' + '</tr>'+
                            '<tr>' + '<td>' + '<h1 id="dept" class="details rightHemiHeader">' + 'Department of Computer Science' + '</h1>' + '</td>' + '</tr>';
            document.getElementById('headerContainer').innerHTML += '<div class="unit brick" id="cDetails"></div>';
                document.getElementById('cDetails').innerHTML = '<div class="brickTitle" id="cDetailsTable">'+ 'Course Details' + '</div>';
                    document.getElementById('cDetailsTable').innerHTML += '<table id="tblCourse">'+ '</tblCourse>';
                        document.getElementById('tblCourse').innerHTML += 
                            '<tr>' + '<td>' + '<span id="cName" class="details">' + `${title}`+ '</span>' + '</td>' + '</tr>' +
                            '<tr>' + '<td>' + '<span id="cTerm" class="details">' + '${term}'+ '</span>' + '<span id="cYear" class="details">' + '${year}' + '</span>' + '</td>' + '</tr>' +
                            '<tr>' + '<td>' + '<span id="cPrefix" class="details">' +`${subj_Code}` + '</span>' + '<span id="cNum" class="details">' +`${courseNum}` + '</span>' + '</td>' + '</tr>' +
                            '<tr>' + '<td>' + '<span id="cBuilding" class="details">' +`${cLocation}` + '</span>' + '</td>' + '<td>' + '<span id="cRoom" class="details">' + `${cLocation}` + '</span>' + '</td>' + '</tr>' +
                            '<tr>' + '<td>' + '<span id="cDays" class="details"> ' + `${days}` + '</span>' + '<span id="cTime" class="details">' + '</span>' + '</td>' + '<td>' + '<span id="cCreditHours" class="details">' + `${time}` + '</span>' + '</td>' + '</tr>';
            document.getElementById('headerContainer').innerHTML += '<div class="unit brick" id="pDetails">'+ '</div>';
                document.getElementById('pDetails').innerHTML += '<div class="brickTitle" id="pDetailsTable">' + 'Professor' + '</div>';
                    document.getElementById('pDetailsTable').innerHTML += '<table id="tblProf">' + '</table>';
                        document.getElementById('tblProf').innerHTML +=
                            '<tr>' + '<td>' + '<span id="pName" class="details">' + `${emp_name}` + '</span>' + '</td>' + '</tr>'+
                            '<tr>' + '<td>' + '<span id="pEmail" class="details">' + `${email}` + '</span>' + '</td>' + '</tr>'+
                            '<tr>' + '<td>' + '<span id="pPhone" class="details">' + `${phone}` + '</span>' + '</td>' + '</tr>' +
                            '<tr>' + '<td>' + '<span id="pBuilding" class="details">' + `${building}` + '</span>' + '<span id="pRoom" class="details">' + `${office}` + '</span>' + '</td>' + '</tr>';
}



//Faculty Variables
var emp_name, email, phone, building, office;

//Class variables
var CRN, subj_Code, courseNum, title, days, time, cLocation, instructor, cType, hrs;

function button(){
    var searchtxt = document.getElementById("txtCRN").value;
    

    fetch('Classes_2022.json')
    .then(response => response.json())
    .then(data => {
    for (var i = 0; i < data.Classes.length; i++){
        if (searchtxt == data.Classes[i].SSBSECT_CRN)
        {
            CRN = JSON.stringify(data.Classes[i].SSBSECT_CRN);
            subj_Code = JSON.stringify(data.Classes[i].SSBSECT_SUBJ_CODE);
            courseNum = JSON.stringify(data.Classes[i].SSBSECT_CRSE_NUMB);
            title = JSON.stringify(data.Classes[i].COURSE_TITLE);
            days = JSON.stringify(data.Classes[i].DAYS);
            time = JSON.stringify(data.Classes[i].CLASS_TIME);
            cLocation = JSON.stringify(data.Classes[i].LOCATION);
            instructor = JSON.stringify(data.Classes[i].INSTRUCTOR);
            cType = JSON.stringify(data.Classes[i].METHOD);
            hrs = JSON.stringify(data.Classes[i].CREDIT_HOURS); 
            break;   
        }
        
    }
    });

    fetch('index.json')
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.faculty.length; i++)
            if(instructor == FormatName(data.faculty[i].firstName,data.faculty[i].lastName)){
                emp_name = JSON.stringify(data.faculty[i].fullName);
                email = JSON.stringify(data.faculty[i].email);
                phone = JSON.stringify(data.faculty[i].phone);
                building = JSON.stringify(data.faculty[i].building);
                office = JSON.stringify(data.faculty[i].roomNum);
            }
            RemoveQuotes()
            LoadSyllabus();
    });
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

function print(){
    var classDiv = document.getElementById('class');
    var facultyDiv = document.getElementById('faculty');
    RemoveQuotes()

    classDiv.innerHTML = `<p>${CRN}<br>${subj_Code}<br>${courseNum}
    <br>${title}<br>${days}<br>${time}<br>${cLocation}<br>${instructor}
    <br>${cType}<br>${hrs}</p>`;

    facultyDiv.innerHTML = `<p>${emp_name}<br>${email}<br>${phone}
    <br>${building}<br>${office}</p>`;
}

function FormatName(firstName, lastName){
    var formatted = `"${lastName}, ${firstName}"`;
    return formatted;
}

function RemoveQuotes(){
    subj_Code = subj_Code.substring(1,subj_Code.length-1);
    title = title.substring(1,title.length-1);
    days = days.substring(1,days.length-1);
    time = time.substring(1,time.length-1);
    cLocation = cLocation.substring(1,cLocation.length-1);
    instructor = instructor.substring(1,instructor.length-1);
    cType = cType.substring(1,cType.length-1);
    hrs = hrs.substring(1,hrs.length-1);
    emp_name = emp_name.substring(1,emp_name.length-1);
    email = email.substring(1,email.length-1);
    phone = phone.substring(1,phone.length-1);
    building = building.substring(1,building.length-1);
    office = office.substring(1,office.length-1);  
}
