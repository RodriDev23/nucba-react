
const Footer = () => {
     return (
       <footer className="bg-gray-800 text-white py-8 w-full mt-10">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
           <div className="mb-4 md:mb-0">
             <h3 className="text-2xl font-bold">Sneaker Fantasy</h3>
             <p className="text-sm">Find your perfect pair of sneakers!</p>
           </div>
           <div className="flex items-center">
             <ul className="flex space-x-4">
               <li><a href="#" className="hover:text-gray-300">Home</a></li>
               <li><a href="#" className="hover:text-gray-300">Products</a></li>
               <li><a href="#" className="hover:text-gray-300">Sell Your Sneaker</a></li>
             </ul>
           </div>
         </div>
       </footer>
     );
   };
   
   export default Footer;
   