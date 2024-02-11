class AppError extends Error{
        constructor(
                name,
                message,
                explaination,
                statuscodes
        ){
                super();
                this.name=name,
                this.message=message,
                this.explaination=explaination,
                this.statuscodes=statuscodes
        }
}

module.exports=AppError;