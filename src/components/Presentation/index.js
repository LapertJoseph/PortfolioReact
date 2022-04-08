// component for the first part with presentation

const Present = () => {

    const btnScrollTo = document.querySelector('.btn--scroll-to');

    btnScrollTo.addEventListener('click', function (e) {
        const s1coords = section1.getBoundingClientRect();          // create a section 1 after this component for the button 
        console.log(s1coords);
      
        console.log(e.target.getBoundingClientRect());
      
        console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
      
        console.log(
          'height/width viewport',
          document.documentElement.clientHeight,
          document.documentElement.clientWidth
        );
      
        section1.scrollIntoView({ behavior: 'smooth' });
      });


  return (
    <div>
      <h1>
        Bonjour, Je m'apelle <br />
        <p>
          <span>Joseph</span>
        </p>
        <p>Je suis Développeur</p>
      </h1>
      <h4>
        Je m'apelle Joseph, j'ai 36 ans et je suis actuellement en BTS Services
        informatique aux Organisations (SIO) au sein du Groupe GEFOR Paris 1.
        <br /> <br />
        Ce portfolio fut réalisé durant mon BTS SIO (Services Informatiques aux
        Organisations) Option SLAM (Solutions logicielles et applications
        métiers ).
      </h4>
      <button className="btn--text btn--scroll-to">En savoir plus ↓</button>
    </div>
  );
};

export default Present;
