const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('#formSubmit').click(()=>{
        submitForm();
    })
});