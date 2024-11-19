function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

let quaryHotel = new Hotel ('Quary',40,15);
let parkHotel = new Hotel ('Park',120,77);


let details1 = quaryHotel.name + 'rooms:';
    details1 = quaryHotel.checkAvailability();
let elHotel1 = document.getElementById('hotel1');
elHotel1.innerHTML = details1;


let details2 = parkHotel.name + 'rooms:';
    details2 = parkHotel.checkAvailability();
let elHotel2 = document.getElementById('hotel2');
elHotel2.innerHTML = details2;

