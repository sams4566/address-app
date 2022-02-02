const tableKey = 'cms-table';

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    localStorage.removeItem(tableKey);
});


let cmsTable;
let cmsTableDemo = {
    'John Smith': {
        'phone': '0123456789',
        'address': '123 Park Lane, London, UK, N1 2QQ',
        'address2': '123 Park Lane',
        'address3': '',
        'address4': '',
        'address5': 'London',
        'address6': 'London',
        'address7': 'N1 2QQ',
    },
    'Jeremy Jones': {
        'phone': '0323456789',
        'address': '123 Oxford Street, London, UK, N2 2WW',
        'address2': '123 Oxford Street, London, UK, N2 2WW',
        'address3': '',
        'address4': '',
        'address5': 'London',
        'address6': 'London',
        'address7': 'N2 2WW',
    }
}

let enableDisableNameInput = (option) => {
    let newPersonName = document.getElementById('newPersonName')

    if (option === 'enable')
        newPersonName.disabled = false;
    else if (option === 'disabled');
        newPersonName.disabled = true;
}

let refreshDOMTable = () => {
    // cmsTable = cmsTableDemo;
    let cmsTableKeys = Object.keys(cmsTable);
    let tableContainer = document.getElementById('cmsTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    tableContainer.removeChild(oldTableBody);
    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < cmsTableKeys.length; i++) {
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentAddressCol = document.createElement('div');
        let currentAddressCol2 = document.createElement('div');
        let currentAddressCol3 = document.createElement('div');
        let currentAddressCol4 = document.createElement('div');
        let currentAddressCol5 = document.createElement('div');
        let currentAddressCol6 = document.createElement('div');
        let currentAddressCol7 = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');

        currentRow.className = 'cms-table-row';
        currentNameCol.className = 'cms-table-column cms-name';
        currentPhoneCol.className = 'cms-table-column cms-phone';
        currentAddressCol.className = 'cms-table-column cms-address';
        currentAddressCol2.className = 'cms-table-column cms-address';
        currentAddressCol3.className = 'cms-table-column cms-address';
        currentAddressCol4.className = 'cms-table-column cms-address';
        currentAddressCol5.className = 'cms-table-column cms-address';
        currentAddressCol6.className = 'cms-table-column cms-address';
        currentAddressCol7.className = 'cms-table-column cms-address';
        currentEditBtn.className = 'cms-table-column cms-edit';
        currentDeleteBtn.className = 'cms-table-column cms-delete';

        currentNameCol.innerHTML = cmsTableKeys[i];
        currentPhoneCol.innerHTML = cmsTable[cmsTableKeys[i]].phone;
        currentAddressCol.innerHTML = cmsTable[cmsTableKeys[i]].address;
        currentAddressCol2.innerHTML = cmsTable[cmsTableKeys[i]].address2;
        currentAddressCol3.innerHTML = cmsTable[cmsTableKeys[i]].address3;
        currentAddressCol4.innerHTML = cmsTable[cmsTableKeys[i]].address4;
        currentAddressCol5.innerHTML = cmsTable[cmsTableKeys[i]].address5;
        currentAddressCol6.innerHTML = cmsTable[cmsTableKeys[i]].address6;
        currentAddressCol7.innerHTML = cmsTable[cmsTableKeys[i]].address7;

        currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

        currentRow.appendChild(currentNameCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentAddressCol);
        currentRow.appendChild(currentAddressCol2);
        currentRow.appendChild(currentAddressCol3);
        currentRow.appendChild(currentAddressCol4);
        currentRow.appendChild(currentAddressCol5);
        currentRow.appendChild(currentAddressCol6);
        currentRow.appendChild(currentAddressCol7);
        currentRow.appendChild(currentEditBtn);
        currentRow.appendChild(currentDeleteBtn);
        newTableBody.appendChild(currentRow);
    }
    
    let enableDisableNewUserModal = (option) => {
        let newPersonName = document.getElementById('newPersonName');
        let newPersonPhone = document.getElementById('newPersonPhone');
        let newPersonAddress = document.getElementById('newPersonAddress');
        let newPersonAddress2 = document.getElementById('formatted_address_0');
        let newPersonAddress3 = document.getElementById('formatted_address_1');
        let newPersonAddress4 = document.getElementById('formatted_address_2');
        let newPersonAddress5 = document.getElementById('formatted_address_3');
        let newPersonAddress6 = document.getElementById('formatted_address_4');
        let newPersonAddress7 = document.getElementById('postcode');


        newPersonName.value = '';
        newPersonPhone.value = '';
        newPersonAddress.value = '';
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
    let addNewEntryBtn = document.getElementById('cmsAddNewEntry');
    let editBtns = document.getElementsByClassName('cms-edit');
    let deleteBtns = document.getElementsByClassName('cms-delete');

    let newPersonSubmitBtn = document.getElementById('newPersonSubmitBtn');
    let newPersonCancelBtn = document.getElementById('newPersonCancelBtn');

    newPersonSubmitBtn.addEventListener('click', () => {
        let newPersonName = document.getElementById('newPersonName').value.trim();
        let newPersonPhone = document.getElementById('newPersonPhone').value.trim();
        let newPersonAddress = document.getElementById('newPersonAddress').value.trim();
        let newPersonAddress2 = document.getElementById('formatted_address_0').value.trim();
        let newPersonAddress3 = document.getElementById('formatted_address_1').value.trim();
        let newPersonAddress4 = document.getElementById('formatted_address_2').value.trim();
        let newPersonAddress5 = document.getElementById('formatted_address_3').value.trim();
        let newPersonAddress6 = document.getElementById('formatted_address_4').value.trim();
        let newPersonAddress7 = document.getElementById('postcode').value.trim();

        if(newPersonName === '')
            document.getElementById('newPersonName').className = 'input-error';
        else
            document.getElementById('newPersonName').className = '';

        if(newPersonPhone === '')
            document.getElementById('newPersonPhone').className = 'input-error';
        else
            document.getElementById('newPersonPhone').className = '';

        if(newPersonAddress === '')
            document.getElementById('newPersonAddress').className = 'input-error';
        else
            document.getElementById('newPersonAddress').className = '';

        if(newPersonAddress2 === '')
            document.getElementById('formatted_address_0').className = 'input-error';
        else
            document.getElementById('formatted_address_0').className = '';

        if(newPersonAddress3 === '')
            document.getElementById('formatted_address_1').className = 'input-error';
        else
            document.getElementById('formatted_address_1').className = '';

        if(newPersonAddress4 === '')
            document.getElementById('formatted_address_2').className = 'input-error';
        else
            document.getElementById('formatted_address_2').className = '';

        if(newPersonAddress5 === '')
            document.getElementById('formatted_address_3').className = 'input-error';
        else
            document.getElementById('formatted_address_3').className = '';

        if(newPersonAddress6 === '')
            document.getElementById('formatted_address_4').className = 'input-error';
        else
            document.getElementById('formatted_address_4').className = '';

        if(newPersonAddress7 === '')
            document.getElementById('postcode').className = 'input-error';
        else
            document.getElementById('postcode').className = '';
        
        if(newPersonName !== '' && newPersonPhone !== '' && newPersonAddress !== '' && newPersonAddress2 !== '' && newPersonAddress3 !== '' && newPersonAddress4 !== '' && newPersonAddress5 !== '' && newPersonAddress6 !== '' && newPersonAddress7 !== '') {
            let newPerson = {};
            cmsTable[newPersonName] = {
                'phone': newPersonPhone,
                'address': newPersonAddress,
                'address2': newPersonAddress2,
                'address3': newPersonAddress3,
                'address4': newPersonAddress4,
                'address5': newPersonAddress5,
                'address6': newPersonAddress6,
                'address7': newPersonAddress7,
            }
            localStorage.setItem(tableKey, JSON.stringify(cmsTable));
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
            let personToEdit = cmsTable[nameToEdit];

            enableDisableNewUserModal('enable');

            let newPersonName = document.getElementById('newPersonName');
            let newPersonPhone = document.getElementById('newPersonPhone');
            let newPersonAddress = document.getElementById('newPersonAddress');
            let newPersonAddress2 = document.getElementById('formatted_address_0');
            let newPersonAddress3 = document.getElementById('formatted_address_1');
            let newPersonAddress4 = document.getElementById('formatted_address_2');
            let newPersonAddress5 = document.getElementById('formatted_address_3');
            let newPersonAddress6 = document.getElementById('formatted_address_4');
            let newPersonAddress7 = document.getElementById('postcode');

            newPersonName.value = nameToEdit;
            newPersonPhone.value = personToEdit.phone;
            newPersonAddress.value = personToEdit.address;
            newPersonAddress2.value = personToEdit.address2;
            newPersonAddress3.value = personToEdit.address3;
            newPersonAddress4.value = personToEdit.address4;
            newPersonAddress5.value = personToEdit.address5;
            newPersonAddress6.value = personToEdit.address6;
            newPersonAddress7.value = personToEdit.address7;

            enableDisableNameInput('disable');
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
    let cmsTableKeys = Object.keys(cmsTable);
    for(let i = 0; i < cmsTableKeys.length; i++) {
        if(userName !== cmsTableKeys[i]) {
            tempTable[cmsTableKeys[i]] = cmsTable[cmsTableKeys[i]];
        }
    }
    cmsTable = tempTable;
    localStorage.setItem(tableKey, JSON.stringify(cmsTable));
    refreshDOMTable();
}

let init = () => {
    if(localStorage.getItem(tableKey)) {
        cmsTable = JSON.parse(localStorage.getItem(tableKey));
    } else {
        cmsTable = cmsTableDemo;
        localStorage.setItem(tableKey, JSON.stringify(cmsTable));
    }
    refreshDOMTable();
}

init();