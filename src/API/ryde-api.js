
const Rides = [
     {
       id: 1,
       img: "https://picsum.photos/60/60",
       name: "Foster Asafo",
       location: {
         from: "Kumasi",
         to: "Tamale",
       },
       duration: {
         departure: "16:00am",
         arrival: "3:00pm",
       },
       details: {
         price: 120,
         seatsAvailable: 5,
       },
       addons: ["wifi", "horizontal_distribute", "luggage"],
     },
     {
       id: 2,
       img: "https://picsum.photos/60/60",
       name: "Kojo Oppong",
       location: {
         from: "Accra",
         to: "Takoradi",
       },
       duration: {
         departure: "6:00am",
         arrival: "12:00pm",
       },
       details: {
         price: 80,
         seatsAvailable: 12,
       },
       addons: ["luggage", "smoke_free", "usb", "horizontal_distributed"],
     },
     {
       id: 3,
       img: "https://picsum.photos/60/60",
       name: "Jeff Bezoz",
       location: {
         from: "Koforidua",
         to: "Accra",
       },
       duration: {
         departure: "3:00pm",
         arrival: "7:00pm",
       },
       details: {
         price: 25,
         seatsAvailable: 10,
       },
       addons: ["pets", "smoke_free", "ac_unit"],
     },
     {
       id: 4,
       img: "https://picsum.photos/60/60",
       name: "Brefo Gyamera",
       location: {
         from: "Nsawam",
         to: "Accra",
       },
       duration: {
         departure: "11:00am",
         arrival: "2:00pm",
       },
       details: {
         price: 10,
         seatsAvailable: 15,
       },
       addons: ["stop_circle", "usb", "smoke_free"],
     }
   ];

   export default Rides;