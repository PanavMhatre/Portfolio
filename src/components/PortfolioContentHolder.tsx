import { Card, CardBody } from "@nextui-org/react";
import React from "react";

interface PortfolioContentHolderProps {
    textHeader: string;
    assignment: string;
    learned: string;
    improve: string;
    iframeComponent: React.ReactNode; // Added iframeComponent prop
}

function PortfolioContentHolder(props: PortfolioContentHolderProps) {
    const { textHeader, assignment, learned, improve, iframeComponent } = props;

    return (
        <div className="text-center mb-5">
            <Card>
                <CardBody>
                    <h2 className="text-5xl font-bold dark:text-white mb-5 mx-auto">{textHeader}</h2> {/* Updated font size to text-5xl */}
                    <div className="mx-auto">{iframeComponent}</div>
                    <h5 className="text-xl text-gray-500 font-normal dark:text-white mt-10 mb-2"><span className="font-bold">Assignment: </span>{assignment}</h5>
                    <h5 className="text-xl text-gray-500 font-normal dark:text-white mb-2"><span className="font-bold">What I Learned: </span>{learned}</h5>
                    <h5 className="text-xl text-gray-500 font-normal dark:text-white "><span className="font-bold">What I Need To Improve On: </span>{improve}</h5>
                </CardBody>
            </Card>
        </div>
    );
}

export default PortfolioContentHolder;
