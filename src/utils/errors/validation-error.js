const {StatusCodes} = require('http-status-code');
class ValidtaionError extends Error{
        constructor( error ){
                super();
                let explaination = [];
                error.errors.foreach((err)=>{
                        explaination.push(err.message);
                });

                this.name='ValidtaionError';
                this.message='Not able to validate the data sent in the request';
                this.explaination=explaination; 
                this.statusCodes=StatusCodes.BAD_REQUEST
        }
}

module.exports=ValidtaionError;