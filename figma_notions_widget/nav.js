document.addEventListener("DOMContentLoaded", () => {









  const cards = document.querySelectorAll(".card");


  
  // Restore previously opened section
  const lastOpenID = localStorage.getItem("openSectionID");
  if (lastOpenID) {
    const match = document.querySelector(`.card[data-id="${lastOpenID}"]`);
    if (match) {
      const content = match.querySelector(".accordion-content");
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }


  
  // Handle toggles
  cards.forEach((card) => {
    const header = card.querySelector(".accordion-header");
    const content = card.querySelector(".accordion-content");
    const id = card.getAttribute("data-id");

    header.addEventListener("click", () => {
      const isOpen = content.classList.contains("open");

      // Close all others
      document.querySelectorAll(".accordion-content").forEach((el) => {
        el.classList.remove("open");
        el.style.maxHeight = null;
      });

      document.querySelectorAll(".card").forEach((c) => {
        if (c !== card) c.classList.remove("opening");
      });

      if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        card.classList.add("opening");
        localStorage.setItem("openSectionID", id);
      } else {
        content.classList.remove("open");
        content.style.maxHeight = null;
        localStorage.removeItem("openSectionID");
      }
    });
  });

  const ytSearchInput = document.getElementById("youtubeSearchInput");
  if (ytSearchInput) {
    ytSearchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const query = this.value.trim();
        if (query) {
          const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
          window.open(url, '_blank');
        }
      }
    });
  }
  
});
