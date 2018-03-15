import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

//import './playground/redux101';
//import './playground/es6';
//import './playground/refactoring';
//import './playground/redux-expensify';
//import './playground/hoc.js';
const store =configureStore();
store.dispatch(addExpense({description:'Water billl',amount:4500}));
store.dispatch(addExpense({description:'Gas billl',createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:109500}));


const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

console.log(store.getState());
const jsx=(
    <Provider store={store}>
      <AppRouter/>
   </Provider>
);
ReactDOM.render(jsx,document.getElementById('root'));