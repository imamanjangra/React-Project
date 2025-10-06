

function Transactions() {

    return(
        <>
         <ul className="divide-y divide-gray-200">
        <li className="flex justify-between items-center py-3">
          <span>Food</span>
          <span className="text-red-500 font-semibold">- ₹200</span>
        </li>
        <li className="flex justify-between items-center py-3">
          <span>Salary</span>
          <span className="text-green-500 font-semibold">+ ₹5000</span>
        </li>
      </ul>
        </>
    )
}

export default Transactions