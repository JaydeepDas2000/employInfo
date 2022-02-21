function onFormSubmit(){

    // validation
    var errorMessage = '';

    if(document.getElementById('empName').value == ""){
        errorMessage += 'Enter your name \n';
    }
    if(document.getElementById('empID').value == ""){
        errorMessage += 'Enter your ID \n';
    }
    if(document.getElementById('officeEmail').value == ""){
        errorMessage += 'Enter your office email \n';
    }
    if(document.getElementById('personalEmail').value == ""){
        errorMessage += 'Enter your personal email \n';
    }
    if(document.getElementById('bio').value == ""){
        errorMessage += 'Enter your Bio \n';
    }

    /*var formData = {};
    var enrollmentForm = document.getElementById('enrollmentForm');
    formData["empName"] = enrollmentForm.elements['empName'].value;
    console.log(fromData);*/

    if(errorMessage != ""){
        alert(errorMessage);
        return false;
    }

    // Enrolled
    var formData = readFormData();
    // console.log(formData);
    insertNewRecord(formData);
}

function readFormData(){
    var formData = {};
    var enrollmentForm = document.getElementById('enrollmentForm');
    formData["empName"] = enrollmentForm.elements['empName'].value;
    formData["empID"] = enrollmentForm.elements['empID'].value;
    formData["officeEmail"] = enrollmentForm.elements['officeEmail'].value;
    formData["personalEmail"] = enrollmentForm.elements['personalEmail'].value;
    formData["gender"] = enrollmentForm.elements['gender'].value;
    formData["role"] = enrollmentForm.elements['role'].value;
    formData["profilePicture"] = enrollmentForm.elements['profilePicture'].value;
    formData["bio"] = enrollmentForm.elements['bio'].value;
    return formData;
}

function insertNewRecord(data){
    console.log(data);
    var placeholder = document.getElementById('dtl-placeholder');

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');

    var div1 = document.createElement('div');
    div1.innerHTML = '<strong>' + data.empName + '</strong></br>';
    td1.appendChild(div1);
    
    var div2 = document.createElement('div');
    div2.innerHTML = data.role;
    td1.appendChild(div2);
    
    var div3 = document.createElement('div');
    div3.innerHTML = 'Emp ID : ' + data.empID;
    td1.appendChild(div3);

    var div4 = document.createElement('div');
    div4.innerHTML = data.gender;
    td1.appendChild(div4);

    var div5 = document.createElement('div');
    div5.innerHTML = data.officeEmail;
    td1.appendChild(div5);

    var div6 = document.createElement('div');
    div6.innerHTML = data.personalEmail;
    td1.appendChild(div6);

    var div7 = document.createElement('div');
    div7.innerHTML = data.bio;
    td1.appendChild(div7);

    tr.appendChild(td1);

    td2 = document.createElement("td")
    td2.innerHTML = `<center><img src="${data.profilePicture}" style="max-width: 128px; max-height: 128px"/></center>`;

    tr.appendChild(td2)
    placeholder.appendChild(tr)
}