const blogs = [
  {
    title: "Cotton Jersie Hoody",
    date: "19/07/2022",
    image: "./images/blog/b1.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
  {
    title: "How to style a Quiff ?",
    date: "20/07/2022",
    image: "./images/blog/b2.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
  {
    title: "Must have skater items",
    date: "20/07/2022",
    image: "./images/blog/b3.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
  {
    title: "Fitness inspired collections",
    date: "21/07/2022",
    image: "./images/blog/b4.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
  {
    title: "Women trendy clothing",
    date: "22/07/2022",
    image: "./images/blog/b5.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
  {
    title: "Nature & Clothing",
    date: "23/07/2022",
    image: "./images/blog/b6.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
  {
    title: "How to match dresses ?",
    date: "24/07/2022",
    image: "./images/blog/b7.jpg",
    shortText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores vero expedita sit explicabo ad beatae atque maiores iste itaque?",
    longText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi commodi suscipit inventore eos quidem. Non, nobis at ducimus repellendus, quo vero corporis cumque earum iure soluta atque harum beatae aliquid molestiae. Vel voluptatum, nesciunt expedita iure dignissimos corporis. Deleniti pariatur vitae, explicabo temporibus delectus ea dolorum quae quos accusamus exercitationem.",
  },
];

let loadMoreCount = 0;

const loadBlogs = () => {
  const blogDiv = document.getElementById("blog");
  for (let i = 0; i < 4 + loadMoreCount && blogs.length; i++) {
    let { title, date, image, shortText, longText, readMore } = blogs[i];

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("blog-box");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("blog-image");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", "blog");
    imageDiv.appendChild(img);

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("blog-details");
    const h2El = document.createElement("h2");
    h2El.textContent = title;

    const h4El = document.createElement("h4");
    h4El.textContent = date;

    const pShortTextEl = document.createElement("p");
    pShortTextEl.classList.add("short-text");
    pShortTextEl.textContent = shortText;

    const pLongTextEl = document.createElement("p");
    pLongTextEl.classList.add("long-text");
    pLongTextEl.textContent = longText;

    const aEl = document.createElement("a");
    aEl.setAttribute("href", "#");
    aEl.setAttribute("data-more", 0);
    aEl.textContent = readMore ? "Read less" : "Read more";

    aEl.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(aEl.getAttribute("data-more"));
      if (aEl.getAttribute("data-more") == 0) {
        aEl.setAttribute("data-more", 1);
        pLongTextEl.style.display = "block";
        pShortTextEl.style.display = "none";
        aEl.textContent = "Read less";
      } else if (aEl.getAttribute("data-more") == 1) {
        aEl.setAttribute("data-more", 0);
        pLongTextEl.style.display = "none";
        pShortTextEl.style.display = "block";
        aEl.textContent = "Read more";
      }
    });

    detailsDiv.appendChild(h2El);
    detailsDiv.appendChild(h4El);
    detailsDiv.appendChild(pShortTextEl);
    detailsDiv.appendChild(pLongTextEl);
    detailsDiv.appendChild(aEl);

    mainDiv.appendChild(imageDiv);
    mainDiv.appendChild(detailsDiv);

    blogDiv.appendChild(mainDiv);
  }
};

loadBlogs();

const loadMoreBtn = document.querySelector(".loadmore-btn");
loadMoreBtn.addEventListener("click", () => {
  loadMoreCount += 1;

  const blogDiv = document.getElementById("blog");
  blogDiv.innerHTML = "";

  if (loadMoreCount + 4 === blogs.length) {
    loadMoreBtn.style.display = "none";
  }
  loadBlogs();
});
