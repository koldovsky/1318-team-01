// const advantages = [
//   {
//     id: "1",
//     name: "Expert Staff",
//     image: "../assets/images/chef/waitress.svg",
//     description:
//       "Every product is crafted by skilled bakers with years of experience and a passion for perfection.",
//   },
//   {
//     id: "2",
//     name: "Hand-Baked Goodness",
//     image: "../assets/images/chef/beater.svg",
//     description:
//       "From kneading dough to shaping buns, we craft every item by hand with love and precision.",
//   },
//   {
//     id: "3",
//     name: "Open 24/7, Almost!",
//     image: "../assets/images/chef/open.svg",
//     description:
//       "We know that cravings can hit at any time! We are open from early morning until late in the evening.",
//   },
//   {
//     id: "4",
//     name: "3 Bakeries in NY",
//     image: "../assets/images/chef/shop.svg",
//     description:
//       "We’re proud to serve New Yorkers from our three bakery locations, plus seasonal pop-up shops.",
//   },
// ];

// function renderAdvantages(advantages) {
//   let advantagesHTML = "";
//   for (const advantage of advantages) {
//     advantagesHTML += `
//         <div class="advantages__item">
//             <img class="advantages__icon" src="${advantage.image}" alt="${advantage.name}" width="50"/>
//             <h3 class="advantages__title">${advantage.name}</h3>
//             <div class="advantages__dash">
//             <svg
//                 class="advantages__dash-icon"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="3000"
//                 height="34"
//                 style="width:15%"
//             >
//                 <path
//                 d="M0 17 L3000 17"
//                 style="fill:none;stroke:#9a5e33;stroke-width:4px"
//                 ></path>
//             </svg>
//             </div>
//             <p class="advantages__description">${advantage.description}</p>
//         </div>
//           `;
//   }
//   const advantagesContainer = document.querySelector(".advantages");
//   advantagesContainer.innerHTML = advantagesHTML;
// }
// renderAdvantages(advantages);
