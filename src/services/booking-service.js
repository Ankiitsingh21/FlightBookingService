const axios = require('axios');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const {BookingRepository} = require('../repository/index');
const { ServiceError } = require('../utils/errors');

class BookingService {
        constructor(){
                this.bookingRepository = new BookingRepository();
        }

        async createBooking(data){
                try {
                       const flightId = data.flightId;
                       //console.log(data);
                       let getFlightRequestUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
                       const response = await axios.get(getFlightRequestUrl);
                       //console.log(flight);
                       const flightData= response.data.data;
                       let priceOfTheFlight = flightData.price;
                       if(data.noOfSeats > flightData.totalSeats){
                        throw new ServiceError('Something went wrong in the booking proccess ','Insufficients seats in the flight');
                       }
                       const totalCost = priceOfTheFlight*data.noOfSeats;
                       const bookingPayLoad={...data,totalCost};
                       const booking = await this.bookingRepository.create(bookingPayLoad);
                       return booking;
                } 
                catch (error) {
                        if(error.name=='RepositoryError'||error.name =='ValidationError'){
                                throw error;
                        }
                        throw new ServiceError();
                }
        }
}

module.exports=BookingService;