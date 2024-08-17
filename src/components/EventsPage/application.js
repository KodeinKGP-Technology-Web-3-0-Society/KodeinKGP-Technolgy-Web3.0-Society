   
// import  react, { useEffect, useState } from 'react';
// import { DB_URL } from './DB_URL';

// export const RegistrationForm = () => {
//   const [nme, setName] = useState('');
//   const [rollNumber, setRollNumber] = useState('');
//   const [personalEmail, setPersonalEmail] = useState('');
//   const [instituteEmail, setInstituteEmail] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [otherInvolvements, setOtherInvolvements] = useState('');

  
//   useEffect(() => {
  
//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//         window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
// }, []);

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     try {
//       const response = await fetch(`${DB_URL}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//       },
//         body: JSON.stringify({  nme, rollNumber, personalEmail,instituteEmail,  contactNumber, otherInvolvements }),
//       });

      
//       setName('');
//       setRollNumber('');
//       setPersonalEmail('');
//       setInstituteEmail('');
//       setContactNumber('');
//       setOtherInvolvements('');
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
   
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md reg-heading">
//       <form onSubmit={handleSubmit} className='form'>
//       <h5 className="text-lg font-bold mb-4 reg-header">Registration Form </h5>
//         <div className="mb-4 all-labels">
//           <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 label-padding">
//             Name
//           </label>
//           <div className='input'>
//           <input
//             type="text"
//             id="name"
//             value={nme}
//             onChange={(e) => setName(e.target.value)}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-500 input " 
//             placeholder="Enter your name"
//             required
//           /></div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="roll-number" className="block text-gray-700 text-sm font-bold mb-2 label-padding">
//             Roll Number
//           </label>
//           <div className='input'>
//           <input
//             type="text"
//             id="roll-number"
//             value={rollNumber}
//             onChange={(e) => setRollNumber(e.target.value)}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-500 input"  
//             placeholder="Enter your roll number"
//             required
//           /></div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="personal-email" className="block text-gray-700 text-sm font-bold mb-2 label-padding">
//             Personal Email
//           </label>
//           <div className='input'>
//           <input
//             type="email"
//             id="personal-email"
//             value={personalEmail}
//             onChange={(e) => setPersonalEmail(e.target.value)}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-500 input"
//             placeholder="Enter your personal email"
//             required
//           />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="institute-email" className="block text-gray-700 text-sm font-bold mb-2 label-padding">
//             Institute Email
//           </label>
//           <div className='input'>
//           <input
//             type="email"
//             id="institute-email"
//             value={instituteEmail}
//             onChange={(e) => setInstituteEmail(e.target.value)}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-500 input "
//             placeholder="Enter your institute email"
//             required
//           />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="contact-number" className="block text-gray-700 text-sm font-bold mb-2 label-padding">
//             Contact Number
//           </label>
//           <div className='input'>
//           <input
//             type="tel"
//             id="contact-number"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-500 input"
//             placeholder="Enter your contact number"
//             required
//           />
//           </div>
//         </div>
//         <div className="mb-4">
//       <label for="other-involvements" class="block text-gray-700 text-sm font-bold mb-2 label-padding">Other Involvements</label>
//       <div className='input'><input id="other-involvements"
//        class="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-500 input-other"
//         placeholder="Enter any other involvements or activities"
//         value={otherInvolvements}
//         onChange={(e)=>setOtherInvolvements(e.target.value)}
//         required
//         ></input></div>
//     </div>
//     <div className='submit'>
//     <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-500 reg-btn" >Register</button>
//     </div>
//   </form>
// </div>
//   )
// }