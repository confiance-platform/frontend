import React, {Suspense} from "react";
import EcommerceCard from "@/Components/Ecommercedashboard/EcommerceCard";
import ActiveUser from "@/Components/Ecommercedashboard/ActiveUser";
import ProductsCards from "@/Components/Ecommercedashboard/ProductsCards";
import CustomersCards from "@/Components/Ecommercedashboard/CustomersCards";
// import OrdersCards from "@/Components/Ecommercedashboard/OrdersCards";
const OrdersCards = React.lazy(() => import("@/Components/Ecommercedashboard/OrdersCards"));


const Ecommerce = () => {
    return (
        <Suspense fallback="">
            <div className="container-fluid">
                <div className="row">
                    <EcommerceCard/>
                    <ActiveUser/>
                    <ProductsCards/>
                    <CustomersCards/>
                    <OrdersCards/>
                </div>
            </div>
        </Suspense>
    )
}

export default Ecommerce;
