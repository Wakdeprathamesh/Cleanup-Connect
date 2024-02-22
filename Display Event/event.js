// document.addEventListener("DOMContentLoaded", function() {
//     // Initialize Firebase
//     const firebaseConfig = {
//       apiKey: "YOUR_API_KEY",
//       authDomain: "YOUR_AUTH_DOMAIN",
//       projectId: "YOUR_PROJECT_ID",
//       storageBucket: "YOUR_STORAGE_BUCKET",
//       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//       appId: "YOUR_APP_ID",
//       measurementId: "YOUR_MEASUREMENT_ID"
//     };
    
//     firebase.initializeApp(firebaseConfig);
//     const db = firebase.firestore();
  
//     // Get the event ID from the URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const eventId = urlParams.get('id');
  
//     // Reference to the event document
//     const eventRef = db.collection("events").doc(eventId);
  
//     // Get the event details
//     eventRef.get().then((doc) => {
//       if (doc.exists) {
//         const eventData = doc.data();
//         const eventDetails = document.getElementById("eventDetails");
        
//         // Create HTML to display event details
//         const html = `
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">${eventData.title}</h5>
//               <p class="card-text"><strong>Description:</strong> ${eventData.description}</p>
//               <p class="card-text"><strong>Date:</strong> ${eventData.date}</p>
//               <p class="card-text"><strong>Time:</strong> ${eventData.time}</p>
//               <p class="card-text"><strong>Location:</strong> ${eventData.location}</p>
//               <p class="card-text"><strong>Goals and Objectives:</strong> ${eventData.goals}</p>
//               <p class="card-text"><strong>Equipment Needed:</strong> ${eventData.equipment.join(', ')}</p>
//               <p class="card-text"><strong>Special Instructions:</strong> ${eventData.instructions}</p>
//               <p class="card-text"><strong>Open for Collaboration:</strong> ${eventData.collaboration ? 'Yes' : 'No'}</p>
//               <p class="card-text"><strong>Organizer's Email:</strong> ${eventData.organizerEmail}</p>
//             </div>
//           </div>
//         `;
        
//         eventDetails.innerHTML = html;
//       } else {
//         // Doc doesn't exist
//         console.log("No such document!");
//       }
//     }).catch((error) => {
//       console.log("Error getting document:", error);
//     });
//   });
  
