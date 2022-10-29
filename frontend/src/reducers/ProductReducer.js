// import axios from "axios";
// import { Link } from "react-router-dom";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS
} from "../constans/ProductConstans";

export const productsReducer = (state = { product: [] }, action) => {
  // fetch(`/api/v2/product`)
  // .then(response => response.json())
  // .then(data => console.log(data));

  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
  
        loading: false,
        product: action.payload.product,

      };

    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

     

// import {ALL_PRODUCT_FAIL,
//         ALL_PRODUCT_REQUEST,
//         ALL_PRODUCT_SUCCESS,
//         CLEAR_ERRORS,
// }  from "../constans/ProductConstans";

// export const productsReducer = (state = { products: [] }, action) => {
//     switch (action.type) {
//       case ALL_PRODUCT_REQUEST:
//         return {
//           loading: true,
//           products: [],
//         };
//       case ALL_PRODUCT_SUCCESS:
//         return {
//             loading: false,
//             products: action.payload.products,
//             // productsCount: action.payload.productsCount,
//             // resultPerPage: action.payload.resultPerPage,
//             // filteredProductsCount: action.payload.filteredProductsCount,
//          }
//         //    return {
//         //   loading: false,
//         //   products: action.payload,
//         //  };

//       case ALL_PRODUCT_FAIL:
//           //   case ADMIN_PRODUCT_FAIL:
//          return {
//           loading: false,
//           error: action.payload,
//           };
//       case CLEAR_ERRORS:
//          return {
//           ...state,
//           error: null,
//          };
//          default:
//          return state;
//     }
// };
