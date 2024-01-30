import React from "react";
import BgImg from "./assets/desktop.svg";
import MobileBG from "./assets/mobile.svg";
import Star from "./assets/icon-star.svg";
import Plus from "./assets/icon-plus.svg";

const App = () => {
  return (
    <div>
      <div>
        <img src={BgImg} alt="" className="w-full" />

        {/* Main Div */}

        <div className="flex justify-center items-center m-auto ">
          {/* heading */}

          <div className="bg-white w-[500px] h-[650px] absolute border border-slate-400 p-4">
            <div className="flex items-center justify-start gap-4">
              <img src={Star} alt="" />
              <h1 className="text-xl font-bold">FAQS</h1>
            </div>

            {/* Accordion Div */}

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3>Questions:</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero voluptate quam ipsam ex assumenda quae voluptatibus,
                    dicta quia reiciendis. Possimus soluta quae laborum facilis
                    hic voluptatum repellat optio veritatis expedita!
                  </p>
                </div>

                <img src={Plus} alt="" />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3>Questions:</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero voluptate quam ipsam ex assumenda quae voluptatibus,
                    dicta quia reiciendis. Possimus soluta quae laborum facilis
                    hic voluptatum repellat optio veritatis expedita!
                  </p>
                </div>

                <img src={Plus} alt="" />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3>Questions:</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero voluptate quam ipsam ex assumenda quae voluptatibus,
                    dicta quia reiciendis. Possimus soluta quae laborum facilis
                    hic voluptatum repellat optio veritatis expedita!
                  </p>
                </div>

                <img src={Plus} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
