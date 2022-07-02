const api_url ="https://jsonplaceholder.typicode.com/users";
function getApidata(URL){
    fetch(URL).then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        displayData(data);
    })
    .catch((error)=>console.log(error.message));
}

function displayData(APIDATA){
    for(let i of APIDATA){
        let tr=document.createElement("tr");
        
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");

        td1.innerText=`${i.id}`;
        td2.innerText=`${i.name}`;
        td3.innerText=`${i.email}`;
        td4.innerText=`${i.phone}`;
        td5.innerText=`${i.address.city}`;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        
        document.getElementById("mytable").appendChild(tr);
    }

}

getApidata(api_url);
