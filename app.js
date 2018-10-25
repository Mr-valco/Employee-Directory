$('#textInput').hide();

const theCard = function (name, officeNum, phoneNum) {

    return ` <br> 
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="biscuit.png" alt="Card image cap">
         <div class="card-body">
            <div class="card-text"> 
                <p>${name}</p>
                <p>${officeNum}</p>
                <p>${phoneNum}</p>
            </div>
        </div>
    </div>
    <br>`;
}

// 1. Render all of the names in `employeeList` individually in paragraph tags to the div with the class `content`.
const render = function () {
    $('.content').empty();

    for (i = 0; i < employeeList.length; i++) {

        var name = employeeList[i].name;
        var officeNum = employeeList[i].officeNum;
        var phoneNum = employeeList[i].phoneNum;

        $('.content').append(theCard(name, officeNum, phoneNum));

    }
}





// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
const getInputVal = function () {

    var employee = {
        name: $('#name').val(),
        officeNum: $('#officeNum').val(),
        phoneNum: $('#phoneNum').val()
    };

    employeeList.push(employee);

    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
}

$('#addBtn').on('click', getInputVal);


//3. When the search button is pressed, add the  message to the `body` if the name that was input is in the employeeList array.
const verifys = function () {
   
    var employee = {
        name: $('#name').val(),
        officeNum: $('#officeNum').val(),
        phoneNum: $('#phoneNum').val()
    };
    //looks for the index of the item 
    const searchIndex = employeeList.findIndex((obj => obj.name == employee.name));

 
    // If our employeeList includes the input value, add message to the body
    if (searchIndex !== -1) {
        
        $('#verify').text('YES');
        $('#employeeList').hide();
    } else {
        
        $('#verify').text('NO');
        $('#employeeList').hide();
    }
    $('#verify').show();
    // After performing our actions, clear the name input
    $('#name').val('');
}

$('#searchBtn').on('click', verifys);


const editEmployee = function () {

    var employee = {
        name: $('#name').val(),
        officeNum: $('#officeNum').val(),
        phoneNum: $('#phoneNum').val()
    };

    //edit employee
    const updateIndex = employeeList.findIndex((obj => obj.name == employee.name));
    employeeList[updateIndex].officeNum = $('#officeNum').val();
    employeeList[updateIndex].phoneNum = $('#phoneNum').val();

    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();

}
$('#updateBtn').on('click', editEmployee);

//4. When the delete button is pressed, delete the element from employeeList that matches the name the user entered in the input field. Re-render the list.
const removeName = function () {

    var employee = {
        name: $('#name').val(),
        officeNum: $('#officeNum').val(),
        phoneNum: $('#phoneNum').val()
    };
    const searchIndex = employeeList.findIndex((obj => obj.name == employee.name));
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    employeeList.splice(searchIndex, 1);

    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    render();
}

$('#deleteBtn').on('click', removeName);



const viewLink = function () {
    render();
    $('#employeeList').show();
    $('#verify').hide();
    $('#textInput').hide();
};

$('#view').on('click', viewLink);

const addLink = function () {
    render();
    $('#employeeList').hide();
    $('#verify').hide();
    $('#searchBtn').hide();
    $('#updateBtn').hide();
    $('#deleteBtn').hide();
    $('#textInput').show();
    $('#addBtn').show();

};

$('#addLink').on('click', addLink);

const searchLink = function () {
    render();
    $('#employeeList').hide();
    $('#verify').hide();
    $('#updateBtn').hide();
    $('#deleteBtn').hide();
    $('#textInput').show();
    $('#searchBtn').show();
    $('#addBtn').hide();

};

$('#searchLink').on('click', searchLink);

const updateLink = function () {
    render();
    $('#employeeList').hide();
    $('#verify').hide();
    $('#searchBtn').hide();
    $('#updateBtn').show();
    $('#deleteBtn').hide();
    $('#textInput').show();
    $('#searchBtn').hide();

};

$('#updateLink').on('click', updateLink);

const deleteLink = function () {
    render();
    $('#employeeList').hide();
    $('#verify').hide();
    $('#searchBtn').hide();
    $('#updateBtn').hide();
    $('#deleteBtn').show();
    $('#textInput').show();
    $('#searchBtn').hide();

};

$('#deleteLink').on('click', deleteLink);