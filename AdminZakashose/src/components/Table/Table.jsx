import * as React from "react";
import "./Table.css";
import MUIDataTable from "mui-datatables";

export default function BasicTable() {
  
  const columns = ["Name", "Company", 
  "City", "State"
];
    const data = [
      ["Ehtisham", "niki", "gujrat", "Pakistan"],
      ["Noman", "abcdes", "gujrat", "pakistan"],
     ];
     
     const options = {
       filterType: 'checkbox',
     };
  
    return (
      <div >
   
      <MUIDataTable  style={{background:"black"}}
    title={"Employee List1"}
    data={data}
    columns={columns}
    options={options}
  />
        
      </div>
    );
  
  
  
  
  
  
  
  }
  
















// function createData(name, trackingId, date, status) {
//   const columns = ["Name", "Company", "City", "State"];
//   const data = [
//     ["Joe James", "Test Corp", "Yonkers", "NY"],
//     ["John Walsh", "Test Corp", "Hartford", "CT"],
//     ["Bob Herm", "Test Corp", "Tampa", "FL"],
//     ["James Houston", "Test Corp", "Dallas", "TX"],
//    ];
   
//    const options = {
//      filterType: 'checkbox',
//    };

//   return (
//     <div >
//     <MUIDataTable
//   title={"Employee List"}
//   data={data}
//   columns={columns}
//   options={options}
// />
      
//     </div>
//   );
// }



// function createData(name, trackingId, date, status) {
//   return { name, trackingId, date, status };
// }

// const rows = [
//   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
//   createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
//   createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
//   createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
// ];


// const makeStyle=(status)=>{
//   if(status === 'Approved')
//   {
//     return {
//       background: 'rgb(145 254 159 / 47%)',
//       color: 'green',
//     }
//   }
//   else if(status === 'Pending')
//   {
//     return{
//       background: '#ffadad8f',
//       color: 'red',
//     }
//   }
//   else{
//     return{
//       background: '#59bfff',
//       color: 'white',
//     }
//   }
// }

// export default function BasicTable() {
//   return (
//       <div className="Table">
//       <h3>Recent Orders</h3>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ background: "black", color:"white"  }}>
//             <TableHead>
//               <TableRow style={{  color:"white"  }}>
//                 <TableCell>Product</TableCell>
//                 <TableCell align="left">Tracking ID</TableCell>
//                 <TableCell align="left">Date</TableCell>
//                 <TableCell align="left">Status</TableCell>
//                 <TableCell align="left"></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody >
//               {rows.map((row) => (
//                 <TableRow
//                   key={row.name}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="left">{row.trackingId}</TableCell>
//                   <TableCell align="left">{row.date}</TableCell>
//                   <TableCell align="left">
//                     <span className="status" style={makeStyle(row.status)}>{row.status}</span>
//                   </TableCell>
//                   <TableCell align="left" className="Details">Details</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//   );








//}

// export default function BasicTable() {
  //   return (
  //       <div className="Table">
  //       <h3>Recent Orders</h3>
  //         <TableContainer
  //           component={Paper}
  //           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
  //         >
  //           <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ background: "black", color:"white"  }}>
  //             <TableHead>
  //               <TableRow style={{  color:"white"  }}>
  //                 <TableCell>Product</TableCell>
  //                 <TableCell align="left">Tracking ID</TableCell>
  //                 <TableCell align="left">Date</TableCell>
  //                 <TableCell align="left">Status</TableCell>
  //                 <TableCell align="left"></TableCell>
  //               </TableRow>
  //             </TableHead>
  //             <TableBody >
  //               {rows.map((row) => (
  //                 <TableRow
  //                   key={row.name}
  //                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  //                 >
  //                   <TableCell component="th" scope="row">
  //                     {row.name}
  //                   </TableCell>
  //                   <TableCell align="left">{row.trackingId}</TableCell>
  //                   <TableCell align="left">{row.date}</TableCell>
  //                   <TableCell align="left">
  //                     <span className="status" style={makeStyle(row.status)}>{row.status}</span>
  //                   </TableCell>
  //                   <TableCell align="left" className="Details">Details</TableCell>
  //                 </TableRow>
  //               ))}
  //             </TableBody>
  //           </Table>
  //         </TableContainer>
  //       </div>
  //   );}




  