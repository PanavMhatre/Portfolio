import {Tab, Tabs } from "@nextui-org/react";
import React from "react";
import NavBar from "../components/NavBar";
import PortfolioContentHolder from "../components/PortfolioContentHolder";

function Portfolio() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="block justify-center mt-5 mb-5">
        <Tabs aria-label="Options" className=" w-full justify-center mb-5">
          <Tab key="IED" title="Intro to Engineering">
            <div className="justify-center">
              <PortfolioContentHolder
                textHeader={"ISO-Shapes"}
                assignment={
                  "Create each Iso-Shape part (IPT), create a drawing (IDW) for each part, and depict and dimension the front, right, and top views.  Also, project and shade the isometric view.  "
                }
                learned={
                  "I learned how to create complex features such as chamfers, fillets, and holes. I also learned how to dimension a chamfer via an angled measurement, a circle, and centerlines of hidden holes. I also learned how to create complex shapes using the cut feature and extrude feature in Inventor. Secondly, I learned how to make notes and other important text that would help dimension the shape. "
                }
                improve={
                  "I need to work on dimensioning centerlines as well as hidden lines. I also have to work on giving all of the dimensions and not over-dimension the Iso-Shapes. Lastly, I need to work on making sure that dimension lines don't touch the object lines and work on other dimensioning best practices. "
                }
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/19kkUwLGNrzz9oaixqZfBtazhVEar2JCW/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Puzzle Cube                "}
                assignment={
                  "Using Autodesk Inventor, create one Part File (.ipt) for each puzzle piece and then dimension it on a PLTW A sheet, then create an exploded pictorial and parts list for the assembled Puzzle Cube on a PLTW A sheet."
                }
                learned={
                  "I learned how to create a part list and an exploded pictorial which required the use of tweaking a component and taking a snapshot of the overall view. Also, I learned how to dimension a front, top, and side view.  Secondly, I learned how to put disassembly views and assembly views on an IDW, and I learned how to place Isometric, front, side, and top views on an IDW. Also, I learned how to import the PLTW A sheet of paper which was used to dimension the parts.    "
                }
                improve={
                  "I need to work on my placement of hidden lines from the top, front, and side views.  Moreover, I need to work on my Parts List and how to reorder it via the item number. "
                }
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/1gpWWV33X2HAtookPNQigg32fV_4k_kVM/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Puzzle Cube                "}
                assignment={
                  " To create a functional Automata Box that can rotate using a crank handle to drive four cams and have four objects go up and down. The four objects are based on a singular theme which in this case is Mario.  After assembling the Automata place the front, right side, and top view of each item on a PLTW A sheet of paper. Then, put the Automata box without the items with a parts list and disassembly view on the PLTW C sheet. "
                }
                learned={
                  "I learned about the different types of constraints such as insert constraints, angle constraints, and motion constraints. I also learned about parameters will creating the cams. Lastly, I learned about a variety of sketching constraints such as tangents, parallel, and lock.     "
                }
                improve={
                  "For the disassembly, I need to work on making sure that I have properly ballooned every part. Then, for the full assembly view, I need to work on making the scale of the object more viewable while fitting on the sheet. Lastly, I need to make sure that when working with screws I make sure that coil the bottom of the screw. "
                }
                iframeComponent={
                  <iframe src="https://drive.google.com/file/d/1fPRPkglSe-bH4z7ZCDk_7h9vkEPzT4kB/preview" width="700" height="500" allow="autoplay"></iframe>
                }
              ></PortfolioContentHolder>

            </div>
          </Tab>
          <Tab key="POE" title="Principles of Engineering">
            
          </Tab>
          <Tab key="DE" title="Digital Electronics">
            
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Portfolio;
