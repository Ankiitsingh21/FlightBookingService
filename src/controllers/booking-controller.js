const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services/index');

const bookingService = new BookingService();
const create = async (req,res) => {
         try {
                const response = await bookingService.createBooking(req.body);
                return res.status(StatusCodes.OK).json({
                        message:"Successfully completed booking",
                        success: true,
                        err:{},
                        data:response
                });       
         } 
         catch (error) {
                //console.log("Error status code:", error.statusCode);
                const statusCode = error.statusCode || 500;
                return res.status(statusCode).json({
                        message:error.message,
                        success: false,
                        err:error.explanation,
                        data:{}
                }); 
         }
}

module.exports={
        create
}