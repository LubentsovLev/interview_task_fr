import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import * as axios from "axios";
import Tablet from "./Tablet/Tablet";
import Loader from "./helpers/loader";
import _ from "lodash";
import TInfo from "./Tablet/TInfo";
import CHstate from "./CHstate/CHstate";
import StarWars from "./starWars/StarWars";
import StarWarsContainer from "./starWars/StarWarsContainer";

const App = () => {
  // state = {
  //   loading: true,
  //   data: [],
  // };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      id: 640,
      firstName: "Albert",
      lastName: "Olejnik",
      email: "DStevenson@mattis.org",
      phone: "(404)438-3905",
      address: {
        streetAddress: "7405 Suspendisse Ave",
        city: "San Diego",
        state: "MD",
        zip: "20905",
      },
      description:
        "tellus sed dui ac donec dolor odio sollicitudin donec molestie sed quis nec tortor sed orci pharetra hendrerit suspendisse sed sollicitudin vestibulum vitae lectus at tincidunt risus sit sagittis lacus sollicitudin nec",
    },
    {
      id: 797,
      firstName: "Shelton",
      lastName: "Kane",
      email: "PChang@amet.ly",
      phone: "(931)894-8518",
      address: {
        streetAddress: "846 Odio Dr",
        city: "Rural",
        state: "LA",
        zip: "42820",
      },
      description:
        "tincidunt dui at magna egestas egestas sed non elit et lacus velit sed porta suspendisse at consequat eget nullam eros magna rutrum amet vestibulum sed pulvinar placerat velit turpis vitae tempor dolor",
    },
    {
      id: 563,
      firstName: "Ewa",
      lastName: "Liao",
      email: "MLeavitt@quis.org",
      phone: "(322)713-0829",
      address: {
        streetAddress: "9322 Vestibulum Ave",
        city: "Salt Lake City",
        state: "KS",
        zip: "25327",
      },
      description:
        "at vel non amet pretium ac sollicitudin velit libero mi sed facilisis consequat amet nec suspendisse risus mattis magna egestas quis aliquam molestie fringilla ac etiam sagittis lacus nec pulvinar id mi",
    },
    {
      id: 122,
      firstName: "Marsha",
      lastName: "Holland",
      email: "LDaniel@tincidunt.gov",
      phone: "(329)626-4590",
      address: {
        streetAddress: "1065 Vitae Ct",
        city: "Shorewood",
        state: "FL",
        zip: "42430",
      },
      description:
        "at odio nec fringilla lacus magna elementum pulvinar massa eros lacus adipiscing lacus hendrerit aenean massa sit pretium dui nec sit aliquam sagittis velit vitae dolor magna mattis odio turpis magna consequat",
    },
    {
      id: 270,
      firstName: "Anuj",
      lastName: "Clare",
      email: "VCiborowski@sollicitudin.com",
      phone: "(350)916-4764",
      address: {
        streetAddress: "3975 Mattis Rd",
        city: "Villa Rica",
        state: "NM",
        zip: "93983",
      },
      description:
        "augue lacus mattis porttitor vestibulum sit fringilla pharetra magna amet vitae etiam lorem ac tortor dui massa nec massa risus ac non elit suspendisse sollicitudin velit sapien lectus sit porta massa vestibulum",
    },
    {
      id: 879,
      firstName: "Emil",
      lastName: "Clinger",
      email: "IMoudry@magna.net",
      phone: "(516)132-0681",
      address: {
        streetAddress: "4820 Convallis Rd",
        city: "Sarasota",
        state: "NC",
        zip: "54777",
      },
      description:
        "tortor sit consectetur turpis amet tincidunt scelerisque nec vitae tortor porta orci non molestie porta sed pharetra ante eros mattis donec ipsum vitae fringilla orci sed ac mattis mattis lectus nec eget",
    },
    {
      id: 661,
      firstName: "Brigido",
      lastName: "Delatorre",
      email: "TMiyaki@massa.org",
      phone: "(691)843-5193",
      address: {
        streetAddress: "583 Amet Dr",
        city: "Winona Lake",
        state: "ND",
        zip: "20505",
      },
      description:
        "consequat nec sollicitudin massa vestibulum magna libero massa turpis tincidunt et adipiscing curabitur tellus sed amet ipsum convallis magna lacus vestibulum aliquam sed aenean dolor massa orci magna placerat et tincidunt massa",
    },
    {
      id: 168,
      firstName: "Georgia",
      lastName: "Hesler",
      email: "KSanchez@ac.com",
      phone: "(991)280-4385",
      address: {
        streetAddress: "1758 Odio Ct",
        city: "Lockhart",
        state: "AZ",
        zip: "84413",
      },
      description:
        "sollicitudin et magna scelerisque pulvinar suspendisse ac scelerisque sit morbi fringilla scelerisque facilisis risus pretium ipsum sagittis velit consequat pulvinar augue elit rutrum morbi dui convallis pharetra mi egestas amet velit eget",
    },
    {
      id: 870,
      firstName: "Frederick",
      lastName: "Khillah",
      email: "SAviles@et.ly",
      phone: "(941)669-9122",
      address: {
        streetAddress: "6015 Amet Dr",
        city: "Union City",
        state: "SC",
        zip: "84127",
      },
      description:
        "ac nunc aliquam dolor tortor aliquam tortor etiam mattis amet fringilla placerat sagittis sed id sapien at donec magna tincidunt lacus turpis lectus sollicitudin amet ac morbi risus convallis odio dolor amet",
    },
    {
      id: 700,
      firstName: "Joseph",
      lastName: "Moudry",
      email: "CTisi@risus.org",
      phone: "(135)126-8506",
      address: {
        streetAddress: "7141 Aliquam Ave",
        city: "Brighton",
        state: "NE",
        zip: "78692",
      },
      description:
        "aenean porttitor adipiscing sollicitudin mattis sit vel mi sit augue facilisis tortor fringilla nec augue amet pulvinar neque libero lectus pretium non libero odio orci dolor lacus amet sapien molestie lacus sed",
    },
    {
      id: 94,
      firstName: "Alexander",
      lastName: "Sommers",
      email: "MBarowsky@dolor.gov",
      phone: "(349)303-5003",
      address: {
        streetAddress: "7399 Amet St",
        city: "Big Bear",
        state: "KS",
        zip: "51069",
      },
      description:
        "massa molestie molestie turpis non convallis nec tortor ante elit lacus risus sapien orci odio non molestie libero morbi mattis tincidunt etiam at pulvinar ipsum id vitae sed nec magna lacus risus",
    },
    {
      id: 155,
      firstName: "Micheal",
      lastName: "Burks",
      email: "TMoore@sit.gov",
      phone: "(650)076-2783",
      address: {
        streetAddress: "2377 Sit Ln",
        city: "Peabody",
        state: "MI",
        zip: "25889",
      },
      description:
        "orci porttitor magna amet vestibulum at mattis magna odio tempor lacus velit sit sed sagittis sollicitudin aenean lacus ac amet sollicitudin ac ipsum massa molestie morbi nullam nullam non tortor at tempor",
    },
    {
      id: 660,
      firstName: "Maki",
      lastName: "Vollrath",
      email: "SPrice@sagittis.net",
      phone: "(934)680-7023",
      address: {
        streetAddress: "724 Libero Dr",
        city: "New London Area",
        state: "FL",
        zip: "66981",
      },
      description:
        "sapien consectetur sed morbi id porttitor odio eget massa sapien scelerisque tortor tellus hendrerit nullam sit lacus et ac aliquam tincidunt nullam tincidunt sapien sed odio donec quis amet lacus velit risus",
    },
    {
      id: 422,
      firstName: "Mutahir",
      lastName: "Weissmann",
      email: "IValkanet@orci.gov",
      phone: "(964)061-1036",
      address: {
        streetAddress: "5792 Sagittis Ct",
        city: "Spokane",
        state: "NM",
        zip: "19762",
      },
      description:
        "nullam porttitor amet turpis sed fringilla porta tortor velit lacus id nullam sed nec risus aliquam magna eros dolor massa eget dolor at magna massa amet risus vestibulum suspendisse ac consectetur sagittis",
    },
    {
      id: 290,
      firstName: "Jimmy",
      lastName: "Malkewicz",
      email: "DHarkema@nec.ly",
      phone: "(943)124-5782",
      address: {
        streetAddress: "646 Amet Ln",
        city: "Neenah",
        state: "DC",
        zip: "91389",
      },
      description:
        "nec sit magna sit et sollicitudin molestie sed et scelerisque vestibulum at magna sapien turpis mattis magna ac porta lacus pulvinar sed facilisis tellus velit et odio eros lacus convallis et placerat",
    },
    {
      id: 821,
      firstName: "Rocelyn",
      lastName: "Potate",
      email: "MHaiduke@nunc.io",
      phone: "(127)578-2986",
      address: {
        streetAddress: "6949 Nec Ln",
        city: "Bellefontaine",
        state: "TX",
        zip: "50421",
      },
      description:
        "velit hendrerit sed consequat sit massa amet magna eros id in pulvinar sed nullam mattis hendrerit sagittis nullam pulvinar vel adipiscing sollicitudin sit ipsum id risus dui dolor magna orci vel libero",
    },
    {
      id: 294,
      firstName: "Tauras",
      lastName: "Malmfeldt",
      email: "TGoodwin@ac.com",
      phone: "(215)048-6383",
      address: {
        streetAddress: "5116 Pulvinar Dr",
        city: "Lenoir",
        state: "OK",
        zip: "46829",
      },
      description:
        "amet ac elementum donec et at tempor lorem mattis odio placerat ipsum id aenean consectetur amet vel at consectetur massa id egestas ipsum ipsum in consectetur dolor convallis at tempor massa vitae",
    },
    {
      id: 842,
      firstName: "Drew",
      lastName: "Mckinney",
      email: "LDemarco@non.org",
      phone: "(573)709-0705",
      address: {
        streetAddress: "2490 Tortor Ln",
        city: "Queen Creek",
        state: "TN",
        zip: "73420",
      },
      description:
        "sed vel nec molestie quis massa sed consequat pulvinar odio etiam sollicitudin donec at aenean eros odio mattis placerat tellus tortor lacus nunc lectus placerat ac at dolor magna aliquam donec lorem",
    },
    {
      id: 299,
      firstName: "Amber",
      lastName: "Antunes",
      email: "ELinden@eget.ly",
      phone: "(136)301-7266",
      address: {
        streetAddress: "5349 Ac Dr",
        city: "Mooresville",
        state: "NJ",
        zip: "35752",
      },
      description:
        "nec magna dolor nunc ante amet odio placerat eget amet tincidunt adipiscing nullam turpis velit mattis morbi mi aliquam suspendisse sed rutrum neque tortor facilisis magna lorem turpis mi lacus augue dolor",
    },
    {
      id: 246,
      firstName: "Herman",
      lastName: "Frederick",
      email: "RAnglin@sed.org",
      phone: "(968)252-8279",
      address: {
        streetAddress: "4258 Turpis St",
        city: "Brooklyn Park",
        state: "LA",
        zip: "92475",
      },
      description:
        "turpis eget eros ante dui ipsum morbi dui tellus scelerisque non elementum sollicitudin magna pharetra nec eget egestas amet nec vitae egestas sed hendrerit vestibulum non pulvinar sit suspendisse amet ipsum facilisis",
    },
    {
      id: 81,
      firstName: "Tijana",
      lastName: "Farrell",
      email: "EDenton@sed.gov",
      phone: "(430)390-2298",
      address: {
        streetAddress: "693 Id Dr",
        city: "Oakland",
        state: "VT",
        zip: "45077",
      },
      description:
        "fringilla tortor ipsum sit amet facilisis sollicitudin aliquam lectus vitae non lacus pulvinar tincidunt ac at risus pulvinar lectus sit magna curabitur amet amet vestibulum amet sed sit porttitor non egestas convallis",
    },
    {
      id: 206,
      firstName: "Theodora",
      lastName: "Koehn",
      email: "HBorisyuk@sed.org",
      phone: "(635)801-5590",
      address: {
        streetAddress: "8703 Vel Ct",
        city: "Stl",
        state: "CO",
        zip: "85510",
      },
      description:
        "vitae pulvinar sollicitudin hendrerit tincidunt ipsum placerat massa dolor vitae ipsum ac elit quis placerat tempor tellus non tincidunt mi sed quis curabitur curabitur id porta aliquam sed consequat rutrum scelerisque aliquam",
    },
    {
      id: 839,
      firstName: "Vincent",
      lastName: "Johnston",
      email: "VGranzow@sollicitudin.org",
      phone: "(418)853-6492",
      address: {
        streetAddress: "3445 Sit St",
        city: "Riverside",
        state: "MT",
        zip: "21422",
      },
      description:
        "magna turpis mattis porttitor porttitor sed sollicitudin elementum malesuada magna dui nec vitae mattis neque non ac non donec vel scelerisque mattis curabitur ac risus odio ante vitae consectetur nullam pharetra odio",
    },
    {
      id: 543,
      firstName: "Vasilis",
      lastName: "Daly",
      email: "RBrooks@massa.net",
      phone: "(166)084-6040",
      address: {
        streetAddress: "6841 Pulvinar Dr",
        city: "Ligonier",
        state: "NJ",
        zip: "83263",
      },
      description:
        "consequat dolor dolor lacus adipiscing dolor vestibulum sit at dolor turpis tellus pulvinar consequat et pulvinar vitae vel ipsum porta sed tincidunt facilisis aliquam lacus vitae malesuada eget consectetur odio orci egestas",
    },
    {
      id: 287,
      firstName: "Nichole",
      lastName: "Bruintjes",
      email: "MPeters@orci.org",
      phone: "(248)163-6136",
      address: {
        streetAddress: "3341 Neque Ct",
        city: "Long Beach",
        state: "ME",
        zip: "35983",
      },
      description:
        "tincidunt eget mi dolor magna egestas nec suspendisse magna tincidunt pulvinar nec porttitor sit augue scelerisque vitae at aenean sagittis aenean dolor tortor malesuada sit sed dolor vitae sed amet massa tellus",
    },
  ]);
  const [sort, setSort] = useState("asc");
  const [sortField, setField] = useState("id");
  const [itemItem, setTtemItem] = useState(0);
  const [checkIifo, setCheckIifo] = useState(false);
  const [state, setState] = useState({
    g1: 1,
    g2: 1,
    g3: 1,
  });
  useEffect(() => {
    setData(_.orderBy(data, "id", "asc"));
    axios
      .get(
        "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      )
      .then((data) => {
        const data_ = data.data;
        setData(_.orderBy(data_, "id", "asc"));
        setLoading(false);
      });
  }, []);

  let sortItems = (field = "id") => {
    let arr = data.concat();
    let sortType = sort === "asc" ? "desc" : "asc";
    let orderedData = _.orderBy(arr, field, sortType);
    setData(orderedData);
    setSort(sortType);
    setField(field);
  };
  let Heigth = React.createRef();
  let checkItem = (row) => {
    // Heigth.current.scrollTop = 0
    console.log(Heigth.current.scrollTop);
    setTtemItem(row);
    setCheckIifo(true);
  };
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <div className="App" ref={Heigth}>
      <header className="App-header">
        <Wrapper checkIifo={checkIifo} itemItem={itemItem} />
        <div>
          <Switch>
            <Route
              path="/Tablet"
              render={() =>
                loading ? (
                  <Loader />
                ) : (
                  <Tablet
                    data={data}
                    sortItems={sortItems}
                    sort={sort}
                    sortField={sortField}
                    checkItem={checkItem}
                  />
                )
              }
            />

            <Route path="/StarWars" render={() => <StarWarsContainer />} />
            <Route
              path="/Chstate"
              render={() => <CHstate setState={setState} state={state} />}
            />
            {itemItem ? (
              <Route
                path="/Todo"
                render={() => <TInfo itemItem={itemItem} />}
              />
            ) : (
              <Redirect to="/Tablet" />
            )}
          </Switch>
        </div>
      </header>
    </div>
  );
};
function Wrapper({ checkIifo }) {
  debugger;
  return (
    <div className="Wrapper">
      <div className="ln">
        <NavLink
          className="btn btn-info"
          to="/Tablet"
          activeClassName={"ln_active"}
        >
          Tablet
        </NavLink>
      </div>
      {checkIifo ? (
        <div className="ln">
          <NavLink
            className="btn btn-primary "
            to="/Todo"
            activeClassName={"ln_active"}
          >
            Full info
          </NavLink>
        </div>
      ) : (
        console.log()
      )}
      <div className="ln">
        <NavLink
          className="btn btn-secondary "
          to="/Chstate"
          activeClassName={"ln_active"}
        >
          Check state
        </NavLink>
      </div>
      <div className="ln">
        <NavLink
          className="btn btn-success "
          to="/StarWars"
          activeClassName={"ln_active"}
        >
          StarWars
        </NavLink>
      </div>
    </div>
  );
}

const ChangeStateF = ({ state, setState }) => {
  return (
    <>
      <div
        className="btn btn-info"
        onClick={() => {
          setState({ ...state, g1: state.g1 + 1 });
        }}
      >
        to Change state 1 {state.g1}{" "}
      </div>
      <div
        className="btn btn-dark"
        onClick={() => {
          setState({ ...state, g2: state.g2 + 1 });
        }}
      >
        {" "}
        to Change state 2 {state.g2}{" "}
      </div>
      <div
        className="btn btn-primary "
        onClick={() => {
          setState({ ...state, g3: state.g3 + 1 });
        }}
      >
        to Change state 3 {state.g3}{" "}
      </div>
    </>
  );
};

export default App;
