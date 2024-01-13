import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root{
      &, &.light-mode{
         /* Background */
         --color-bg-primary: rgb(251, 251, 254);
         --color-bg-secondary: rgb(246, 244, 252);
         
         /* Button */
         --color-btn-background: rgb(78, 42, 195);
         --color-btn-inner: rgb(251, 251, 254);

         /* Underline */
         --color-underline: rgb(0, 199, 207);

         /* Text */
         --color-text-primary: rgb(27, 27, 27);
         --color-text-secondary: rgb(70, 134, 244);
      }

   }
   *,
   *::before,
   *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      
      /* Creating animations for dark mode */
      transition: background-color 0.3s, border 0.3s;
   }   
   html {
      scroll-behavior: smooth;
      position: relative;
   }

   body {
      color: var(--color-text);
      background-color: var(--color-bg-primary);
      font-family: 'Raleway', sans-serif;
      position: relative;
   }

   a {
      text-decoration:none;
   }

   @keyframes animateHeading {
      0% {
         transform: rotate(0);
      }

      20% {
         transform: rotate(-1deg);
      }

      40% {
         transform: rotate(2deg);
      }

      50% {
         transform: rotate(3deg);
      }

      60% {
         transform: rotate(2deg);
      }

      80% {
         transform: rotate(-1deg);
      }

      100% {
         transform: rotate(0);
      }
   }
`;

export default GlobalStyles;
