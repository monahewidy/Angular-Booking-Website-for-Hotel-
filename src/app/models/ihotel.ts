export interface IHotel {
  _id: string;
  CityId: string;
  name: string;
  city: String;
  country: String;
  location?: number[];
  Address: {
    Country: string;
    City: string;
    Street: string;
  };
 
  Facilities: {
    MostPopularFacilities?: string[];
    MoreFacilities?: {};
  };
  SSRoomPrice?: number;
  Availability?: boolean;
  HotelDescription?: string;
  HotelImg: string;
  HotelImages?: string[];
  HotelInfo?: {
    HotelPhoneNum?: number[];
    Email?: string;
    Fax?: string;
  };
}
