function renderTable(containerId, visitors) {
    //Displays No Logged Visitors if Empty
    if (visitors.length == 0){
        $("#visitorsTable").html("<tr><th>No Logged Visitors</th></tr>")
    } else {
        $("#visitorsTable").html("<tr><th>Name</th><th>Address</th><th>Phone</th><th>Email</th><th id=\"idColumn\">ID</th><th>Actions</th>")
    
        for (let visitor of visitors) {
            let id = visitor.getId()
            let fullName = visitor.getFullName()
            let html = `<td>${fullName}</td>
            <td>${visitor.getAddress()}</td>
            <td>${visitor.phone}</td>
            <td>${visitor.email}</td>
            <td hidden>${id}</td>
            <td><div class="actionDiv" id=visitor${id}><i class="fas fa-trash-alt"></i></div></td>`

            let $tr = $(`<tr id=visitorRow${id}>`)
            $tr.html(html)
            $("#visitorsTable").append($tr)

            $(`#visitor${id}`).on("click", function() {
                var confirmDelete = confirm(`Delete ${fullName}?`)
                console.log(confirmDelete)
                if (confirmDelete){
                    modelDeleteVisitor(id)
                }
            })

            $("#idColumn").hide()
            $(containerId).show()
        }
    }
}
function showVisitors()  {
    //shows visitor container and hides all other site content containers }
    $("#visitorsContainer").show()
    $("#formContainer").hide()
    renderTable("#visitorsContainer", visitors)
    $("#contactContainer").show()
}
function showList() {
    //shows visitor list and hides form }
    $("#visitorsContainer").show()
    $("#formContainer").hide()
    $("#contactContainer").show()
}
function showForm() {
//shows visitor form and hides list }
    $("#visitorsContainer").hide()
    $("#formContainer").show()
    $("#contactContainer").hide()
}

function clearForm() {
    //clears values on inputs so next time form is loaded they don't have old contents}
    $("input").val("")
    $("textarea").val("")
    $("#instagram").prop("checked", false)
    $("#youtube").prop("checked", false)
    $("#other").prop("checked", false)
}