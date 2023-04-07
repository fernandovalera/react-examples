import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styles from './Projects.AddWithForm.module.css';

export default function Projects() {
  const [projects, setProjects] = useState<
    {
      name: string;
      description: string;
    }[]
  >([]);

  const handleNewProject = (event: any) => {
    event.preventDefault(); // this line stops the page from refreshing after submit

    const form = event.target;
    const newProject = {
      name: form.name.value,
      description: form.description.value,
    };

    const newProjects = [...projects];
    newProjects.push(newProject);

    setProjects(newProjects);

    event.target.reset();
  };

  const [editingProjectIndex, setEditingProjectIndex] = useState<
    number | undefined
  >();
  const [deletingProjectIndex, setDeletingProjectIndex] = useState<
    number | undefined
  >();

  const handleEditProject = (event: any) => {
    event.preventDefault(); // this line stops the page from refreshing after submit
    if (editingProjectIndex === undefined) {
      return; // should not edit project when editingProjectIndex is undefined
    }

    const form = event.target;
    const changedProject = {
      name: form.name.value,
      description: form.description.value,
    };

    const newProjects = [...projects];

    newProjects.splice(editingProjectIndex, 1, changedProject);

    setProjects(newProjects);

    setEditingProjectIndex(undefined);
    event.target.reset();
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.projectRowsContainer}>
        {projects.map((project, i) => {
          return (
            <div className={styles.projectRow} key={i}>
              <div className="flex-col-8">
                {project.name}: {project.description}
              </div>
              <div className="flex-col-2">
                <button onClick={() => setEditingProjectIndex(i)}>Edit</button>
              </div>
              <div className="flex-col-2">
                <button onClick={() => setDeletingProjectIndex(i)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <form
          onSubmit={editingProjectIndex ? handleEditProject : handleNewProject}
        >
          <h2>Create new Project</h2>
          <div>
            <label>Name:</label>
            <input name="name" required />
          </div>
          <div>
            <label>Description:</label>
            <input name="description" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Modal
        show={deletingProjectIndex !== undefined}
        onHide={() => setDeletingProjectIndex(undefined)}
      >
        <Modal.Header>Alert!</Modal.Header>
        <Modal.Body>
          <p>Some important content!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setDeletingProjectIndex(undefined)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
