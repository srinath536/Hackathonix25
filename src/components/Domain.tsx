import "./Domain.css"; // Import the updated CSS

const domains = [
  { title: "AI", description: "Artificial Intelligence (AI) is about creating systems that can perform tasks that typically require human intelligence, such as image recognition and decision-making." },
  { title: "ML", description: "Machine Learning (ML) is a subset of AI focused on building algorithms and models that allow computers to learn and make predictions from data." },
  { title: "Full Stack", description: "Full Stack development involves working on both the front-end and back-end of web applications, using technologies like JavaScript, HTML, CSS, Node.js, and more." },
  { title: "UI/UX", description: "UI/UX design focuses on creating user-friendly interfaces (UI) and optimizing the overall user experience (UX) of applications and websites." }
];

const Domain = () => {
  return (
    <div className="container">
      <h2 className="heading">Domains</h2>
      <div className="card-container">
        {domains.map((domain, index) => (
          <div key={index} className="card">
            <div className="card-front">
              <p className="card-title">{domain.title}</p>
            </div>
            <div className="card-back">
              <p className="card-description">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domain;
