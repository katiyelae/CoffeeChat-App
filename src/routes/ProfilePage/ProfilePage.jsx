import "./ProfilePage.scss";
import Navbar from "../../components/Navbar/Navbar";
const ProfilePage = () => {
  return (
    <div className="profile__content">
      <img src="#" alt="Profile page" />
      <h1 className="profile__name">Richard</h1>
      <p className="profile__reviews">25 Reviews</p>
      <p className="profile__location">Seattle, WA, USA</p>

      <div className="profile__card">
        <div className="profile__card--container">
          <img className="profile__icon" src="#" alt="work icon" />
          <p className="profile__role">Software Engineer</p>
        </div>
        <div className="profile__card--container">
          <img className="profile__icon" src="#" alt="work icon" />
          <p className="profile__seniority">Senior Level - 4 years</p>
        </div>
        <div className="profile__card--container">
          <img className="profile__icon" src="#" alt="work icon" />
          <p className="prolfile__sessions">30 Mentor Sessions</p>
        </div>
        <div className="profile__card--container">
          <img className="profile__icon" src="#" alt="work icon" />
          <a className="profile__linkedin" href="www.linkedin.com">
            LinkedIn.com/RichYin
          </a>
        </div>
      </div>

      <p className="profile__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        natus, aut laboriosam porro maxime deserunt corrupti voluptatibus
        adipisci veniam autem ad, officiis animi. Velit atque aliquid quo ex
        harum rerum sit dolor sequi voluptas. Voluptate repellat, expedita vitae
        voluptatum distinctio cupiditate sit totam molestias esse facilis
        molestiae at incidunt quam delectus eaque optio tempore! Suscipit
        aspernatur sunt eaque excepturi modi similique nihil voluptatem in.
        Deserunt, nobis pariatur officiis error, velit laborum molestias
        quibusdam blanditiis suscipit, molestiae ipsa quos maiores reiciendis?
        Saepe rerum excepturi ipsum neque. Libero nemo maiores illum accusantium
        vel repellendus, iusto itaque quo modi repellat aliquid pariatur autem
        tempore totam voluptate?
      </p>

      <div className="profile__tech--container">
        <div className="profile__tech--row">
          <p className="profile__tech">Java</p>
          <p className="profile__tech">C++</p>
          <p className="profile__tech">HTML5</p>
        </div>

        <div className="profile__tech--row">
          <p className="profile__tech">Python</p>
          <p className="profile__tech">React</p>
          <p className="profile__tech">CSS</p>
        </div>
      </div>

      {/* TODO: Link to calendar scheduling */}
      <button className="profile__button">Book</button>
      <Navbar />
    </div>
  );
};

export default ProfilePage;
