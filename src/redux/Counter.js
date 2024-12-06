import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CounterSlice = createSlice({
    name: "counter",
    initialState:JSON.parse(localStorage.getItem("products"))??{ data: [], total: 0, sum: 0 },
    reducers: {
        increment: (state, { payload }) => {
            // state.data +=1;
            // state.sum += +payload 
            let product = state.data.find(v => v.id == payload.id);
            if (product) {
                toast.warning("Product already added");
            } else {
                toast.success("Add succussfully")
                state.data = [...state.data, payload];
                
                CounterSlice.caseReducers.reInit(state)
                
            };
        },
        plus: (state, { payload }) => {

            state.data.map(v => {
                return v.id == payload ? { ...v, amount: v.amount++ } : v
            })
            CounterSlice.caseReducers.reInit(state);
        },
        minus: (state, { payload }) => {
            state.data.forEach(v => (v.id == payload) && (v.amount > 0) ? { ...v, amount: v.amount-- } : v);
            let res = state.data.filter(v => v.amount !== 0);
            state.data = res;
            CounterSlice.caseReducers.reInit(state)

        },
        remove: (state, { payload }) => {
            console.log(payload);
            let res = state.data.filter(v => v.id !== payload);
            state.data = res;
            CounterSlice.caseReducers.reInit(state)

        },
        reInit: (state) => {

            let totalCounter = 0;
            let sumCounter = 0;

            state.data?.forEach(v => {
                totalCounter += v.amount;
                sumCounter += +((v.price - (v.price * v.discountPercentage) / 100) * v.amount).toFixed(2)
            });
            
            state.total = totalCounter;
            state.sum = sumCounter;

            localStorage.setItem("products",JSON.stringify(state));
        }

    }

})
export const { increment, plus, minus, remove } = CounterSlice.actions;
export default CounterSlice.reducer;