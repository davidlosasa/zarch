const PROJECTS = {
  quzhou: {
    title: "Quzhou Sports Park",
    location: "Quzhou, China",
    type: "Sports Infrastructure",
    years: "2018-2026",
    body: [
      "A civic landscape of courts, pools and public paths, organised around a patterned concrete envelope that filters light and frames the sky.",
      "The project is delivered in phases so the park can open while later venues continue. Structure, cladding and public rooms share one geometric language."
    ],
    img1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
  },
  atrium: {
    title: "Glass Atrium Court",
    location: "Paris, France",
    type: "Cultural",
    years: "2019-2024",
    body: [
      "A curved inner court gathers galleries around a single volume of daylight. The glass skin records the sky and the movement of visitors below.",
      "Circulation is kept to the perimeter so the centre remains a public room rather than a leftover void."
    ],
    img1: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
  },
  tower: {
    title: "Harbor Tower",
    location: "New York, USA",
    type: "Mixed Use",
    years: "2016-2023",
    body: [
      "A slender glass tower on the waterfront, with a deep facade that shades offices by day and reads as a lantern after dusk.",
      "The base reconnects the street to the promenade with a double-height lobby and a public stair."
    ],
    img1: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80"
  },
  lane: {
    title: "Urban Lane",
    location: "Lefkosa, Cyprus",
    type: "Shop Drawing / Urban",
    years: "2021-2025",
    body: [
      "A narrow plot between existing walls becomes a vertical street of apartments, workshops and planted terraces.",
      "Shop drawings fix every junction so the masonry, steel and glass can be built without losing the original section."
    ],
    img1: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80"
  },
  facet: {
    title: "Facet Tower",
    location: "Dubai, UAE",
    type: "Architecture",
    years: "2018-2026",
    body: [
      "Folded glass planes catch the desert light and break the scale of a high-rise into a sequence of crystals.",
      "The corners are occupiable rooms, not leftover structure — each facet holds a terrace or a meeting space."
    ],
    img1: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
  },
  arc: {
    title: "Arc Pavilion",
    location: "Kinshasa, DRC",
    type: "Visualization / Civic",
    years: "2022-2027",
    body: [
      "A long glazed arc shades an outdoor hall for gatherings, markets and performances along the river.",
      "Visualizations were used with the city to test the silhouette before construction drawings began."
    ],
    img1: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  },
  brick: {
    title: "Brick Loft House",
    location: "Lubumbashi, DRC",
    type: "Interior Design",
    years: "2020-2023",
    body: [
      "An existing brick warehouse is opened with a new stair and a sequence of rooms that keep the industrial grain of the walls.",
      "Furniture, light and acoustic linings are designed as one interior, so the house can be both quiet and generous."
    ],
    img1: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80",
    img2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  const filters = document.querySelectorAll(".filter");
  const tiles = document.querySelectorAll(".gallery .tile");
  const projectModal = document.getElementById("project-modal");
  const startModal = document.getElementById("start-modal");
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.replace("#", "");

  const openModal = (modal) => {
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add("modal-open");
  };

  const closeModals = () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.hidden = true;
    });
    document.body.classList.remove("modal-open");
  };

  const fillProject = (id) => {
    const data = PROJECTS[id];
    if (!data || !projectModal) return;
    projectModal.querySelector("#project-title").textContent = data.title;
    projectModal.querySelector("[data-project-kicker]").textContent = data.title;
    projectModal.querySelector("[data-project-location]").textContent = data.location;
    projectModal.querySelector("[data-project-type]").textContent = data.type;
    projectModal.querySelector("[data-project-years]").textContent = data.years;
    projectModal.querySelector("[data-project-body]").innerHTML = data.body
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
    const img1 = projectModal.querySelector("[data-project-img-1]");
    const img2 = projectModal.querySelector("[data-project-img-2]");
    img1.src = data.img1;
    img1.alt = data.title;
    img2.src = data.img2;
    img2.alt = `${data.title} detail`;
    openModal(projectModal);
  };

  const applyFilter = (name) => {
    tiles.forEach((tile) => {
      tile.classList.toggle("is-hidden", name !== "all" && tile.dataset.category !== name);
    });
    filters.forEach((filter) => {
      filter.classList.toggle("is-active", filter.dataset.filter === name);
    });
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (filters.length) {
    const initial = params.get("category");
    const valid = [...filters].some((filter) => filter.dataset.filter === initial);
    applyFilter(valid ? initial : "all");
    filters.forEach((filter) => {
      filter.addEventListener("click", () => applyFilter(filter.dataset.filter));
    });
  }

  tiles.forEach((tile) => {
    tile.addEventListener("click", () => fillProject(tile.dataset.project));
  });

  if (hash && PROJECTS[hash]) fillProject(hash);

  document.querySelectorAll("[data-open-start]").forEach((button) => {
    button.addEventListener("click", () => openModal(startModal));
  });

  document.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeModals);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModals();
  });

  document.querySelectorAll(".newsletter").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      button.textContent = "THANK YOU";
      form.reset();
    });
  });

  document.querySelectorAll(".accordion button").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.closest(".accordion").querySelectorAll("button").forEach((item) => {
        item.setAttribute("aria-expanded", "false");
      });
      button.setAttribute("aria-expanded", String(!expanded));
    });
  });
});
