function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white mt-10 p-8 rounded-2xl shadow-md text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">About Expense Tracker</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        This Expense Tracker is a simple and intuitive web application to help you manage your personal finances.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Features:</h3>
      <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
        <li>Track your daily <strong>Income</strong> and <strong>Expenses</strong>.</li>
        <li>View a <strong>summary</strong> of total income, total expense, and balance.</li>
        <li>Maintain a list of <strong>recent transactions</strong> with title, category, date, and amount.</li>
        <li>Edit or delete any transaction easily.</li>
        <li>Organize expenses into categories like <strong>Food, Transport, Shopping, Others</strong>.</li>
        <li>Responsive and clean interface built with <strong>React</strong> and <strong>Tailwind CSS</strong>.</li>
      </ul>

      <p className="text-gray-700 text-lg mt-6">
        This app helps you stay on top of your budget and make informed decisions about your spending.
      </p>
    </div>
  );
}

export default About;
