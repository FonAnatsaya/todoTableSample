const table = document.querySelector('.myTable');
const addButton = document.querySelector('#addButt');
const subButton = document.querySelector('#subButt');
const closeButton = document.querySelector('#closeButt');
const form = document.querySelector('.form');
const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const birthInput = document.querySelector('input[name="birthDate"]');
const editedSubmit = document.querySelector('#editButt');

let data = [
    { id: 1, name: 'name', age: 20, birthDate: new Date() }
];

initeTable();

function initeTable() {
    data.forEach(row => {
        addRowToTable(row);
    })
};

addButton.addEventListener('click', () => {
    table.classList.add('hidden');
    form.classList.remove('hidden');
    addButton.classList.add('hidden');
});

subButton.addEventListener('click', () => {
    const highestId = Math.max(...data.map(row => row.id));
    const id = highestId + 1;
    const birthDate = new Date(birthInput.value);
    const newRow = {
        id,
        name: nameInput.value,
        age: ageInput.value,
        birthDate
    };

    addRowToTable(newRow);

    table.classList.remove('hidden');
    form.classList.add('hidden');
    data.push(newRow);
});

editedSubmit.addEventListener('click', () => {

    updatedData(data);

    form.classList.add('hidden');
    editedSubmit.classList.add('hidden');

    addButton.classList.remove('hidden');
    table.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    table.classList.remove('hidden');
    form.classList.add('hidden');
    addButton.style.display = 'block';
});

function handleDelete(id) {
    data = data.filter(row => row.id !== id);   // Filter all data array
    // Update the data array with the filtered result
    updatedData(data);
}

function handleEdit(id) {

    let editedRow = data.find(row => row.id === id);

    // Populate the form fields with the data
    nameInput.value = editedRow.name; //
    ageInput.value = editedRow.age;
    birthInput.value = editedRow.birthDate.toISOString().slice(0, 10);

    // Show the form for editing
    form.classList.remove('hidden');
    editedSubmit.classList.remove('hidden');

    addButton.classList.add('hidden');
    table.classList.add('hidden');
    subButton.classList.add('hidden');

    // Add event listeners to form fields for capturing updates
    nameInput.addEventListener('input', event => {
        editedRow.name = event.target.value;
    });

    ageInput.addEventListener('input', event => {
        editedRow.age = event.target.value;
    });

    birthInput.addEventListener('input', event => {
        editedRow.birthDate = new Date(event.target.value);
    });
}

function addRowToTable(row) {
    const formattedDate = row.birthDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const template = `
            <tr>
                <td> ${row.id} </td>
                <td> ${row.name} </td>
                <td id="age"> ${row.age} </td>
                <td id="birth"> ${formattedDate} </td>
                <td class="butt">
                    <button class="editBut" onclick="handleEdit(${row.id})" >edit</button>
                    <button class="deleteBut" onclick="handleDelete(${row.id})">delete</button>
                </td>
            </tr>
       `
    table.innerHTML += template;
};

function updatedData(data) {

    const tableRows = Array.from(table.querySelectorAll('tr')); // Get all rows in the table
    const headerRow = table.querySelector('thead tr'); // Get the header row

    // Clear all rows except for the header row 
    tableRows.forEach(row => {
        if (row !== headerRow) {
            row.remove();
        }
    });

    // Add the updated data rows back to the table
    data.forEach(row => {
        addRowToTable(row);
    })
}

// Add the updated data rows back to the table

    // const tr = document.createElement('tr');

    // const createTableCell = (value, textAlign = 'left') => {
    //     const td = document.createElement('td');
    //     td.innerText = value;
    //     td.style.textAlign = textAlign;
    //     return td;
    // };

    // tr.appendChild(createTableCell(''));
    // tr.appendChild(createTableCell(nameInput.value));
    // tr.appendChild(createTableCell(ageInput.value, 'right'));
    // tr.appendChild(createTableCell(birthInput.value, 'center'));

    // const tdButt = document.createElement('td');
    // const butt1 = document.createElement('button');
    // const butt2 = document.createElement('button');
    // butt1.innerText = 'edit';
    // butt2.innerText = 'delete';
    // tdButt.appendChild(butt1);
    // tdButt.appendChild(butt2);
    // tr.appendChild(tdButt);