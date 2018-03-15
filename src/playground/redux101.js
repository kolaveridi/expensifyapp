import {createStore} from 'redux';
console.log("working now");

const incrementCount=()=>{{
  type:'INCREMENT'
}};
const store=createStore((state={count:0},action)=>{
  switch(action.type){
    case 'INCREMENT':
    const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1;
    return {
      count:state.count+incrementBy 
    };
    case 'DECREMENT':
    return{
      count:state.count-1
    };
    case 'RESET':
     return {
       count:0
     };
    default:
    return state;
  }
});


const unsubscribe=store.subscribe(()=>{
console.log(store.getState());
});
 store.dispatch(incrementCount());
 console.log("it worked");
store.dispatch({
  type:'INCREMENT',
  incrementBy:5
});

unsubscribe();
store.dispatch({
  type:'DECREMENT'
});

store.dispatch({
  type:'RESET'
});

store.dispatch({
  type:'INCREMENT'
});


