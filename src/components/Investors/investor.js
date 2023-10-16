import { browser } from '$app/environment';
// @ts-ignore
import ScrollMagic from 'scrollmagic-with-ssr';
import { TweenMax, TimelineMax, Linear } from 'gsap';

export const initInvestorsAnim = async () => {
	if (!browser) return;

	const { ScrollMagicPluginGsap } = await import('scrollmagic-plugin-gsap');
	// @ts-ignore
	ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

	// @ts-ignore
	const controller = new ScrollMagic.Controller();
	const tl = new TimelineMax();

	const images = ['investor__image--1', 'investor__image--2', 'investor__image--3'];

	const obj = { curImg: 0 };

	const tween = tl.to(obj, 0.5, {
		curImg: images.length - 1,
		roundProps: 'curImg',
		immediateRender: true,
		ease: Linear.easeNone,
		onUpdate: function () {
			var elements = document.querySelectorAll('.investor__image');
			for (var i = 0; i < elements.length; i++) {
				// @ts-ignore
				elements[i].style.visibility = 'hidden';
			}
			// @ts-ignore
			document.getElementById(images[obj.curImg]).style.visibility = 'visible';
		}
	});

	// @ts-ignore
	new ScrollMagic.Scene({
		triggerElement: '.investor__trigger',
		duration: '300%'
	})
		.on('enter', () => {
			document.querySelector('.investor__media')?.classList.add('active');
		})
		.on('leave', () => {
			document.querySelector('.investor__media')?.classList.remove('active');
		})
		// @ts-ignore
		.setTween(tween)
		.addTo(controller);

	// Fading in elements once they are in the viewport
	const fadeInElements = document.getElementsByClassName('fade');
	for (var i = 0; i < fadeInElements.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: fadeInElements[i],
			reverse: false,
			triggerHook: 1
		})
			.setClassToggle(fadeInElements[i], 'fade--active')
			.addTo(controller);
	}
};
