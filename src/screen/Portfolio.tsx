import { Tab, Tabs } from "@nextui-org/react";
import NavBar from "../components/NavBar";
import PortfolioContentHolder from "../components/PortfolioContentHolder";
import Footer from "../components/Footer";

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
                textHeader={"Puzzle Cube"}
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
                textHeader={"Robot                "}
                assignment={
                  " Model a robot on the web. It must include 4 features that we learned in class while including fillets, chamfers, hole, workplace, and extrusions.  The item must be made out of multiple files (IPT) and must be assembled (IAM). "
                }
                learned={
                  "I learned how to use the loft feature which was used for the legs. Secondly, I learned the revolve feature which was used in the hand. Lastly, I learned how to use the offset feature which was used to create the head. Another thing is that I learned to use the constraint tools to help position the holes on the front of the robot and the eyes of the robot.       "
                }
                improve={""}
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/1nb66U28K0H2hxPvBo_elBQUBfcCOp-4f/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Advanced ISO-Shapes                "}
                assignment={
                  " Create a drawing file (PLTW-A)  and make a multiview with an isometric of each part.  Make sure you have hidden lines showing in the multi-views (front, top, and side),  and put centerlines in where necessary. "
                }
                learned={""}
                improve={""}
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/1HLpu4uM4TS7iSfS1Z6r2NegvxqqC5SL8/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Lightsaber                "}
                assignment={
                  " Create a drawing file (IDW) with an exploded view, assembled view, balloons, and parts list. You will create 3 parts and have on assembly with a blade. "
                }
                learned={
                  "To create this lightsaber I used a lot of features. First I used Loft and Circular pattern to create the bottom of the lightsaber. Second, I used angle constraints with the revolve feature to create the second part. Lastly, to draw the Focusing Ring I used revolve and drew half of the front view profile. "
                }
                improve={
                  "I need to work on reading the dimensions of a given shape and understanding it to recreate the same part. Second I need to work on proportions of shape to give the shape the feeling of an actual lightsaber from the star wars movies. "
                }
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/1xp0npjlIL9CF5bvZJIV806BxcrMHgIz5/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Beverage Server                "}
                assignment={
                  " Create a beverage server using the dimensions provided. You will create 6 part files including at least one cup. You will be submitting one exploded pictorial and a full assembly plus a parts list. "
                }
                learned={
                  "I learned how to use the decal feature when creating the cups. The Coca-Cola cup is created using decals by downloading pictures of the top and side wrapping of the can and then decaling those pictures in the 3D modeling software. Second, I learned how to use the revolve feature to create both the parts and the cups.  "
                }
                improve={
                  "I need to work on making sure my parts list matches the right item number. I was having a lot of trouble figuring that out. Second, I need to make sure that my assemblies are properly constrained so that they don't move. "
                }
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/1qL5a8FSyQJDWc0jjAsqZ-4zI8rCXWvJt/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Mini Train              "}
                assignment={
                  " Create each of the following parts required to assemble the Mini Train and submit them in a pdf of IDWs. After, submit an assembly and disassembly of the full Mini Train with a parts list.  Lastly, you will add a custom-made train car to the back of the train.  "
                }
                learned={
                  "I learned how to use to create section views and detail views of a part and how to dimension section views and detail views.  Second, I learned how to create dimensioning texts for spherical radius and dimension chamfers. Lastly, I learned how to use the coil feature and the dimensions of the type of holes. "
                }
                improve={
                  "I need to work on making sure that my assemblies are assembled correctly and constrained correctly and aren't inserted too deep. Second, I need to make sure that my dimension text matches the correct feature so the dimensions are accurate. "
                }
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/10kG5zdM56UX8mWnGidS1M_ebVjBRNA_n/preview"
                    width="700"
                    height="500"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
              <PortfolioContentHolder
                textHeader={"Reverse Engineering              "}
                assignment={
                  "Create a poster that describes the Visual Analysis of a Coffee Machine including 5 Elements of Design and 5 Principles of Design. Second, create another poster that shows the functional aspects of the Coffe Machine including a Black Box Model. Lastly, model parts of the Coffe Machine in Inventor. "
                }
                learned={
                  "I learned how to apply the Elements and Principles of Design to a product. Also, I learned teamwork and partner work and how to be efficient while working with a partner. Secondly, I learned how to create appealing visuals which can help capture the audience's attention. "
                }
                improve={
                  "I need to work on varying out my visuals and making sure my visuals match the color style as they stick out compared to the background color. "
                }
                iframeComponent={
                  <iframe
                    src="https://drive.google.com/file/d/1OyuU4a0nT6ILALamiJb-RRWGAm9ujx6l/preview"
                    width="700"
                    height="550"
                    allow="autoplay"
                  ></iframe>
                }
              ></PortfolioContentHolder>
            </div>
          </Tab>
          <Tab key="POE" title="Principles of Engineering"></Tab>
          <Tab key="DE" title="Digital Electronics"></Tab>
        </Tabs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
