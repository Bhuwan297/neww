
import heroim from '../images/Rectangle1.png'


import './css/home.css'


const Home = () => {
  return (
    <div className="community">
 <section className="hero image-as-background" style={{ backgroundImage: `url(${heroim})` }}>

	<header class="hero-container">
		<h1 class="hero-title">This is a large hero section</h1>
		<p>This is the text that describes the hero section.</p>
	</header>
</section>
    </div>
  );
};

export default Home;