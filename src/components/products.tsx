import { FC } from "react";
import StarRating from "./starRating";

export const Product: FC<any> = (props) => {
  return (
    <div className="w-72 max-w-xs mx-auto">
      <div className="bg-gray-200 rounded-md overflow-hidden flex flex-col">
        <img
          src={props.obj.category.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="p-3 flex flex-col">
          <h3 className="text-base font-medium">
            <a href="#" className="text-blue-500">
              {props.obj.title}
            </a>
          </h3>
          <p className="text-gray-700 mt-1">${props.obj.price}</p>
          <div className="flex justify-between items-center mt-2">
            <StarRating />
          </div>
        </div>
      </div>
    </div>
  );
};
