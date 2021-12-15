import { Link } from "react-router-dom";
import Button from "./Button";

const Hire = () => {
    return (
        <section className="hire">
            <div className="hire__content wrapper">
                <h2 className="hire__heading section__heading">
                    Chętny na współpracę?
                </h2>
                <p className="section__paragraph hire-wrap">
                    Jeżeli jesteś gotowy na podjęcie współpracy nie zwlekaj i
                    odezwij się w wygodnej dla Ciebie formie. Obiecuję, że na
                    pewno się dogadamy!
                </p>
                <Link to="/contact">
                    <Button value="Zatrudnij mnie!" />
                </Link>
            </div>
        </section>
    );
};

export default Hire;
