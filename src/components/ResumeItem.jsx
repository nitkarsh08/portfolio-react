import parse from "html-react-parser";

const Resume = ({ icon, year, title, desc }) => {
  return (
    <div className="resume-item">
      <div className="resume-icon">{icon}</div>

      <span className="resume-data">{year}</span>
      <h3 className="resume-subtitle">{parse(title)}</h3>
      <p className="resume-description">{desc}</p>
    </div>
  );
};
export default Resume;
