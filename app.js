
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



const view = function () {
    // $('#employeeList').hide();
     $('#textInput').hide();
     render();
 };
 
 $('#view').on('click', view);

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

$('#add').on('click', getInputVal);


//3. When the search button is pressed, add the  message to the `body` if the name that was input is in the employeeList array.
const verifys = function () {

    var employee = {
        name: $('#name').val(),
        officeNum: $('#officeNum').val(),
        phoneNum: $('#phoneNum').val()
    };

    // If our employeeList includes the input value, add message to the body
    if (employeeList.includes(employee.name)) {

        document.getElementById("verify").innerHTML = 'YES';
    }

    // After performing our actions, clear the name input
    $('#name').val('');
}

$('#search').on('click', verifys);

//4. When the delete button is pressed, delete the element from employeeList that matches the name the user entered in the input field. Re-render the list.
const removeName = function () {

    var employee = {
        name: $('#name').val(),
        officeNum: $('#officeNum').val(),
        phoneNum: $('#phoneNum').val()
    };

    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    employeeList.splice(employeeList.indexOf(employee.name), 1);

    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    render();
}

$('#delete').on('click', removeName);


render();