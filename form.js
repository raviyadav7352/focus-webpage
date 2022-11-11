$(document).ready(function () {
    $(document).on('click', function (e) {
        var element = e.target
        var elemId = $(element).attr("id")
        switch (elemId) {
            case "backdrop":
            case "closeform":
                $("#backdrop").fadeOut(500);
                break;
            default:
                break;

        }
    })
})

const formSubmitHandler = ()=>{
    $("#form").on("click", )
}

let form = document.getElementById("form");
let html = ` <div class="wrapper-form" id="backdrop">
<div class="box-form">
<i id="closeform" class="material-symbols-outlined hover closeform">
close
</i>
    <form id="form" action="#">
        <h1 class="regn">Registration Form</h1>
        <div class="form-item">
            <label for="firstname" class="form-label">First name</label>
            <input class="form-input" id="firstname" type="text" placeholder="Enter firstname" value=""> 
            <div class="error"></div>
        </div>
        <div class="form-item">
            <label for="lastname" class="form-label">Last name</label>
            <input class="form-input" id="lastname" type="text" placeholder="Enter LastName" value="">
            <div class="error"></div>
        </div>
        <div class="form-item">
            <label for="email" class="form-label">Email</label>
            <input class="form-input" id="email" type="text" placeholder="Enter Email" value="">
            <div class="error"></div>
        </div>
        <div class="form-item form-item-btn">
            <button id="button" class="form-btn" name="submit">Submit</button>
        </div>
    </form>
</div>
</div>`
form.innerHTML = html
