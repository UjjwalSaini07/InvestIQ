// import React from "react";
// import CryptoDash from "../components/dashboard/cryptodashboard";

// function Dashboard() {
//   return (
//     <main>
//       <CryptoDash />
//     </main>
//   );
// }

// export default Dashboard;


import react from "react";
import { Button } from "../@/ui/button";

function dashboard() {
  return (
    <div className="text-center mt-20">
      <p>Basic Code For File Initialisation Only</p>
      <Button
        type="submit"
        className="w-auto p-5 mt-5 rounded-full text-white text-sm transition bg-[#06b6d4] hover:bg-[#06b6d4]"
      >
        DashBoard Code
      </Button>
    </div>
  );
}

export default dashboard;
