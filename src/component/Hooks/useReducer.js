// import React, { useReducer } from 'react'
// import "./style.css";
// const reducer=(state,action) => {
//     if(action.type==="INCR"){
//         state=state+1;
//     }
//     if(state >0 && action.type==="DCR"){
//         state=state-1;
//     }
//     return state;
// }
// const UseReducer = () => {
// //     const initialData =0;
// //    const [myNum,setMyNum]= React.useState(initialData);
// const initialData =10;
// const [state,dispatch] = useReducer(reducer,initialData)
//   return (
//   <>
//     <div className='"center_div'>
//         <p>{state}</p>
//         <div className='button2' onClick={() => dispatch({type:"INCR"})}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//        INCR
//         </div>
//         <div className='button2'onClick={() => dispatch({type:"DCR"})}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         DCR
//         </div>
//     </div>
//   </>
//   )
// }

// export default UseReducer