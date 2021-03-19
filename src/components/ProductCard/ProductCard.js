import React from "react";
import { ThemeButton, Text } from "../../components";

const ProductCard = (props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {[...Array(4)].map((el, index) => (
        <div className="shadow-md" onClick={props.handleProduct}>
          <div className="md:flex relative">
            {/* discount  */}
            <div className="absolute bg-gray-900 p-0.5 ">
              <Text size="xs" variant="white">
                25% off
              </Text>
            </div>
            {/* image section */}
            <div>
              <img
                src="https://assets.ajio.com/medias/sys_master/root/h96/h4b/13279682363422/-473Wx593H-460312093-teal-OUTFIT.jpg"
                className="object-cover w-48"
              />
            </div>
            {/* details section */}
            <div className="space-y-3 p-1">
              {/* brand name */}
              <div>
                <Text
                  size="sm"
                  isTitle={true}
                  weight="600"
                  classes="capitalize"
                >
                  United Colors of Bennition
                </Text>
              </div>
              {/* product name */}
              <div>
                <Text
                  size="xs"
                  isTitle={true}
                  variant="primary"
                  weight="500"
                  classes="capitalize"
                >
                  Casual blue Shoes
                </Text>
              </div>
              {/* product pricing  */}
              <div className="flex justify-between">
                <div>
                  <Text size="xs" weight="600" variant="primary">
                    25% off
                  </Text>
                </div>
                <div>
                  <del>
                    <Text size="xs" weight="600" variant="primary">
                      25% off
                    </Text>
                  </del>
                </div>
              </div>
              {/* button*/}
              <ThemeButton>
                <Text size="xs" weight="600">
                  buy now
                </Text>
              </ThemeButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
