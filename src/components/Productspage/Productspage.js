import React, { Fragment, useEffect } from 'react'
import "./Productspage.css";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts, ClearErrors } from "../../actions/productactions";
import Loader from "../Loader/Loader";
import Product from "../Productitem/Product";
import { toast } from 'react-toastify';


const Productspage = () => {


    const dispatch = useDispatch();

    const { loading, error, products, productCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        if(error){
            toast(error);
        }
        dispatch(GetProducts());
    }, [dispatch , error]);

    return (
        <Fragment>
            {loading ?
                (<Loader />)
                :
                (
                    <>
                        <div className="Products_main_page">
                            <div id='featuredProducts_content'>
                                {products && products.map((product) => <Product product={product} key={product._id} />)}
                            </div>
                        </div>
                    </>
                )
            }
        </Fragment>
    )
}

export default Productspage