// import { useMediaQuery } from 'react-responsive';

// type mediaType = {
//   isSp: boolean;
//   isTb: boolean;
//   isWeb: boolean;
// };

// const smartPhoneMaxSize = 520;
// const tableMaxSize = 960;

// export const useViewport = (): mediaType => {
//   const isSp = useMediaQuery({ maxWidth: smartPhoneMaxSize });
//   const isTb = useMediaQuery({ maxWidth: tableMaxSize });

//   let result: mediaType = { isSp: false, isTb: false, isWeb: false };
//   if (isSp) {
//     result.isSp = true;
//   } else if (isTb) {
//     result.isTb = true;
//   } else {
//     result.isWeb = true;
//   }

//   return result;
// };
