
const PriceFormate = ({price}) => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BDT",
        maximumFractionDigits: 2,
    }).format(price);
};

export default PriceFormate;