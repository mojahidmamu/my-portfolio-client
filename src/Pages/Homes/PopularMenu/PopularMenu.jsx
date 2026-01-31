import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItam/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);  

    useEffect(() => {
        fetch('menu.json')
            .then((response) => response.json())  
            .then((data) => {
                 
                const popularItems = data.filter((item) => item.category === 'popular');
                setMenu(popularItems);  
            })
            .catch((error) => {
                console.error('Error fetching menu:', error);  
            });
    }, []);

    return (
        <section className="mb-12">
             
            <SectionTitle
                heading="From our menu"
                subHeading="Check it out"
            ></SectionTitle>

            
            <div className="grid md:grid-cols-2 gap-6">
                {menu.map((item) => (
                    <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>
                ))}
            </div>

            <button className="btn btn-outline ml-96 border-0 border-b-4 mt-4">
                View Full Menu
            </button>
        </section>
    );
};

export default PopularMenu;
