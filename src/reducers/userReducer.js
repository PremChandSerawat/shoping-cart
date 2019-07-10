export function addToCart(state={totalItem:0,items:[]},action){
  switch (action.type) {
    case "AddItem":
    console.log("AddItem is called");
          state={
          ...state,
          totalItem:state.totalItem+action.payload,
        }
      break;
     case 'RemoveItem':
     state={
       ...state,
       totalItem:state.totalItem-1,
     }
   break;
   default :
    state={
      ...state
    }

}
return state;
}
