import { useState } from "react";

const BloodBankSearch = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [results, setResults] = useState([]);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];
  
  const cities = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Tirupati"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
    "Haryana": ["Chandigarh", "Faridabad", "Gurgaon"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangalore"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
    "Meghalaya": ["Shillong", "Tura", "Jowai"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
    "Sikkim": ["Gangtok", "Namchi", "Gyalshing"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
    "Delhi": ["New Delhi", "South Delhi", "East Delhi"]
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleSearch = async () => {
    try {
      if (!state || !city || !bloodGroup) {
        alert("Please select all fields!");
        return;
      }
  
      const encodedBloodGroup = encodeURIComponent(bloodGroup); // Fix "+" issue
      const response = await fetch(
        `http://localhost:5000/api/bloodbanks?state=${state}&city=${city}&bloodGroup=${encodedBloodGroup}`
      );
  
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  

  return (
    <div className="p-6 bg-pink-100 min-h-screen">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        🔎 Search Blood Bank Availability
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-3 border-2 border-red-400 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 border-2 border-red-400 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={!state}
        >
          <option value="">Select City</option>
          {state &&
            cities[state].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>

        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="p-3 border-2 border-red-400 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select Blood Group</option>
          {bloodGroups.map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-md transition-all duration-300"
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto border-collapse border border-red-400 shadow-lg">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border border-red-400 p-3">S.No</th>
              <th className="border border-red-400 p-3">Blood Bank</th>
              
              <th className="border border-red-400 p-3">Availability</th>
              <th className="border border-red-400 p-3">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((item, index) => (
                <tr key={index} className="text-center bg-white hover:bg-pink-200 transition">
                  <td className="border border-red-300 p-3">{index + 1}</td>
                  <td className="border border-red-300 p-3 font-semibold text-red-700">
                    {item.name}
                  </td>
                  
                  <td className="border border-red-300 p-3 font-bold text-red-600">
                    {item.availability}
                  </td>
                  <td className="border border-red-300 p-3">{item.lastUpdated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 font-semibold text-red-600">
                  No results found 😔
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodBankSearch;
