import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Fitness assessment",
                "Basic fitness classes",
                "24/7 access (selected locations)"
            ],
            "price": 29.99
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Personal trainer sessions (2 per month)",
                "Unlimited fitness classes",
                "Sauna and steam room access",
                "Nutritional counseling"
            ],
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Fitness assessment",
                "Basic fitness classes",
                "Childcare services",
                "Discounts for family members",
                "Group fitness classes"
            ],
            "price": 69.99
        },
        {
            "id": 4,
            "name": "Student Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Fitness assessment",
                "Basic fitness classes",
                "Valid student ID required",
                "Flexible class schedules"
            ],
            "price": 24.99
        }
    ]


    return (
        <div className="m-12 text-white">
            <h2 className="text-5xl text-center mb-8 font-bold">Best Prices in the city</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {

};

export default PriceOptions;