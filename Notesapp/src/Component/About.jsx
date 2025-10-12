function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white rounded-3xl shadow-lg">
      
      <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">
        About NotesApp
      </h2>
      
      <p className="text-gray-800 text-lg mb-4 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-500">NotesApp</span> — a simple and modern note-taking application built using <span className="font-semibold">React</span> and <span className="font-semibold">React Router</span>.
      </p>

      <p className="text-gray-800 text-lg mb-4 leading-relaxed">
        This app helps you manage your notes efficiently with features like:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-medium">Add Notes:</span> Create new notes quickly using a simple input form.</li>
        <li><span className="font-medium">View Notes:</span> Access all your saved notes in a clean layout.</li>
        <li><span className="font-medium">Edit Notes:</span> Update note content directly within the app.</li>
        <li><span className="font-medium">Delete Notes:</span> Remove notes you no longer need with one click.</li>
        <li><span className="font-medium">Note Details:</span> Open any note to view and modify its full content.</li>
        <li><span className="font-medium">Persistent Storage:</span> Notes are saved using <span className="font-semibold">LocalStorage</span> so your data remains after page reloads.</li>
      </ul>

      <p className="text-gray-800 text-lg leading-relaxed">
        The app is powered by <span className="font-semibold text-blue-500">React Context API</span> for efficient state management and styled with <span className="font-semibold text-blue-500">Tailwind CSS</span> for a clean and responsive design.
      </p>

      <p className="text-gray-600 text-sm mt-6 text-center">
        Developed by <span className="font-medium text-blue-500">Aman Jangra</span> using React 18, React Router v6, Context API, LocalStorage, and Tailwind CSS.
      </p>
    </div>
  );
}

export default About;
