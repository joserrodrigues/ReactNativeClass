
import api from '../../Services/api'

export default class AddProductModel {
    addProduct(values, callback) {
        api.post("/manageProducts/product/",
            { 
                title: values.title,
                type: values.type
            }
        )
        .then((response) => callback(response.data))
        .catch((err) => {
            console.error("ops! connection error " + err);
        });
    }
}