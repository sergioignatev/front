let inp=document.getElementById('input')
function receive(){
fetch(inp.value)
.then(x => x.json())
.then(user=>{
		
		let li = `<tr><th>Name</th><th>KPP</th><th>Email</th><th>Address</th><th>INN</th></tr>`;
	
		user.map(user=>{
		
			li += `<tr>
				<td>${user.name} </td>
                <td>${user.kpp}</td>
                <td>${user.email}</td>	
                <td>${user.address}</td>
                <td>${user.inn}</td>	
			</tr>`;
		})

	// Display result
	document.getElementById("users").innerHTML = li;

	})
}