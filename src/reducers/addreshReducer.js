export function addreshReducer(state={
  home:"home addresh",
  office:"office addresh",
},action){

     state={
       ...state,
       homeAddresh:action.payload,
     };
       return state;
}
