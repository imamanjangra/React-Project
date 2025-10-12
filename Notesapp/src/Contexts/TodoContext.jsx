import { createContext, useContext, useState, useEffect } from "react";

export const TodoContex = createContext();

export const useNotes = () => useContext(TodoContex);

export function NotesProvider({ children }) {
  // Load notes from localStorage initially
  const [Notes, setNotes] = useState(() => {
    const save = localStorage.getItem("notes");
    return save ? JSON.parse(save) : [];
  });

  const addNotes = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev]);
  };

  const deleteNotes = (id) => {
    setNotes((prev) => prev.filter((data) => data.id !== id));
  };

  const EditNotes = (note, id) => {
    setNotes((prevNotes) =>
      prevNotes.map((data) => (data.id === id ? { ...data, ...note } : data))
    );
  };

  // Save notes to localStorage whenever Notes changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(Notes));
  }, [Notes]);

  return (
    <TodoContex.Provider value={{ Notes, addNotes, deleteNotes, EditNotes }}>
      {children}
    </TodoContex.Provider>
  );
}
