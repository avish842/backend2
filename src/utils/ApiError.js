
class ApiError extends Error {

    constructor(
        statusCode,
        message="Somthing went wrong ",
        error=[],
        statck=""// this is used to store the stack trace of the error
    ){
        super(message)
        this.statusCode=statusCode,
        this.data= null , // this is used to store the data related to the error
        this.error =error,
        this.statck=statck// this is used to store the stack trace of the error
        this.success=false

        if(statck){
            this.statck=statck
        }
        else{
            Error.captureStackTrace(this, this.constructor) // this is used to capture the stack trace of the error
        }
    }
}