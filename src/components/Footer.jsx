import { FaWhatsapp , FaCopyright } from "react-icons/fa6";

function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-10 p-4 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-amber-100"
          : "bg-gradient-to-b from-orange-300 to-orange-300 text-amber-200"
      }`}
    >
      
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
          {/* الحقوق */}
          <div  className=" text-center md:text-left mb-4 md:mb-0 flex items-center text-white">
           
            <p className="flex items-center gap-1 text-white text-md">
               < FaCopyright  className={`${darkMode ? "text-blue-400" : "text-amber-800"}`}/> {new Date().getFullYear()} <span className={`${darkMode ? "text-blue-400" : "text-amber-800"} font-bold` }>  مدير المهام </span> </p>    جميع الحقوق محفوظة لدى    
         
          </div>

          {/* الروابط */}
          <div className="flex items-center justify-center gap-2 text-white ">
            <a
              href="https://api.whatsapp.com/send/?phone=01008790584&text&type=phone_number&app_absent=0"
              target="_blank"
            >
             
              <FaWhatsapp className={`${darkMode ? "text-blue-400" : "text-amber-800"} font-bold text-3xl transition-all duration-[.5s] hover:scale-[1.150] hover:-translate-x-2 hover:rotate-360 hover:text-green-600`}/>
            </a>
          للتواصل مع المالك
          </div>

      </div>
    </footer>
  );
}

export default Footer;
