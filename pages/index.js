// import Head from "next/head";
// import { Component } from "react";
// import { attributes, react as HomeContent } from "../content/home.md";
// import { Heading } from "@chakra-ui/react";

// export default class Home extends Component {
//   render() {
//     let { title, cats } = attributes;
//     return (
//       <>
//         <Head>
//           <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
//         </Head>
//         <article>
//           <Heading>{title}</Heading>
//           <HomeContent />
//           <ul>
//             {cats.map((cat, k) => (
//               <li key={k}>
//                 <h2>{cat.name}</h2>
//                 <p>{cat.description}</p>
//               </li>
//             ))}
//           </ul>
//         </article>
//       </>
//     );
//   }
// }

import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
