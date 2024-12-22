import React from 'react'

// function Card(props) {

//     // console.log("props", props); 

//     console.log(props.username);
    
    

//   return (
   

//     <div className="flex flex-col rounded-xl  p-4 "
//         style={{
//           border: '0.88px solid',
//           width: 250,

//           backdropFilter: 'saturate(180%) blur(14px)',
//           background: ' #ffffff0d',
//         }}
//       >
//         <div>
//           <img
//             src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
//             alt="nft-gif"
//             width="400"
//             height="300"
//             className="rounded-xl"
//           />
//         </div>
//         <div className="flex flex-col  rounded-b-xl py-4 ">
//           <div className="flex justify-between">
//             <h2 className="font-RubikBold ">lorem </h2>
//             <h2 className="font-bold font-RubikBold">Price</h2>
//           </div>
//           <div className="flex  justify-between font-mono">
//             <p>#345</p>
//             <p>0.01</p>
//           </div>
//         </div>
//       </div>
//   )
// }


function Card({username, btnText="default"}) {

    // console.log("props", props); 

    console.log(username);
    
    

  return (
   

    <div className="flex flex-col rounded-xl  p-4 "
        style={{
          border: '0.88px solid',
          width: 250,

          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="300"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="">
            <h2 className="font-RubikBold ">{username}</h2>
        
          </div>
          {/* <button className="mt-4">{btnText || "default" }</button> */}
          <button className="mt-4">{btnText}</button>
        </div>
      </div>
  )
}




export default Card