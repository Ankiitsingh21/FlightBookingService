const { StatusCodes }= require('http-status-codes');
const { ValidationError ,AppError } = require('../utils/errors/index');
const { Booking } = require('../models/index');

class BookingRepositry{
        async create( data ){
                try {
                        const booking =await Booking.create(data);
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

        async update(bookingId,data){
                try {
                       const booking = await Booking.findByPk(bookingId);
                       if(data.status){
                        booking.status=data.status;
                       }
                       await booking.save();
                       return booking;
                } 
                catch (error) {
                        throw new AppError(
                                'Repository Error',
                                'Cannot update Booking',
                                'There was some issue in updating the booking,please try again later',
                                StatusCodes.INTERNAL_SERVER_ERROR
                        );
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