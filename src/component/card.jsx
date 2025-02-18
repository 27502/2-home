import "./Card.css";

const newsData = [
  {
    id: 1,
    image: "https://s3-alpha-sig.figma.com/img/fe0e/9c6d/c53ad70155193c56192deea27baa84fc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IVBmZbKOKMuJC1WewziK5S8YlKkwvKHMSMc469tT13hyZesp7i5KV9LOann-mbiH~GKDu9H5HeNxJmlSuKxQgc00RVxXwU98Uuv7CvJ3-8AYtyHT72wLojyn5cGVKIlHaPRwEHEyMfD7PTj~qcWHGWnZzUaNzwywwiwy4wyuusCFZJt4gCEbZe2CCtoaYdAOyhwS4cx6eHpQz3sTaZpreUcJuoUnnPm9x6OrSeB8FRzPCj8CH8bF2n7qEAuT-PSw1fVU8SLhLpWcp~I~Ycb821sOrSwEDXq46BTk-B7vmG5EV5laZwAcY~WnrQ0wqzv~ec97mxjPKl0EqOkKhIQqsQ__",
    title: "Breaking News Headline",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    views: "12.5K",
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://s3-alpha-sig.figma.com/img/fe0e/9c6d/c53ad70155193c56192deea27baa84fc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IVBmZbKOKMuJC1WewziK5S8YlKkwvKHMSMc469tT13hyZesp7i5KV9LOann-mbiH~GKDu9H5HeNxJmlSuKxQgc00RVxXwU98Uuv7CvJ3-8AYtyHT72wLojyn5cGVKIlHaPRwEHEyMfD7PTj~qcWHGWnZzUaNzwywwiwy4wyuusCFZJt4gCEbZe2CCtoaYdAOyhwS4cx6eHpQz3sTaZpreUcJuoUnnPm9x6OrSeB8FRzPCj8CH8bF2n7qEAuT-PSw1fVU8SLhLpWcp~I~Ycb821sOrSwEDXq46BTk-B7vmG5EV5laZwAcY~WnrQ0wqzv~ec97mxjPKl0EqOkKhIQqsQ__",
    title: "International Update",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    views: "8.9K",
    rating: 4.2,
  },
  {
    id: 3,
    image: "https://s3-alpha-sig.figma.com/img/fe0e/9c6d/c53ad70155193c56192deea27baa84fc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IVBmZbKOKMuJC1WewziK5S8YlKkwvKHMSMc469tT13hyZesp7i5KV9LOann-mbiH~GKDu9H5HeNxJmlSuKxQgc00RVxXwU98Uuv7CvJ3-8AYtyHT72wLojyn5cGVKIlHaPRwEHEyMfD7PTj~qcWHGWnZzUaNzwywwiwy4wyuusCFZJt4gCEbZe2CCtoaYdAOyhwS4cx6eHpQz3sTaZpreUcJuoUnnPm9x6OrSeB8FRzPCj8CH8bF2n7qEAuT-PSw1fVU8SLhLpWcp~I~Ycb821sOrSwEDXq46BTk-B7vmG5EV5laZwAcY~WnrQ0wqzv~ec97mxjPKl0EqOkKhIQqsQ__",
    title: "Tech Innovations",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    views: "15.3K",
    rating: 4.7,
  },
  {
    id: 4,
    image: "https://s3-alpha-sig.figma.com/img/fe0e/9c6d/c53ad70155193c56192deea27baa84fc?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IVBmZbKOKMuJC1WewziK5S8YlKkwvKHMSMc469tT13hyZesp7i5KV9LOann-mbiH~GKDu9H5HeNxJmlSuKxQgc00RVxXwU98Uuv7CvJ3-8AYtyHT72wLojyn5cGVKIlHaPRwEHEyMfD7PTj~qcWHGWnZzUaNzwywwiwy4wyuusCFZJt4gCEbZe2CCtoaYdAOyhwS4cx6eHpQz3sTaZpreUcJuoUnnPm9x6OrSeB8FRzPCj8CH8bF2n7qEAuT-PSw1fVU8SLhLpWcp~I~Ycb821sOrSwEDXq46BTk-B7vmG5EV5laZwAcY~WnrQ0wqzv~ec97mxjPKl0EqOkKhIQqsQ__",
    title: "Sports Highlights",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    views: "10.2K",
    rating: 4.3,
  }
];

const NewsCard = () => {
  return (
    <div className="news-container">
      {newsData.map((news) => (
        <div className="news-card" key={news.id}>
          <img src={news.image} alt="news" />
          <div className="news-info">
            <h1>{news.title}</h1>
            <p>{news.description}</p>
            <div className="news-meta">
              <span>👁️ {news.views} Views</span>
              <span>⭐ {news.rating} Rating</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
