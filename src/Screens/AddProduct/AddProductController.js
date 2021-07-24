import React, {useState, useRef} from 'react';
import AddProductView from './AddProductView';
import AddProductModel from './AddProductModel';
import * as yup from 'yup'


const AddProductController = ({ navigation, route }) => {

    const [isLoading, setIsLoading] = useState(false);
    const addProductModel = useRef(new AddProductModel());

    const loginValidationSchema = yup.object().shape({
        title: yup
            .string()
            .min(4, ({ min }) => `O nome deve ter no mínimo ${min} characters`)
            .required('Nome é obrigatório'),
        type: yup
            .string()
            .min(4, ({ min }) => `O tipo de produto deve ter no mínimo ${min} characters`)
            .required('Tipo de produto é obrigatório'),
    });


    const addInfo = (values) => {
        console.log(values);
        addProductModel.current.addProduct(values, callbackAddInfo);
        setIsLoading(true);
    }

    const callbackAddInfo = (result) => {
        console.log(result);
        navigation.goBack();
    }
    
    //Passando as informações para o View
    return <AddProductView
        loginValidationSchema={loginValidationSchema}
        addInfo={addInfo}
        isLoading={isLoading}
    />

    
}
export default AddProductController;
