import { Card } from "./card.jsx";
import { Shop } from "../shop.js";

export default function Products(){
    return(
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Products</h2>
                <p className="text-gray-600">Explore our wide range of products designed to meet your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Shop.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
