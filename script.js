const tableKey = 'table';

let contactTable;
let contactTableDemo = {
    'John Smith': {
        'phone': '0123456789',
        'email': 'john@gmail.com',
        'address2': '123 Park Lane',
        'address3': '',
        'address4': '',
        'address5': 'London',
        'address6': 'London',
        'address7': 'N1 2QQ',
    },
    'Jeremy Jones': {
        'phone': '0323456789',
        'email': 'jeremy@gmail.com',
        'address2': '123 Oxford Street, London, UK, N2 2WW',
        'address3': '',
        'address4': '',
        'address5': 'London',
        'address6': 'London',
        'address7': 'N2 2WW',
    }
}

let refreshDOMTable = () => {
    // contactTable = contactTableDemo;
    scroll(0,0)
    let contactTableKeys = Object.keys(contactTable);
    let tableContainer = document.getElementById('contactTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    tableContainer.removeChild(oldTableBody);
    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < contactTableKeys.length; i++) {
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentEmailCol = document.createElement('div');
        let currentAddressCol2 = document.createElement('div');
        let currentAddressCol5 = document.createElement('div');
        let currentAddressCol7 = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');

        currentRow.className = 'table-row';
        currentNameCol.className = 'table-column name2';
        currentPhoneCol.className = 'table-column phone2';
        currentEmailCol.className = 'table-column email2';
        currentAddressCol2.className = 'table-column address';
        currentAddressCol5.className = 'table-column address';
        currentAddressCol7.className = 'table-column address';
        currentEditBtn.className = 'table-column edit-contact';
        currentDeleteBtn.className = 'table-column delete-contact';

        currentNameCol.innerHTML = contactTableKeys[i];
        currentPhoneCol.innerHTML = contactTable[contactTableKeys[i]].phone;
        currentEmailCol.innerHTML = contactTable[contactTableKeys[i]].email;
        currentAddressCol2.innerHTML = contactTable[contactTableKeys[i]].address2;
        currentAddressCol5.innerHTML = contactTable[contactTableKeys[i]].address5;
        currentAddressCol7.innerHTML = contactTable[contactTableKeys[i]].address7;

        currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

        currentRow.appendChild(currentNameCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentEmailCol);
        currentRow.appendChild(currentAddressCol2);
        currentRow.appendChild(currentAddressCol5);
        currentRow.appendChild(currentAddressCol7);
        currentRow.appendChild(currentEditBtn);
        currentRow.appendChild(currentDeleteBtn);
        newTableBody.appendChild(currentRow);
    }
    
    let enableDisableNewUserModal = (option) => {
        let newPersonName = document.getElementById('newPersonName');
        let newPersonPhone = document.getElementById('newPersonPhone');
        let newPersonEmail = document.getElementById('newPersonEmail');
        let newPersonAddress2 = document.getElementById('formatted_address_0');
        let newPersonAddress3 = document.getElementById('formatted_address_1');
        let newPersonAddress4 = document.getElementById('formatted_address_2');
        let newPersonAddress5 = document.getElementById('formatted_address_3');
        let newPersonAddress6 = document.getElementById('formatted_address_4');
        let newPersonAddress7 = document.getElementById('postcode');

        newPersonName.value = '';
        newPersonPhone.value = '';
        newPersonEmail.value = '';
        newPersonAddress2.value = '';
        newPersonAddress3.value = '';
        newPersonAddress4.value = '';
        newPersonAddress5.value = '';
        newPersonAddress6.value = '';
        newPersonAddress7.value = '';

        let newPersonModal = document.getElementById('newPersonModal');
        let backdrop = document.getElementById('backdrop');

        newPersonModal.className = `${option}-modal`
        backdrop.className = `${option}-modal`
    }
    let addNewEntryBtn = document.getElementById('contactAddNewEntry');
    let editBtns = document.getElementsByClassName('edit-contact');
    let deleteBtns = document.getElementsByClassName('delete-contact');

    let newPersonSubmitBtn = document.getElementById('newPersonSubmitBtn');
    let newPersonCancelBtn = document.getElementById('newPersonCancelBtn');

    newPersonSubmitBtn.addEventListener('click', () => {
        let newPersonName = document.getElementById('newPersonName').value.trim();
        let newPersonPhone = document.getElementById('newPersonPhone').value.trim();
        let newPersonEmail = document.getElementById('newPersonEmail').value.trim();
        let newPersonAddress2 = document.getElementById('formatted_address_0').value.trim();
        let newPersonAddress3 = document.getElementById('formatted_address_1').value.trim();
        let newPersonAddress4 = document.getElementById('formatted_address_2').value.trim();
        let newPersonAddress5 = document.getElementById('formatted_address_3').value.trim();
        let newPersonAddress6 = document.getElementById('formatted_address_4').value.trim();
        let newPersonAddress7 = document.getElementById('postcode').value.trim();
        
        if(newPersonName !== '' && newPersonPhone !== '' && newPersonEmail !== '' && newPersonAddress2 !== '' && newPersonAddress5 !== '' && newPersonAddress7 !== '') {
            let newPerson = {};
            contactTable[newPersonName] = {
                'phone': newPersonPhone,
                'email': newPersonEmail,
                'address2': newPersonAddress2,
                'address3': newPersonAddress3,
                'address4': newPersonAddress4,
                'address5': newPersonAddress5,
                'address6': newPersonAddress6,
                'address7': newPersonAddress7,
            }
            localStorage.setItem(tableKey, JSON.stringify(contactTable));
            enableDisableNewUserModal('disable');
            refreshDOMTable();
        }
    });

    newPersonCancelBtn.addEventListener('click', () => {
        enableDisableNewUserModal('disable');
    })

    addNewEntryBtn.addEventListener('click', () => {
        enableDisableNewUserModal('enable');
    });

    for(let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', ($event) => {
            let nameToEdit = $event.target.parentElement.children[0].innerText;
            let personToEdit = contactTable[nameToEdit];

            enableDisableNewUserModal('enable');

            let newPersonName = document.getElementById('newPersonName');
            let newPersonPhone = document.getElementById('newPersonPhone');
            let newPersonEmail = document.getElementById('newPersonEmail');
            let newPersonAddress2 = document.getElementById('formatted_address_0');
            let newPersonAddress3 = document.getElementById('formatted_address_1');
            let newPersonAddress4 = document.getElementById('formatted_address_2');
            let newPersonAddress5 = document.getElementById('formatted_address_3');
            let newPersonAddress6 = document.getElementById('formatted_address_4');
            let newPersonAddress7 = document.getElementById('postcode');

            newPersonName.value = nameToEdit;
            newPersonPhone.value = personToEdit.phone;
            newPersonEmail.value = personToEdit.email;
            newPersonAddress2.value = personToEdit.address2;
            newPersonAddress3.value = personToEdit.address3;
            newPersonAddress4.value = personToEdit.address4;
            newPersonAddress5.value = personToEdit.address5;
            newPersonAddress6.value = personToEdit.address6;
            newPersonAddress7.value = personToEdit.address7;

        })
    }

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', ($event) => {
            let nameToDelete = $event.target.parentElement.children[0].innerText;
            let isSure = window.confirm('Are you sure you want to delete ' + nameToDelete + '?');
            if (isSure)
                deleteUserFromTable(nameToDelete);
        })
    }
}

let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let contactTableKeys = Object.keys(contactTable);
    for(let i = 0; i < contactTableKeys.length; i++) {
        if(userName !== contactTableKeys[i]) {
            tempTable[contactTableKeys[i]] = contactTable[contactTableKeys[i]];
        }
    }
    contactTable = tempTable;
    localStorage.setItem(tableKey, JSON.stringify(contactTable));
    refreshDOMTable();
}

let init = () => {
    if(localStorage.getItem(tableKey)) {
        contactTable = JSON.parse(localStorage.getItem(tableKey));
    } else {
        contactTable = contactTableDemo;
        localStorage.setItem(tableKey, JSON.stringify(contactTable));
    }
    refreshDOMTable();
}

init();