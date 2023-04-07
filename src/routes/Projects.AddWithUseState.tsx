import { useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState<
    {
      name: string;
      description: string;
    }[]
  >([]);

  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const clearForm = () => {
    setNewName('');
    setNewDescription('');
  };

  const handleNewProject = (event: any) => {
    event.preventDefault(); // this line stops the page from refreshing after submit

    const newProject = {
      name: newName,
      description: newDescription,
    };

    const newProjects = [...projects];
    newProjects.push(newProject);

    setProjects(newProjects);

    clearForm();
  };

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project, i) => {
          return (
            <div key={i}>
              {project.name}: {project.description}
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={handleNewProject}>
          <h2>Create new Project</h2>
          <div>
            <label>Name:</label>
            <input
              name="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              name="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
