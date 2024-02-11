const { StatusCodes } = require('http-status-code');

class ServiceError extends Error{
        constructor(message ='Something went wrong',
                explaination='Service Layer error',
                statusCodes = StatusCodes.INTERNAL_SERVAL_ERROR 
        )  {
                this.name='ServiceError',
                this.message =message,
                this.explaination = explaination,
                this.statusCodes=statusCodes
        }
}

module.exports=ServiceError;