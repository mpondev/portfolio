import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="montaña"
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About me</h1>
        <p className="about-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          imperdiet aliquam dictum. Morbi aliquet maximus dignissim. Cras mollis
          porttitor neque vel condimentum. Morbi vitae posuere magna. Cras eget
          mi augue. Morbi mauris turpis, porta id enim a, mattis eleifend ex.
        </p>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          imperdiet aliquam dictum. Morbi aliquet maximus dignissim. Cras mollis
          porttitor neque vel condimentum. Morbi vitae posuere magna. Cras eget
          mi augue. Morbi mauris turpis, porta id enim a, mattis eleifend ex.
          Nunc scelerisque nulla neque, sed dapibus arcu vehicula eu. Fusce
          feugiat venenatis sapien, eu mattis nunc sodales id. Nullam lobortis
          pretium arcu. Nullam ac urna malesuada, rutrum nisi eget, finibus leo.
          Proin ornare elementum ligula, sed malesuada lacus vestibulum
          imperdiet. Nunc non metus maximus, tempus ipsum at, feugiat turpis.
          Suspendisse porttitor erat elementum luctus lacinia. Sed consectetur
          aliquet magna. Suspendisse id diam dapibus, luctus metus in, semper
          augue. Fusce posuere ex ac lacus accumsan elementum.
        </p>
        <div className="about-award">
          <img
            src="https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="winner"
            className="about-award-img"
          />
          <div className="about-award-texts">
            <h4 className="about-award-title">
              International Design Awards 2021
            </h4>
            <p className="about-award-description">
              Suspendisse id diam dapibus, luctus metus in, semper augue. Fusce
              posuere ex ac lacus accumsan elementum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
