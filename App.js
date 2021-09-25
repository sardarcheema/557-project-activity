import logo from './logo.svg';
import './index.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

function App() {
  return (
    <div class = "outside">
   		 <div class="box">
		 
			<div class="p">
				<p> First text box </p>
			</div>

			<div class="p">
				<p> Second text box </p>
			</div>

			<div class="p">
				<p> Third text box </p>
			</div>

			<div class = "image">
				<img src={img1} alt="Image one" />
			</div>

			<div class = "image">
				<img src={img2} alt="Image two" />
			</div>

			<div class = "image">
				<img src={img3} alt="Image three" />
			</div>
			
		</div>
	</div>
  );
}

export default App;
