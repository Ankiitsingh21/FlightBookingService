const { StatusCodes }= require('http-status-code');
const { ValidationError ,AppError } = require('../utils/errors/index');
const { Booking } = require('../models/index');

class BookingRepositry{
        async create( data ){
                try {
                        const booking =await booking.create(data);
                        return booking;
                } 
                catch (error) {
                        if(error.name=='SequelizeValidationError'){
                                throw new ValidationError(error);
                        }   
                        throw new AppError(
                                'Repository Error',
                                'Cannot create Booking',
                                'There was some issue in creating the booking,please try again later',
                                StatusCodes.INTERNAL_SERVER_ERROR
                        );
                }
        }

        async update(data){
                try {
                        
                } 
                catch (error) {
                        
                }
        }

        async destroy(){
                try {
                        
                } 
                catch (error) {
                        
                }
        }
}

module.exports=BookingRepositry;