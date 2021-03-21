import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { Button, ProductCard, Text, ThemeButton } from "../../../../components";
import { history } from "../../../../utils";

const downArrow = () => {
  return (
    <svg
      className="animate-bounce w-6 h-6 text-blue-800"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
      />
    </svg>
  );
};

const Coupons = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => {
    setExpanded(panel);
  };

  const handleProductClick = () => {
    history.push("/product/casual-shoes");
  };

  return (
    <React.Fragment>
      <div className="px-2 shadow-lg py-2 space-y-4">
        {[...Array(4)].map((el, index) => (
          <React.Fragment>
            <div className="px-6 mt-6">
              <Text weight="600" isTitle={true} classes="uppercase">
                best of myntra
              </Text>
            </div>
            <Accordion expanded={expanded === index} elevation={0}>
              <AccordionSummary>
                <ProductCard handleProduct={handleProductClick} />
              </AccordionSummary>
              <AccordionDetails>
                <ProductCard handleProduct={handleProductClick} />
              </AccordionDetails>
            </Accordion>

            <div
              className="flex items-center justify-center space-x-4"
              onClick={() => handleChange(index)}
            >
              <div>{downArrow()}</div>
              <div>
                <Button capitalize={true} bold={true}>
                  view all
                </Button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Coupons;
