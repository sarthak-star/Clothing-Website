import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { GetProductsDetails } from "../../actions/productactions";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
    const params = useParams();
    

    const dispatch = useDispatch();

    const { product, loading , error } = useSelector(
        (state) => state.productdetails
    );
    

    useEffect(() => {

        if(error){
            toast(error);
        }


        dispatch(GetProductsDetails(params.id));

        
    }, [dispatch,params.id,error]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        

    };

    return (
        <>
            <div className="productpage">
                <div className="productpage_left">
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
                <div className="productpage_right">
                    {product && 
                    <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    </>
                    }
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
