Display_Email();

//DISPLAY THE FIELDS EMAIL AND NAMES : IF NOT LOGGED IN

function Display_Email() {
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    console.log(token);

    if (token === null) {
        document.getElementById('Information_contact-picture').style.display = "block";
        Event_Listener_Upload_Picture_NotLogged();
    } else if (token !== null && userId !== null) {
        document.getElementById('Information_contact-picture').style.display = "none";
        Event_Listener_Upload_Picture_Logged();
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.getItem('userId');
        document.getElementById('Popup__background').style.display = 'block';
        console.log('User needs to login again');
    }
}



//SAVE THE INFORMATIONS IF THE USER IS NOT LOGGED IN

function Event_Listener_Upload_Picture_NotLogged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        var inputOrder = document.getElementsByTagName("input");
        let datenow = Date.now();
        let myFile = document.getElementById('picture').files[0];

        
        var formData = new FormData();
        formData.append("picture", myFile);
        formData.append("userId", "not_logged_in");
        formData.append("comment", inputOrder[3].value);
        formData.append("name", inputOrder[4].value);
        formData.append("email", inputOrder[5].value);
        formData.append("datenow", datenow);

        console.log(formData);

        fetch('http://localhost:3000/api/pictures/upload_photo', { method: "POST", body: formData })
            
            .then(response => picture_saved(response))
            .catch(function (error) {
                console.log(Pictures);
                alert('TOKEN ERROR ' + error.message)
            })
    });
}



//SAVE THE INFORMATION IF THE USER IS LOGGED IN

function Event_Listener_Upload_Picture_Logged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        var inputOrder = document.getElementsByTagName("input");
        let datenow = Date.now();
        let myFile = document.getElementById('picture').files[0];
        var userId = JSON.parse(window.localStorage.getItem('userId'));

        console.log(userId.userId);
        console.log(inputOrder[1].value);

        var formData = new FormData();
        formData.append("picture", myFile);
        formData.append("userId", userId.userId);
        formData.append("comment", inputOrder[1].value);
        formData.append("name", "user-Logged-In");
        formData.append("email", "user-Logged-In");
        formData.append("datenow", datenow);

        console.log(formData);

        fetch('http://localhost:3000/api/pictures/upload_photo', { method: "POST", body: formData })

            .then(response => picture_saved())
            .catch(function (error) {
                alert('TOKEN ERROR ' + error.message)
            })
    });
}

function picture_saved() {
    let queryParams = new URLSearchParams(window.location.search);
    window.setTimeout(window.location.replace("../../HTML/GENERAL/ConfirmationUpload.html" + "?" + queryParams.toString()), 5000);
}