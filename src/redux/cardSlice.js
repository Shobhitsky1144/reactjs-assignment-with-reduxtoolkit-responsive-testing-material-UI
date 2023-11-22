import {createSlice} from '@reduxjs/toolkit';


const cardSlice=createSlice({
    name:"card",
    initialState:{
         cardData:
        [
          {
            id:1,
            title:"Batu, East Java",
            img:"https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"86 Destinations",
        
          },
          {
            id:2,
            title:"Kuta",
            img:"https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"86 Destinations",
        
          },
          {
            id:3,
            title:"Surabaya, East Java",
            img:"https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"86 Destinations",
        
          },
          {
            id:4,
            title:"Malang, East Java",
            img:"https://images.pexels.com/photos/372490/pexels-photo-372490.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"186 Destinations",
        
          },
          
          {
            id:5,
            title:"Nusa Dua, East Java",
            img:"https://images.pexels.com/photos/372490/pexels-photo-372490.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"66 Destinations",
        
          },
          {
            id:6,
            title:"Bandung, East Java",
            img:"https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"86 Destinations",
        
          },
          {
            id:7,
            title:"Wakatobi, East Java",
            img:"https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"186 Destinations",
        
          },
          {
            id:8,
            title:"Wakatobi, East Java",
            img:"https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=600",
            content:"186 Destinations",
        
          }
        ]
    },
    reducers:{}
})

export default cardSlice.reducer;
export const selectCardData=(state)=>state.card.cardData;
