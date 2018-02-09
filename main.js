
let addressForm = document.shippingAddressForm;
addressForm.addEventListener('submit', (event) => {
  event.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip-code').value;
    let phone = document.getElementById('phone-number').value;
    let email = document.getElementById('email').value;
    let info = [];


    if (firstName == "") {
      info.push(" First Name");
    } if (lastName == "") {
      info.push(" Last Name");
    } if (address == "") {
      info.push(" Adress");
    } if (city == "") {
      info.push(" City");
    } if (state == "") {
      info.push(" State");
    } if (zip == "") {
      info.push(" Zip Code");
    } if (phone == "") {
      info.push(" Phone Number");
    } if (email == "") {
      info.push(" Email Adress");
    }

  if (info[0] != null){
      swal({
        title: "Missing Info!",
        text: `Please fill out the following: ${info}`,
        type: "error",
        confirmButtonText: "OK!"
    });
  }

});
