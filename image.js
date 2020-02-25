var validImagetypes = ["image/gif", "image/jpeg", "image/png"];
$("#selected-image").hide();

function previewImage(image_pic){
    var reader = new FileReader();
    reader.onload = function(e){
        $("#selected-image").attr('src', e.target.result);
        $("#selected-image").fadeIn();

    }

    reader.readAsDataURL(image_pic.files[0]);
}

$("#main-image").change(function(){
    previewImage(this);
});

$("#save-blog").click(function(){
    $("#main-desc").removeClass("is-invalid");
    $("#main-image").removeClass("is-invalid");

    var desc = $("#main-desc").val();
    var picture = $("#main-image").prop("files")[0];

    if(!desc){
        $("#main-desc").addClass("is-invalid");
        return;
    }

    if(!picture == null){
        $("#main-image").addClass("is-invalid");
        return;
    }

    if($.inArray(picture["type"], validImagetypes)<0){
        $("#main-image").addClass("is-invalid");
        return;
    }

});