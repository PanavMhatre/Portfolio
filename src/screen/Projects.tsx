import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import NavBar from "../components/NavBar";
import PortfolioContentHolder from "../components/PortfolioContentHolder";

function Projects() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="block justify-center mt-5">
        <Tabs aria-label="Options">
          <Tab key="IED" title="Intro to Engineering">
            <div className="justify-center">
              <PortfolioContentHolder
                textHeader={"ISO-Shapes"}
                assignment={"Create each Iso-Shape part (IPT), create a drawing (IDW) for each part, and depict and dimension the front, right, and top views.  Also, project and shade the isometric view.  "}
                learned={"I learned how to create complex features such as chamfers, fillets, and holes. I also learned how to dimension a chamfer via an angled measurement, a circle, and centerlines of hidden holes. I also learned how to create complex shapes using the cut feature and extrude feature in Inventor. Secondly, I learned how to make notes and other important text that would help dimension the shape. "}
                improve={"I need to work on dimensioning centerlines as well as hidden lines. I also have to work on giving all of the dimensions and not over-dimension the Iso-Shapes. Lastly, I need to work on making sure that dimension lines don't touch the object lines and work on other dimensioning best practices. "}
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/19kkUwLGNrzz9oaixqZfBtazhVEar2JCW/preview"
                    width="640"
                    height="480"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              
            </div>
          </Tab>
          <Tab key="POE" title="Principles of Engineering">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="DE" title="Digital Electronics">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
