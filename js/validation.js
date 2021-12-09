const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];

$(function() {

    const errorIds = ["#firstNameErr", "#lastNameErr", "#emailErr", "#phoneErr", "#addressErr", "#cityErr", "#zipErr", "#stateErr", "#checkboxErr", "#stateNotFound", "#zipFormat"]
    const textValidations = ["#firstName", "#lastName", "#email", "#phone", "#address", "#city", "#zip", "#state"]
    for (err of errorIds) {
        $err = $(err)
        $err.hide()
    }

    $('#firstName').change(function () {
        validateTextField("#firstName")
    });
    $('#lastName').change(function () {
        validateTextField("#lastName")
    });
    $('#email').change(function () {
        validateTextField("#email")
    });
    $('#phone').change(function () {
        validateTextField("#phone")
    });
    $('#address').change(function () {
        validateTextField("#address")
    });
    $('#city').change(function () {
        validateTextField("#city")
    });
    $('#zip').change(function () {
        validateTextField("#zip")
        validateZipField()
    });
    $('#state').change(function () {
        validateTextField("#state")
        validateStateField()
    });
    $('#youtube').change(function () {
        validateCheckbox()
    });
    $('#instagram').change(function () {
        validateCheckbox()
    });
    $('#other').change(function () {
        validateCheckbox()
    });

// FORM SUBMIT BUTTON IS CLICKED:

    $("#formSubmit").click(function(event){     
        $form = $("#myForm");
    
        event.preventDefault();
        event.stopPropagation();
    
        var valid = validateForm()
        console.log(valid)
        if (valid) {
            modelAddVisitor()
            $form.hide()
            $("#successMessage").show()
            setTimeout(() => {
                // $form.submit()
                $("#successMessage").hide()
                $form.show()
                clearForm()
                showVisitors()
            }, 4000);
            
        }
      });

    function validateTextField(fieldName) {
        var $fieldName = $(fieldName)
        if ($fieldName.val() == '') {
            let $errorDiv = $(`${fieldName}Err`)
            $errorDiv.show()
            return false
        } else {
            let $errorDiv = $(`${fieldName}Err`)
            $errorDiv.hide()
            return true
        }
    }

    function validateZipField() {
        const zipRegex = /[0-9]/
        var $zipFormat = $("#zipFormat")
        var $zipValue = $("#zip").val()
        if (zipRegex.test($zipValue) == true) {
            $zipFormat.hide()
            return true
        } else {
            $zipFormat.show()
            return false
        }
    }

    function validateStateField() {
        var $stateValue = $("#state").val().toUpperCase()
        // console.log($stateValue)
        var $stateNotFound = $("#stateNotFound")
        if (stateAbbreviations.includes($stateValue)) {
            $stateNotFound.hide()
            $("#state").val($stateValue)
            return true
        } else {
            $stateNotFound.show()
            return false
        }
    }

    function validateCheckbox() {
        var $checkboxErr = $("#checkboxErr")
        if ($("input:checked").length == 0) {
            $checkboxErr.show()
            return false
        } else {
            $checkboxErr.hide()
            return true
        }
    }

    function validateForm() {
        var valid = true
        var result = null
        for (let i = 0; i < textValidations.length; i++) {
            result = validateTextField(textValidations[i])
            // console.log(textValidations[i])
            // console.log(result)
            if (result == false) {
                valid = false    //text validations did not pass
            }
        }
        if (validateZipField() == false) {
            valid = false
        }
        if (validateStateField() == false) {
            valid = false
        }
        if (validateCheckbox() == false) {
            valid = false
        }
        return valid
    }
})