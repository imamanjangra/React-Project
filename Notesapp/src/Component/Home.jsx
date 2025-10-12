import { Link } from "react-router-dom";

function Home() {
  const features = [
  {
    title: "Add Notes",
    desc: "Create new notes with text easily.",
    svg: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-16 h-16 mx-auto mb-4 text-blue-500"
        viewBox="0 0 16 16"
        key="1"
      >
        <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
      </svg>
    ],
    link: "/create",
    color: "bg-blue-100",
  },
  {
    title: "View Notes",
    desc: "View all your saved notes anytime.",
    svg: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-16 h-16 mx-auto mb-4 text-green-500"
        viewBox="0 0 16 16"
        key="2"
      >
        <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
      </svg>
    ],
    link: "/allNotes",
    color: "bg-green-100",
  },
  {
    title: "About App",
    desc: "Learn more about this amazing Notes App.",
    svg: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-16 h-16 mx-auto mb-4 text-yellow-500"
        viewBox="0 0 16 16"
        key="3"
      >
        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
        <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
      </svg>
    ],
    link: "/about",
    color: "bg-yellow-100",
  },
];


  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">
          Welcome to NotesApp!
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Manage your notes professionally with ease. Navigate through the app using the features below.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center`}
          >
          <div>
            {feature.svg}
          </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700 mb-4">{feature.desc}</p>
            <Link
              to={feature.link}
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Go
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
