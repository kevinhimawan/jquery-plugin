$.fn.checkEmail = function() {
    let count = 0
    this.keyup(()=>{
        let regex = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
        const value = $('#inputEmail').val()
    
        if(value.match(regex) === null){
            $('#inputEmail').css('border','3px solid red')
            if(count === 0){
                $('form').append(`<span id="error_message" style="color:red">Email address is not valid</span>`)
            }
            count++
        }else{
            $('#inputEmail').css('border','3px solid green')
            $('#error_message').remove()
                count=0
        }
    })
}

$('#inputEmail').checkEmail()