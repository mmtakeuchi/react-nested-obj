import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi:
      "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji:
          "an apple cultivar developed by growers at Tohoku Research Station"
      }
    }
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    <>
      {Object.entries(nestedObjected).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <React.Fragment key={key}>
              <p>{`${key}: `}</p>
              <div style={{ paddingLeft: 30 }}>
                <DisplayNested nestedObjected={value} />
              </div>
            </React.Fragment>
          );
        } else {
          return <Details data={key} val={value} key={key} />;
        }
      })}
    </>
  );
};

const Details = ({ data, val }) => {
  return <p>{`${data}: ${val}`}</p>;
};

export default App;
