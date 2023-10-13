import styles from "../css/Dashboard.module.css";
import Navbar from "./Navbar";
const Dashboard = () => {
  const clubs = [
    {
      name: "Valley Consulting Group",
      logoURL: "/valley-consulting.png",
      tags: [{ type: "Tech" }, { type: "Consulting" }],
      numMembers: 30,
      applicationLink: "https://vcg.berkeley.edu/",
    },
    {
      name: "Valley Consulting Group",
      logoURL: "/valley-consulting.png",
      tags: [{ type: "Tech" }, { type: "Consulting" }],
      numMembers: 30,
      applicationLink: "https://vcg.berkeley.edu/",
    },
    {
      name: "Valley Consulting Group",
      logoURL: "/valley-consulting.png",
      tags: [{ type: "Tech" }, { type: "Consulting" }],
      numMembers: 30,
      applicationLink: "https://vcg.berkeley.edu/",
    },
    {
      name: "Valley Consulting Group",
      logoURL: "/valley-consulting.png",
      tags: [{ type: "Tech" }, { type: "Consulting" }],
      numMembers: 30,
      applicationLink: "https://vcg.berkeley.edu/",
    },
    {
      name: "Valley Consulting Group",
      logoURL: "/valley-consulting.png",
      tags: [{ type: "Tech" }, { type: "Consulting" }],
      numMembers: 30,
      applicationLink: "https://vcg.berkeley.edu/",
    },
    {
      name: "Valley Consulting Group",
      logoURL: "/valley-consulting.png",
      tags: [{ type: "Tech" }, { type: "Consulting" }],
      numMembers: 30,
      applicationLink: "https://vcg.berkeley.edu/",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="/berkeley-logo.svg" alt="UC Berkeley Logo" />
        </div>
        <div>
          <h1 className={styles.title}>Clubs</h1>
          <div className={styles.clubs}>
            {clubs.map((club) => (
              <div className={styles.club}>
                <img
                  src={club.logoURL}
                  alt=""
                  className={styles.clubLogo}
                ></img>
                <div className={styles.clubContent}>
                  <h2>{club.name}</h2>
                  <div className={styles.clubTags}>
                    {club.tags.map((tag) => (
                      <span className={styles.clubTag}>{tag.type}</span>
                    ))}
                  </div>

                  <p>Number of Members: {club.numMembers}</p>
                  <div>
                    <a href={club.applicationLink} className={styles.appButton}>
                      Application Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
