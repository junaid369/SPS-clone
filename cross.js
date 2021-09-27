$(document).ready(function(){
        $("#register").validate({
        rules:{
            fname:{
                required:true
                
            },
            place:{
                required:true
            },
            gender:{
                required:true
            },
            email:{
                required:true
            },
            contact:{
                required:true,
                minlength:10

            },
            employ:{
                required:true
            },
            qualification:{
                required:true
            },
            cog:{
                required:true
            },
            year:{
                required:true
            },
            biomy:{
                required:true
            },
            sps:{
                required:true
            },
            work:{
                required:true
            },
            ref:{
                required:true
            },
            check:{
                required:true
            }

        }
    })
})
