/* ~~~~~ Navigation bar ~~~~~~ */

export default function Navbar() {
  return (
    <div>
      {/* ~~~~~ navbar  backgroundcolor ,textcolor,length ~~~~~~ */}
      <nav className="h-16 bg-cyan-900 text-white flex items-center justify-between px-4">
        {/* ~~~~~ logo  color,fontstyle,textcolor and  hover effect ~~~~~ */}
        <span className="text-red-500 font-bold hover:text-yellow-500"> Kristina</span>
          
        <div className=" flex justify-center">
          <ul className="flex space-x-4">

           {/* ~~~~~ list items with hover effect ~~~~~*/}
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">About</li>
            <li className="hover:text-blue-500">Profile</li>
            <li className="hover:text-blue-500">Contact</li>
          </ul>
        </div>
        {/* ~~~~~~  Signin button with specific background and text color ~~~~~~ */}
        <button 
         type="button"
        className="bg-red-500 text-white hover:text-yellow-500 py-1 px-1 rounded ">Sign in</button>
      </nav>
    </div>
  );
}
