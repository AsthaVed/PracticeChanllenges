// how to use style tag in react
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Styling with React</h1>
      <style>
        {`
          /* Define CSS styles */
          .myClass {
            color: red;
            font-size: 24px;
          }
        `}
      </style>
      <p className="myClass">Styled paragraph</p>
    </div>
  );
}

export default MyComponent;


// use style attribute
// import React from 'react';

// function MyComponent() {
//   // Define styles as a JavaScript object
//   const paragraphStyle = {
//     color: 'red',
//     fontSize: '20px',
//     fontWeight: 'bold',
//     // You can use camelCase for property names like 'backgroundColor'
//     backgroundColor: 'yellow'
//   };

//   return (
//     <div>
//       <h1>Inline Styles in React</h1>
//       {/* Apply inline styles using the style attribute */}
//       <p style={paragraphStyle}>Styled paragraph</p>
//     </div>
//   );
// }

// export default MyComponent;


// another way
// import React from 'react';

// function MyComponent() {
//   return (
//     <div>
//       <h1>Inline Styles in React</h1>
//       {/* Apply inline styles directly */}
//       <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold', backgroundColor: 'yellow' }}>
//         Styled paragraph
//       </p>
//     </div>
//   );
// }

// export default MyComponent;

