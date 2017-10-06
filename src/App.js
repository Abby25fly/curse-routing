import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
	render() {
		return (
			<div className="main-content home">
				<h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
		);
	}
}

class About extends Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}

class Teachers extends Component {
	render() {
		return (
			<div className="main-content col-md-12">
				<h2>Teachers</h2>
				<div className="teachers row">
				<div className="divPhoto col-md-6" >
					<img ClassName ="Photo" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png"/>
					<h3>Angie McAngular</h3>
				<p>
				Angie is a web developer and teacher who is passionate about building scalable, 
				data driven web apps, especially ones that address old problems with new tech!</p>
				</div>
				<div className="divPhoto col-md-6" >
					<img ClassName ="Photo" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png"/>
					<h3>NodeStradamus</h3>
				<p>
				'NodeStra' is a software engineer and philosopher trying to leave the world 
				better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
				</div>
				<div className="divPhoto col-md-6" >
					<img ClassName ="Photo" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png"/>
					<h3>Geo 'Lo' Cation</h3>
				<p>
				Geo is a JavaScript developer working on large-scale applications.
				 He's also a teacher who strives to support students in removing all barriers to learning code.</p>
				</div>
				<div className="divPhoto col-md-6" >
					<img ClassName ="Photo" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png"/>
					<h3>Ecma Scriptnstuff</h3>
				<p>
				Ecma found her passion for computers and programming over 15 years ago. 
				She is excited to introduce people to the wonderful world of JavaScript.</p>
				</div>
				<div className="divPhoto col-md-6" >
					<img ClassName ="Photo" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png"/>
					<h3>Jay Query</h3>
				<p>
				Jay is a developer, author of CSS: The Missing Manual, 
				JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
				</div>
				<div className="divPhoto col-md-6" >
					<img ClassName ="Photo" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png"/>
					<h3>Json Babel</h3>
				<p>
				All of his professional life, Json has worked with computers online; 
				he is a polyglot programmer and likes using the right tools for the job.</p>
				</div>
				</div>
			</div>
		);
	}
}

class Repos extends Component {
	render() {
		const {route} = this.props;
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = [
					<div className="row">
					<div className="col-md-12">
					<h3>CSS Basics</h3>
					<p>
					CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.
					</p>
					</div>
					<div className="col-md-12">
					<h3>CSS Selectors</h3>
					<p>
					In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.
					</p>
					</div>
					<div className="col-md-12">
					<h3>Responsive Layouts</h3>
					<p>
					Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design.
					</p>
					</div>
					<div className="col-md-12">
					<h3>CSS Flexbox Layout</h3>
					<p>
					Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!
					</p>
					</div>
				</div>
				].map( (item, index) => {
					return <div key = {index}> {item} </div>
				});
				break;
			case 'javascript':
				CurrentList = [
					<div className="row">
					<div className="col-md-12">
					<h3>JavaScript Basics</h3>
					<p>
					JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.
					</p>
					</div>
					<div className="col-md-12">
					<h3>JavaScript Loops, Arrays and Objects</h3>
					<p>
					Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.
					</p>
					</div>
					<div className="col-md-12">
					<h3>jQuery Basics</h3>
					<p>
					jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.
					</p>
					</div>
					<div className="col-md-12">
					<h3>AJAX Basics</h3>
					<p>
					AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server.
					</p>
					</div>
				
				</div>
				].map( (item, index) => {
					return <div  key = {index}> {item} </div>
				});
				break;
			default: //'html'
				CurrentList = [
					<div className="row">
						<div className="col-md-12">
						<h3>How to Make a Website</h3>
						<p>
						If you’ve never built a website before and you have no coding or design experience, 
						this is the place to start. In this project, we learn how to build a modern portfolio 
						website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next,
						we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.</p>
						</div>
						<div className="col-md-12">
						<h3>HTML Forms</h3>
						<p>
						The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.</p>
						</div>
						<div className="col-md-12">
						<h3>HTML Video and Audio</h3>
						<p>
						Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.
						</p>
						</div>
						<div className="col-md-12">
						<h3>SVG Basics</h3>
						<p>
						Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density.
						</p>
						</div>
					
					</div>
				
			].map( (item, index) => {
					return <div className="" key = {index}> {item} </div>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className="course-nav">
						<li className="courseBtn"><a href='#/repos/html'>HTML</a></li>
						<li className="courseBtn"><a href='#/repos/css'>CSS</a></li>
						<li className="courseBtn"><a href='#/repos/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	//  $(document).ready ()
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			//<a href="#/about">About</a>
			//<li><a href='#/repos/html'>HTML</a></li>
			console.log ( window.location.hash.substr(1) );

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForRepos = null;
		switch (this.state.route) {
			case '/home':
			    Child = Home;
			break;
			case '/about':
				Child = About;
				break;
			case '/teachers':
				Child = Teachers;
				break;
			case '/repos':
				Child = Repos;
				break;
			case '/repos/html':
				Child = Repos;
				propsForRepos = 'html';
				break;
			case '/repos/css':
				Child = Repos;
				propsForRepos = 'css';
				break;
			case '/repos/javascript':
				Child = Repos;
				propsForRepos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
         <div className="boardText">
            <header>
			<span class="glyphicon">&#xe079;&#xe080;</span>
            <menu>
               <ul>
			   	  <li>
                     <a href="#/home">Home</a>
                  </li>{' '}
                  <li>
                     <a href="#/about">About</a>
                  </li>{' '}
				  <li>
                     <a href="#/teachers">Teachers</a>
                  </li>{' '}
                  <li>
                     <a href="#/repos">Courses</a>
                  </li>
               </ul>{' '}
            </menu>
			</header>{' '}
	         {
	         	propsForRepos?
			         <Child route = {propsForRepos} />
		         :
			         <Child />
	         }
         </div>
		);
	}
}

export default App;
