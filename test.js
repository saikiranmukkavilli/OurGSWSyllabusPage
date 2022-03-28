var fs = require('fs');
// make sure to have correct json file here otherwise error will occur
fs.readFile('index.json', 'utf8', function (err, data) {
    if (err){
        console.log(err);
    }
    else {
        // Select department from faculty at index 0
        console.log(JSON.parse(data).faculty[0].departments);
        
       /* Select CRN from Classes array at index 0
        console.log(JSON.parse(data).Classes[0].SSBSECT_CRN);]
        */
    }
}) 

/*
search crn 
    give instructor perry, shannon
    in index.json shannon perry
    perry, shannon = shannon perry
*/
/*
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