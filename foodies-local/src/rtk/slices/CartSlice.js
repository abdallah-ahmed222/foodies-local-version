import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice( {
    initialState: JSON.parse( localStorage.getItem( 'cartItems' ) ) || [],
    name: "cartSlice",
    reducers: {
        addToCart: ( state, action ) =>
        {
            const items = action.payload;
            const selectedItem = state.find( ( item ) => item.id === items.id )
            if ( !selectedItem )
            {
                const itemClon = {...action.payload , quantity : 1}
                state.push( itemClon )
                localStorage.setItem( "cartItems", JSON.stringify( state ) )
                toast.success( "successfuly added to the cart" )
            } else
            {
                selectedItem.quantity +=1;
            }
        },
        removeFromCart: ( state, action ) =>
        {
            let data = state.filter( ( item ) => ( item.id !== action.payload.id ) );
            localStorage.setItem( "cartItems", JSON.stringify( data ) )
            toast.error( "successfuly removed !" )
            return data;
        },
        increase: (state , action) => {
            const items = action.payload;
            const selectedItem = state.find( ( item ) => item.id === items.id )
            selectedItem.quantity +=1;
            localStorage.setItem( "cartItems", JSON.stringify( state ) )
        },
        decrease: (state , action) => {
            const items = action.payload;
            const selectedItem = state.find( ( item ) => item.id === items.id )
            if(selectedItem.quantity === 1) {
                let data = state.filter( ( item ) => ( item.id !== action.payload.id ) );
                localStorage.setItem( "cartItems", JSON.stringify( data ) )
                return data;

             
            }else {
                selectedItem.quantity -=1;
                
                localStorage.setItem( "cartItems", JSON.stringify( state ) )

            }
        }
        ,clearCart: ( state ) =>
        {
            state = []
            return state
        }
    }
} )
export const { addToCart, removeFromCart, clearCart ,increase,decrease} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;