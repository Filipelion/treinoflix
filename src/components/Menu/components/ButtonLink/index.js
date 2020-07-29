import React from 'react';


 function ButtonLink(props) {
     //props => {className: "Classe", href: "Link"}
     console.log(props)


     return (
         <a href={props.href} className={props.className}>
             {props.children}
         </a>
     );
 }

 export default ButtonLink; // Para visualizar o componente externamente