import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);



const Header = () => {
	useEffect(() => {
		gsap.to('header a', {
			scrollTrigger: 'header a',
			x: 400,
			duration: 4
		})
	})
	return (
		<header class={style.header}>
			<h1>Preact App</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
			</nav>
		</header>
	)
};



export default Header;
