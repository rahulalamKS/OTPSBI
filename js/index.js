window.onload = function () {
    // click of resend otp show the resent message
    document.querySelectorAll(".send-otp-btn").forEach(function (otpSend) {
        otpSend.addEventListener("click", function () {
            document.querySelectorAll(".otp-resent").forEach(function (reSend) {
                reSend.classList.toggle("show-otp");
            })
            setTimeout(function () {
                document.querySelectorAll(".otp-resent").forEach(function (reSend) {
                    reSend.classList.remove("show-otp");
                })
            }, 1500)
        })
    })
    // click of resend otp show the resent message (end)

    // onload show toaster message
    // document.querySelector(".toaster-message").classList.add("show-toaster");
    // onload show toaster message (end)

    // hide toaster message after 2 seconds
    // setTimeout(function () {
    //     document.querySelector(".toaster-message").classList.remove("show-toaster");
    // }, 2500)
    // hide toaster message after 2 seconds (end)

    // // remove toaster message from the page after 3 seconds
    // setTimeout(function () {
    //     document.querySelector(".toaster-message").remove();
    // }, 3000)
    // // remove toaster message from the page after 3 seconds (end)

    document.querySelector(".toaster-close").addEventListener("click", function () {
        document.querySelector(".toaster-message").classList.remove("show-toaster");
    })

    document.querySelector(".forget-device").addEventListener("click", function () {
        this.remove();
        document.querySelector(".device-remembered").innerHTML = "As per your preference, this device will need to be re-verified for future logins";
    })

    let counttt = document.querySelector(".countt");
    let incre = 1;
    document.querySelectorAll(".verify-btn").forEach(function (varify) {
        varify.addEventListener("click", function () {
            var password = document.querySelector("#pass")
            if (password.value) {
                password.classList.add("invalid-password");
                document.querySelector(".attempts").classList.add("attempts-wrong");
                password.value = "";
                counttt.innerHTML = incre++;
                if(counttt.innerHTML >= 3){
                    counttt.innerHTML = 3;
                    console.log("reached");
                    $('#wrongAttempts').modal('hide')
                    $('#unusualLogin').modal('show')
                }
            }

        })
    })

    document.querySelector("#verify-btn").addEventListener("click", function(){
        document.querySelector(".toaster-message").classList.toggle("show-toaster");
        setTimeout(function () {
            document.querySelector(".toaster-message").classList.remove("show-toaster");
        }, 8000)
    })


    $('#index').modal('show')
}