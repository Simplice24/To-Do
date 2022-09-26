function gettingtime(){
    let now = new Date()
    let arr=[]
    let fulldate=now.toDateString();
    arr=fulldate.split(" ")
    document.getElementById("today").innerHTML=arr[0]
    document.getElementById("fulldate").innerHTML=`${arr[1]} ${arr[2]},${arr[3]}`
}

function gettingtasks(){
    let task_number=1;
    let btn= document.createElement('select');
    btn.type="button";
    btn.innerHTML="...";
    btn.setAttribute('id','action-button');
    btn.setAttribute('class','dropbtn');
    
    var values=["Actions","Pin","Edit","Delete"];
    for(const val of values){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        btn.appendChild(option);
    }

    let task= document.getElementById("input-field").value;
    let ul= document.getElementById("task-list");
    let chkb= document.createElement('input');
    let bbr=document.createElement('br');
    bbr.setAttribute('type','br')
    chkb.setAttribute('type','checkbox')
    chkb.setAttribute('id','box'+task_number)
    let li= document.createElement("li");
    li.appendChild(document.createTextNode(`${task}`));
    li.setAttribute("id","task"+`${task_number}`);
    if(task.length==0){
      alert("Please Enter a task");
    }
    else{
    ul.appendChild(chkb)+ul.appendChild(li)+li.appendChild(btn)+ul.appendChild(bbr);
    task_number++;
    }
    

}


let field=document.getElementById('add');
field.addEventListener('click',function clean(event){
    event.preventDefault();

    const task = document.getElementById('input-field');

    task.value = '';
})

function authentication(){
    let user=document.getElementById("input-field-1").value;
    let pass=document.getElementById("input-field-2").value;
    let administrators={
            "Username":"IamTrey",
            "Password":"Trey@tudu"
        };
        if(administrators["Username"]===user && administrators["Password"]===pass){
            window.location.href="index.html";
        }
       else{
           document.getElementById("results").innerHTML="Username and password do not match";
       }
}

function createAccount(){
    window.location.href="Signup-Login.html";
}


