const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "A detailed description of Project 1.",
      link: "https://github.com/yourusername/project1",
    },
    {
      name: "Project 2",
      description: "A detailed description of Project 2.",
      link: "https://github.com/yourusername/project2",
    },
    {
      name: "Project 3",
      description: "A detailed description of Project 3.",
      link: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl">My Projects</h2>
      <div className="mt-4 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-2 inline-block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
