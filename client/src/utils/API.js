import axios from "axios";

export default {
  // Gets all parking spots
  getParkingSpots: () => {
    return axios.get("/api/parkingspots");
  },

  // Gets the parking spot with the given id
  getParkingSpot: id => {
    return axios.get("/api/parkingspots/" + id);
  },

  // Deletes the parking spot with the given id
  deleteParkingSpot: id => {
    return axios.delete("/api/parkingspots/" + id);
  },

  // Saves a parking spot to the database
  saveParkingSpot: parkingSpotData => {
    return axios.post("/api/parkingspots", parkingSpotData);
  },

  // Gets all spots rented
  getRentedSpots: () => {
    return axios.get("/api/rentedspots");
  },

  // Gets the rented spot with the given id
  getRentedSpot: id => {
    return axios.get("/api/rentedspots/" + id);
  },

  // Deletes the rented spot with the given id
  deleteRentedSpot: id => {
    return axios.delete("/api/rentedspots/" + id);
  },

  // Saves a parking spot to the database
  saveRentedSpot: rentedSpotData => {
    return axios.post("/api/rentedspots", rentedSpotData);
  }
}