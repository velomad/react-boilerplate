import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { Button, ProductCard, Text, ThemeButton } from "../../../../components";
import { COLORS } from "../../../../theme/mainTheme";
import axios from "axios";
import { useHistory } from "react-router-dom";

const downArrow = () => {
  return (
    <svg
      style={{ color: COLORS.primary }}
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
      />
    </svg>
  );
};

const Coupons = () => {
  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);
  const [couponsData, setCouponsData] = React.useState([]);

  const getCoupons = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/v1/base");
      setCouponsData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  const handleChange = (panel) => {
    setExpanded(panel);
  };

  const handleProductClick = (productId) => {
    console.log(productId);
    history.push("/product/" + productId);
  };

  return (
    <React.Fragment>
      <div className="px-2 shadow-lg py-2 space-y-8">
        {couponsData.companies &&
          couponsData.companies.map((el, index) => (
            <React.Fragment key={index}>
              <div className="px-2 mt-6 flex justify-between items-center">
                <div style={{ color: COLORS.primary }}>
                  <Text
                    weight="700"
                    size="lg"
                    isTitle={true}
                    classes="capitalize"
                  >
                    {el.replace(/-/g, " ")}
                  </Text>
                </div>
                <div
                  onClick={() => history.push("/products?company=" + el)}
                  style={{ backgroundColor: COLORS.primary }}
                  className="p-1 px-4 cursor-pointer text-center"
                >
                  <Text
                    weight="600"
                    size="xs"
                    variant="white"
                    isTitle={true}
                    classes="uppercase"
                  >
                    View All
                  </Text>
                </div>
              </div>
              <div className="py-2">
                <ProductCard
                  getProductId={handleProductClick}
                  coupons={couponsData[el] && couponsData[el].slice(0, 4)}
                />
              </div>
              {/* <Accordion
                expanded={expanded === index}
                elevation={0}
                style={expanded ? { margin: 0 } : { margin: 0 }}
              >
                <AccordionSummary>
                  <ProductCard
                    handleProduct={handleProductClick}
                    coupons={couponsData[el].slice(0, 4)}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <ProductCard
                    handleProduct={handleProductClick}
                    coupons={couponsData[el].slice(4, 21)}
                  />
                </AccordionDetails>
              </Accordion> */}

              {/* <div
                className="bg-gray-100 py-2 flex items-center justify-center space-x-4"
                onClick={() => handleChange(index)}
              >
                <div>{downArrow()}</div>
                <div>
                  <Button capitalize={true} bold={true}>
                    view all
                  </Button>
                </div>
              </div> */}
            </React.Fragment>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Coupons;
