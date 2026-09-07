      const cardContainer = document.getElementById("idCardContainer");
      const card = document.getElementById("idCard");

      let isFlipped = false;

      /* 3D cursor movement */
      cardContainer.addEventListener("mousemove", (event) => {
        if (isFlipped) return;

        const rect = cardContainer.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

        card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);

        card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
      });

      /* Reset when cursor leaves */
      cardContainer.addEventListener("mouseleave", () => {
        if (isFlipped) return;

        card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
    `;
      });

      /* Flip when clicked */
      cardContainer.addEventListener("click", () => {
        isFlipped = !isFlipped;

        if (isFlipped) {
          card.classList.add("flipped");
        } else {
          card.classList.remove("flipped");
        }
      });