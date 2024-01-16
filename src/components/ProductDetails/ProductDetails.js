import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { GetProductsDetails } from "../../actions/productactions";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component';
import Loader from "../Loader/Loader";

const ProductDetails = () => {
    const params = useParams();


    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(
        (state) => state.productdetails
    );


    useEffect(() => {

        if (error) {
            toast(error);
        }


        dispatch(GetProductsDetails(params.id));


    }, [dispatch, params.id, error]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,


    };

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activecolor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: Number(product?.rating),
        isHalf: true

    }

    const [orderqty, setorderqty] = useState(1);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
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
                            
                        </Slider>
                    </div>
                    <div className="productpage_right">
                        {product &&
                            <>
                                <h4>Product #{product._id}</h4>
                                <h1>{product.name}</h1>
                                <p>{product.description}</p>
                                <p id="price" >₹{product.price}</p>
                                <div className="ratings" >
                                    <ReactStars {...options} />{ }
                                    <span>({product.numofReviews} Reviews)</span>
                                </div>
                                <div className="quantity">
                                    <button>-</button>
                                    <input type="Number" value={orderqty} />
                                    <button>+</button>
                                    <button>Add To Cart</button>
                                </div>

                                <p>
                                    <b className={product.Stock < 1 ? "redcolor" : "greencolor"} >
                                        {product.Stock < 1 ? "Out of Stock" : "In Stock"}

                                    </b>
                                </p>

                                <button className="Submitreview" >Submit Review</button>
                            </>
                        }
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
