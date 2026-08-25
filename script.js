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
    img2: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80"
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

const COST_CONTENT = {
  1: {
    title: 'Architecture and interior space design',
    text: 'We prepare the concept and early spatial layout, including zoning, circulation, volumes, and daylight studies. The first stage turns the brief into a clear architectural direction.'
  },
  2: {
    title: 'Schematic design',
    text: 'We develop the primary massing and the main design decisions for the project, confirming the technical direction and the overall visual language before detailed development.'
  },
  3: {
    title: 'Technical documentation',
    text: 'This stage includes key construction drawings, material references, and coordinated dimensioned plans so the design can be reviewed and refined for implementation.'
  },
  4: {
    title: 'Project delivery',
    text: 'We support the final review, pricing, procurement and on-site coordination to keep the construction process aligned with the approved design and quality expectations.'
  },
  5: {
    title: 'Interior concept development',
    text: 'We refine the key zones, surfaces, lighting strategy and furniture layout to shape a coherent interior experience that matches the architecture.'
  },
  6: {
    title: 'Construction support',
    text: 'The final stage keeps the design intent intact through site checks, clarifications, and supplier coordination, so the built result remains faithful to the project vision.'
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
  const stepButtons = document.querySelectorAll(".cost-step");
  const costTitle = document.getElementById("cost-step-title");
  const costText = document.getElementById("cost-step-text");
  const costStepNumber = document.getElementById("cost-step-number");
  const costBriefTitle = document.getElementById("cost-brief-title");
  const costBriefText = document.getElementById("cost-brief-text");
  let previousScrollY = 0;
  let previousFocus = null;

  const openModal = (modal) => {
    if (!modal) return;
    if (!document.body.classList.contains("modal-open")) {
      previousScrollY = window.scrollY;
      previousFocus = document.activeElement;
      document.body.style.top = `-${previousScrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }
    modal.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => modal.querySelector(".text-link")?.focus());
  };

  const closeModals = () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.hidden = true;
    });
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("modal-open");
    window.scrollTo(0, previousScrollY);
    previousFocus?.focus();
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
    const gallery = projectModal.querySelector(".project-gallery");
    const images = data.images || [data.img1, data.img2].filter(Boolean);
    gallery.replaceChildren();
    images.filter(Boolean).forEach((src, index) => {
      const image = document.createElement("img");
      image.src = src;
      image.alt = index === 0 ? data.title : `${data.title} detail ${index + 1}`;
      image.loading = index === 0 ? "eager" : "lazy";
      gallery.append(image);
    });
    gallery.hidden = images.filter(Boolean).length === 0;
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

  const setCostStep = (step) => {
    if (!costTitle || !costText) return;
    const content = COST_CONTENT[step] || COST_CONTENT[1];
    const dynamicSections = [
      costTitle.closest(".cost-panel-copy"),
      costBriefTitle?.closest(".brief-column")
    ].filter(Boolean);
    dynamicSections.forEach((section) => section.classList.add("is-changing"));
    costTitle.textContent = content.title;
    costText.textContent = content.text;
    if (costBriefTitle) {
      costBriefTitle.textContent = content.title.toUpperCase();
    }
    if (costBriefText) {
      costBriefText.textContent = content.text;
    }
    if (costStepNumber) {
      costStepNumber.textContent = step;
    }
    stepButtons.forEach((button) => {
      const active = Number(button.dataset.step) === Number(step);
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    requestAnimationFrame(() => {
      dynamicSections.forEach((section) => section.classList.remove("is-changing"));
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

  if (stepButtons.length) {
    const initialStep = document.querySelector(".cost-step.is-active")?.dataset.step || 1;
    setCostStep(initialStep);
    stepButtons.forEach((button) => {
      button.addEventListener("click", () => setCostStep(button.dataset.step));
    });
  }

  if (hash && PROJECTS[hash]) fillProject(hash);

  document.querySelectorAll("[data-open-start]").forEach((button) => {
    button.addEventListener("click", () => openModal(startModal));
  });

  document.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeModals);
  });

  document.addEventListener("keydown", (event) => {
    const openModalElement = document.querySelector(".modal:not([hidden])");
    if (event.key === "Escape") {
      closeModals();
      return;
    }
    if (event.key !== "Tab" || !openModalElement) return;
    const focusable = [...openModalElement.querySelectorAll("button, a, input, [tabindex]:not([tabindex='-1'])")]
      .filter((element) => !element.hasAttribute("disabled"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll(".newsletter").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      if (button) {
        button.textContent = "THANK YOU";
      }
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
