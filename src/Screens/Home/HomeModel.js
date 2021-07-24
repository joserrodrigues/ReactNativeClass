import api from '../../Services/api'

export default class HomeModel {
    getProducts (callback) {
        api.get("/manageProducts/products/")
            .then((response) => callback(response.data))
            .catch((err) => {
                console.error("ops! connection error " + err);
            });
    }

    deleteProducts(item, callback) {
        api.delete("/manageProducts/product/"+item._id)
            .then((response) => callback(response.data))
            .catch((err) => {
                console.error("ops! connection error " + err);
            });
    }
}