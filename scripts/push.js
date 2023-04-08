
let address=document.getElementById('address')
let email=document.getElementById('email');
let inn=document.getElementById('inn');
let kpp=document.getElementById('kpp');
let name=document.getElementById('name');






document.querySelectorAll('button')[1].addEventListener('click',Post)
function Post(){
    let inp={address:address.value,email:email.value,inn:inn.value,kpp:kpp.value,name:name.value}
fetch(users.json, {
	
	
	method: "POST",
	
	
	body: JSON.stringify({
		title: "",
		body: JSON.stringify(inp),
		userId: 1
	}),
	
	
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));

document.getElementById('demo').innerHTML+=`  <tr>
<td>${JSON.stringify(inp.name)}</td>
<td>${JSON.stringify(inp.address)}</td>
<td>${JSON.stringify(inp.email)}</td>
<td>${JSON.stringify(inp.inn)}</td>
<td>${JSON.stringify(inp.kpp)}</td>
</tr>`
console.log(JSON.stringify(inp))
}