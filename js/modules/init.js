

let empTable    = document.querySelector('#employees');

function buildGrid() {
    fetch('../data/employees.json')
	
        .then( response => response.json() )
        .then( data => {
			empTable.lastElementChild.remove();
			let tbody = document.createElement('tbody');
            for (let employee of data.employees) {
				tbody.innerHTML += 
					`
					<tr>
						<td>${employee.id}</td>
						<td>${employee.name}</td>
						<td>${employee.extension}</td>
						<td>${employee.email}"></td>
						<td>${employee.department}</td>
						<td><button class="btn btn-sm btn-danger delete">X</button></td>
					</tr>
					`
				
            }
			empTable.appendChild(tbody);
            
        } )
        .catch( error => console.log(error.message) );
}
buildGrid();