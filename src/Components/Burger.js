const Burger = ({ isActive, setIsActive }) => {
    const handleBurgerClass = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="box">
            <div
                onClick={handleBurgerClass}
                className={!isActive ? "btn not-active" : "btn active"}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Burger;
