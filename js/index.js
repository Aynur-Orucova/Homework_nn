

function select_lucky_person(){
    var person_select = document.getElementById('person_select').value
    console.log(person_select)

    document.getElementById('person_img').src = "img/"+person_select+".jpg"
}

