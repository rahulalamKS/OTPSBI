window.onload = function(){
    // click of resend otp show the resent message
    if(document.querySelector(".toaster-message")){
        document.querySelector(".send-otp-btn").addEventListener("click", function(){
            document.querySelector(".otp-resent").classList.toggle("show-otp");
        })
    // click of resend otp show the resent message (end)

    // onload show toaster message
        document.querySelector(".toaster-message").classList.add("show-toaster");
    // onload show toaster message (end)

    // hide toaster message after 2 seconds
    setTimeout(function(){
        document.querySelector(".toaster-message").classList.remove("show-toaster");
    }, 2500)
    // hide toaster message after 2 seconds (end)

    // remove toaster message from the page after 3 seconds
    setTimeout(function(){
        document.querySelector(".toaster-message").remove();
    }, 3000)
    // remove toaster message from the page after 3 seconds (end)

    document.querySelector(".toaster-close").addEventListener("click", function(){
        document.querySelector(".toaster-message").classList.remove("show-toaster");
    })
}

    $('#index').modal('show')
}