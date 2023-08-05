function get(){
    let username=document.getElementById('name').value;
    let password=document.getElementById('password').value;
    let regex = /^[A-Za-z0-9_]+$/
    let regex2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
    let isValiduser=regex.test(username)
    let isValidpass=regex2.test(password)
    let url='membership.html';

    if (username.length<6 || username.length>20) {
        alert('username must be between 6 and 20 characters');
        url='#'
    }
    
    else if(password.length<8 || password.length>20) {
        alert('password must be between 8 and 20 characters');
        url='#'
    }

     else if(!isValiduser){
        alert('username must contains only alpha numeric and underscore');
        url='#'
    }

    else if(!isValidpass){
        alert('passwordmust contais uppercase,lowercase and number');
        url='#'
    }
    window.location.href=url
}

function getData(){
    let username=document.getElementById('uname').value
    let realname=document.getElementById('realname').value
    let team=document.getElementById('teams').value
    let regex = /^[A-Za-z0-9_]+$/
    let regex2=/^[a-zA-Z]*$/
    let isValiduser=regex.test(username)
    let isValidname=regex2.test(realname)
    if(username.length<6 || username.length>20){
        alert('username must be between 6 and 20 characters');
    }
    else if(realname.length<1){
        alert('Fill ur real name');
    }
    else if(!isValiduser){
        alert('username must contains only alpha numeric and underscore');
    }
    else if(!isValidname){
        alert('Fill ur real name');
    }
    else{
        let table=document.getElementById('table')
        let table_length=table.rows.length;
        let row=table.insertRow(table_length).outerHTML="<tr id='row"+table_length+"'><td id='username"+table_length+"'>"+username+"</td><td id='realname"+table_length+"'>"+realname+"</td><td id='team"+table_length+"'>"+team+"</td><td><button class='edit' id='edit"+table_length+"' onclick='edit("+table_length+")'>Edit</button><button class='save' id='save"+table_length+"' onclick='save("+table_length+")'>Save</button></td><td><button class='delete' id='del"+table_length+"' onclick='del("+table_length+")'>Delete</button></td></tr>"
    }
}

function edit(no){
    document.getElementById('edit'+no).style.display="none";
    document.getElementById('save'+no).style.display="block";

    let username=document.getElementById('username'+no);
    let real=document.getElementById('realname'+no);
    let team=document.getElementById('team'+no);

    let U=username.innerHTML;
    let R=real.innerHTML;
    let T=team.innerHTML;

    username.innerHTML="<input type='text' id='uname"+no+"' value='"+U+"'>"
    real.innerHTML="<input type='text' id='rname"+no+"' value='"+R+"'>"
    team.innerHTML="<input type='text' id='tname"+no+"' value='"+T+"'>"
}

function save(no){
    let uname_val=document.getElementById('uname'+no).value
    let rname_val=document.getElementById('rname'+no).value
    let tname_val=document.getElementById('tname'+no).value

    let regex = /^[A-Za-z0-9_]+$/
    let regex2=/^[a-zA-Z]*$/
    let isValiduser=regex.test(uname_val)
    let isValidname=regex2.test(rname_val)
    if(uname_val.length<6 || uname_val.length>20){
        alert('username must be between 6 and 20 characters');
    }
    else if(rname_val.length<1){
        alert('Fill ur real name');
    }
    else if(!isValiduser){
        alert('username must contains only alpha numeric and underscore');
    }
    else if(!isValidname){
        alert('Fill ur real name');
    }
    else{
        document.getElementById('username'+no).innerHTML=uname_val
        document.getElementById('realname'+no).innerHTML=rname_val
        document.getElementById('team'+no).innerHTML=tname_val

        document.getElementById('edit'+no).style.display="block";
        document.getElementById('save'+no).style.display="none";
    }
}

function del(no){
    document.getElementById('row'+no).outerHTML="";
}


