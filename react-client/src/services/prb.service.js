import http from "../http-common";

class PrbDataService {
  getAll() {
    return http.get("/prbData");
  }

//   get(id) {
//     return http.get(`/prbData/${id}`);
//   }

  create(data) {
    return http.post("/prbData", data);
  }

  update(id, data) {
    return http.put(`/prbData/${id}`, data);
  }

//   delete(id) {
//     return http.delete(`/prbData/${id}`);
//   }

  deleteAll() {
    return http.delete(`/prbData`);
  }

//   findByTitle(title) {
//     return http.get(`/prbData?title=${title}`);
//   }
}

export default new PrbDataService();