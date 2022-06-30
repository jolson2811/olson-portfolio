import React, { useEffect, useState } from "react";

function Projects() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jolson2811/starred?per_page=6")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  });

  const [repos] = useState([
    {
      name: "olson-portfolio",
      category: "projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "budget-tracker",
      category: "projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "urban-learning",
      category: "projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "j.olson-portolio",
      category: "projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "dnd character library",
      category: "projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  const currentPhotos = repos.filter((repos) => repos.category === category);

  return (
    <section id="work" class="work-cont">
      <h2>Work</h2>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
