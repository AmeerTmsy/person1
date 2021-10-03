$("#registration_form").validate({
    rules:{
        name:{
            required:true
        },
        Email:{
            required:true
        },
        Subject:{
            required:true
        },
        messages:{
            required:true,
            minlength:5
        },
    },
    submitHandler:function(form){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbx4_eKBw7CMl8DKewTOpPiacA15v2LRRNIlWp2inDdOmGFSO9BPUqtN91bsUiKToSpwLg/exec",
            data:$("#registration_form").serialize(),
            method:"post",
            success:function (response){
                alert("Message submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")
            }
        })
    }
})
