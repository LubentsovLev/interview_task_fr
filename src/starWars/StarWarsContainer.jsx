import React from "react";
import StarWars from "./StarWars";
import s from "./StarWars.module.css";
import "../App.css";

class StarWarsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      color: "",
      color2: "",
      good: "",
      name: "",
      desc: "",
      img: "",
      gender: "",
      Homeworld: "",
      click: false,
      Characters: [
        {
          name: "Luke Skywalker",
          color: "",
          color2: "",
          good: true,
          desc:
            "was a Force-sensitive Human male who helped defeat the Galactic Empire in the Galactic Civil War ",
          img:
            "https://gfx.antyradio.pl/var/antyradio/storage/images/film/duperele/jak-poczatkowo-mial-wygladac-luke-skywalker-w-filmie-przebudzenie-mocy-27411/1928999-1-pol-PL/Jak-poczatkowo-mial-wygladac-Luke-Skywalker-w-filmie-Przebudzenie-Mocy.jpg",
          gender: "male",
          Homeworld: "Tatooine",
        },
        {
          name: "Anakin Skywalker",
          color: "",
          color2: "",
          good: false,
          desc:
            "Anakin Skywalker was a Force-sensitive Human male who served the Galactic Republic as a Jedi Knight and later served the Galactic Empire as the Sith Lord Darth Vader ",
          img:
            "https://img3.goodfon.ru/original/1920x1080/0/ba/star-wars-anakin-skywalke-3184.jpg",
          gender: "male",
          Homeworld: "Tatooine",
        },
        {
          name: "Han Solo",
          color: "",
          color2: "",
          good: true,
          desc:
            "Solo was a male Human smuggler from the planet Corellia who achieved galactic fame as a member of the Rebel Alliance ",
          img:
            "https://kinowar.com/wp-content/uploads/2019/12/Возвращение-джедая-Хан-Соло.jpeg",
          gender: "male",
          Homeworld: "Corellia",
        },
        {
          name: "Ben Solo",
          color: "",
          color2: "",
          good: false,
          desc:
            "Ben Solo was a human male Jedi who returned to the light side of the Force after renouncing the ways of the dark side. ",
          img:
            "https://deffinition.co.uk/wp-content/uploads/2018/12/star-wars-episode-9-IX-official-trailer-leaked-information-breakdown-explained-and-everything-you-missed-in-the-spoiler-talk-review.jpg",
          gender: "male",
          Homeworld: "Chandrila",
        },
        {
          name: "Rey Skywalker",
          color: "",
          color2: "",
          good: true,
          desc:
            "Rey Skywalker, once known only as Rey, was a human female Jedi Master who fought on the side of the Resistance in the war against the First Order ",
          img:
            "https://mult.pw/uploads/posts/2019-12/1576710074_oboi-zvezdnye-vojny-skajuoker.jpg",
          gender: "female",
          Homeworld: "Tatooine",
        },
      ],
    };
  }

  changeState(name, color, color2, good, desc, img, gender, Homeworld) {
    this.setState(() => {
      return {
        color,
        color2,
        good,
        name,
        desc,
        img,
        gender,
        Homeworld,
        click: true,
      };
    });
  }

  render() {
    return (
      <>
        {this.state.Characters.map((i) => (
          <div
            className="person_cl"
            onClick={() => {
              debugger;
              this.changeState(
                i.name,
                i.color,
                i.color2,
                i.good,
                i.desc,
                i.img,
                i.gender,
                i.Homeworld
              );
            }}
          >
            {i.name}
          </div>
        ))}

        {this.state.click ? (
          <StarWars
            colorOne={this.state.color}
            colorTwo={this.state.color2}
            good={this.state.good}
            name={this.state.name}
            desc={this.state.desc}
            img={this.state.img}
            gender={this.state.gender}
            Homeworld={this.state.Homeworld}
          />
        ) : (
          console.log("f")
        )}
      </>
    );
  }
}
export default StarWarsContainer;
