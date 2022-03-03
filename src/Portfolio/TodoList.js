import Footer from "../Components/Footer";
import Header from "../Components/Header";

import ScreenShot from "../assets/projects-images/todo-screenshot.jpg";

const TodoList = () => {
    return (
        <>
            <Header />
            <section id="project__present" className="project__present wrapper">
                <h3 className="section__heading">Lista TODO</h3>
                <p className="section__paragraph">
                    Klasyczny już projekt w moim wykonaniu, który miał na celu
                    utrwalenie zdobytej już wiedzy. Pomimo nie dużego stopnia
                    zaawansowania, zadecydowałem o użyciu biblioteki React. Do
                    stylizacji wykorzystałem bibliotekę Styled-Components.
                    Wszystkie zadania przechowywane są w Local Storage. W celu
                    lepszego zarządzania zadaniami zaimplementowałem React
                    Beautiful DnD, dzięki któremu można stosować metodę "Drag
                    and drop".
                </p>
                <p className="section__paragraph">
                    <a href="https://github.com/mate966/todo-list">GitHub</a>
                </p>
                <p className="section__paragraph">
                    <a href="https://mate966.github.io/todo-list/">Live</a>
                </p>
                <img
                    src={ScreenShot}
                    alt="Zdjęcie poglądowe strony"
                    className="screenshot"
                />
            </section>
            <Footer />
        </>
    );
};

export default TodoList;
