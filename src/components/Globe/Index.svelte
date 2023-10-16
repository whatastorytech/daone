<script>
	import { onMount } from 'svelte';
	import { initGlobe } from './globe';

	onMount(() => {
		initGlobe();
	});
</script>

<div
	class="absolute top-0 inset-x-0 flex items-center justify-end bottom-6 pointer-events-none overflow-hidden"
>
	<div class="globe js-globe">
		<div class="svg-wrapper">
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 984 984"
				width="984"
				height="984"
				style="enable-background:new 0 0 984 984;"
				xml:space="preserve"
			>
				<style type="text/css">
					.st0 {
						fill: #ffffff;
					}
				</style>
				<g>
					<path
						class="st0"
						d="M968.5,492c0,31.2-3.1,62.4-9.2,93c-6.1,30.6-15.2,60.6-27.2,89.4c-23.9,57.6-59.3,110.4-103.5,154.4
        c-44.1,44.1-96.9,79.4-154.5,103.2c-28.8,11.9-58.8,21-89.3,27c-30.6,6-61.7,9-92.9,9c-31.1,0-62.3-3.1-92.8-9.2
        c-30.5-6.1-60.5-15.2-89.2-27.1c-57.5-23.9-110.2-59.3-154.2-103.3c-44-44.1-79.3-96.8-103-154.3c-11.9-28.8-20.9-58.7-26.9-89.2
        c-6-30.5-9-61.6-9-92.7c0-31.1,3.1-62.2,9.1-92.7C32,368.8,41,338.9,53,310.2c23.8-57.5,59.2-110.1,103.2-154
        c44-43.9,96.7-79.2,154.1-102.9c28.7-11.9,58.6-20.9,89.1-26.9c30.5-6,61.6-9,92.6-9c31.1,0,62.1,3.1,92.6,9.1
        c30.5,6.1,60.3,15.1,89,27c57.4,23.8,109.9,59.1,153.8,103.1c43.9,43.9,79.1,96.5,102.8,153.9c11.9,28.7,20.9,58.5,26.9,89
        c6,30.4,9,61.5,9,92.5H968.5z M966,492c0-31-3.1-62-9.1-92.5c-6-30.4-15.1-60.2-27-88.9c-23.8-57.3-59-109.8-102.9-153.6
        c-43.9-43.8-96.4-79-153.7-102.6c-28.6-11.8-58.5-20.9-88.9-26.8c-30.4-6-61.4-9-92.4-9c-31,0-62,3.1-92.4,9.1
        c-30.4,6-60.2,15.1-88.8,27c-57.2,23.7-109.6,58.9-153.4,102.8C113.7,201.3,78.6,253.8,55,311c-11.8,28.6-20.8,58.4-26.8,88.7
        c-6,30.4-9,61.3-8.9,92.3c0,30.9,3.1,61.9,9.1,92.2c6,30.3,15.1,60.1,26.9,88.7C79,730,114.2,782.4,157.9,826.1
        c43.8,43.7,96.1,78.8,153.3,102.4c28.6,11.8,58.3,20.8,88.6,26.8c30.3,6,61.2,8.9,92.1,8.9c30.9,0,61.8-3.1,92.1-9.1
        c30.3-6,60-15,88.5-26.9c57.1-23.7,109.3-58.8,153-102.5c43.7-43.7,78.6-96,102.2-153.1c11.8-28.5,20.8-58.2,26.7-88.5
        c6-30.3,8.9-61.2,8.9-92H966z"
					/>
				</g>
			</svg>
		</div>

		<ul class="globe-list js-list"></ul>
		<canvas class="globe-canvas js-canvas"></canvas>
	</div>
</div>

<style lang="scss">
	$colour-cyan: #12419e;
	$colour-white: #ffffff;
	$colour-black: #000000;

	@mixin animation($animation) {
		-webkit-animation: $animation;
		-moz-animation: $animation;
		-ms-animation: $animation;
		-o-animation: $animation;
		animation: $animation;
	}

	@mixin transition($transition) {
		-webkit-transition: $transition;
		-moz-transition: $transition;
		-ms-transition: $transition;
		-o-transition: $transition;
		transition: $transition;
	}

	@mixin transform($transform) {
		-webkit-transform: $transform;
		-moz-transform: $transform;
		-ms-transform: $transform;
		-o-transform: $transform;
		transform: $transform;
	}

	/* GLOBE */

	.globe {
		position: relative;
		width: 100vw;
		height: 100vh;
	}

	.globe .globe-list {
		z-index: 10;
		position: absolute;
		left: 0;
		top: 0;
		list-style: none;
		display: none;
	}

	$dotSize: 16px;
	$dotSizeLarge: $dotSize + calc($dotSize / 2);

	.globe .globe-list {
		opacity: 0;
		@include transition(opacity 3s cubic-bezier(0.175, 0.885, 0.32, 1.275));
	}

	.globe .globe-list.active {
		opacity: 1;
	}

	.globe .globe-list > li {
		opacity: 0.4;
		position: absolute;
		margin-left: -1 * calc($dotSize / 2);
		margin-top: -1 * calc($dotSize / 2);
		width: $dotSize;
		height: $dotSize;
		border-radius: 50%;
		background: $colour-cyan;
		@include transition(opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275));
	}

	.globe .globe-list > li.active {
		opacity: 1;
		margin-left: -1 * calc($dotSizeLarge / 2);
		margin-top: -1 * calc($dotSizeLarge / 2);
		width: $dotSizeLarge;
		height: $dotSizeLarge;
	}

	.globe .globe-list > li:before {
		content: '';
		opacity: 0.5;
		pointer-events: none;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -1 * calc($dotSize / 2);
		margin-top: -1 * calc($dotSize / 2);
		width: $dotSize;
		height: $dotSize;
		border-radius: 50%;
		background: $colour-cyan;
		@include animation(2s pulse infinite linear);
	}

	@-webkit-keyframes pulse {
		0% {
			-webkit-transform: scale(1);
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0;
			-webkit-transform: scale(2);
		}
	}

	@-moz-keyframes pulse {
		0% {
			-moz-transform: scale(1);
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0;
			-moz-transform: scale(2);
		}
	}

	@-ms-keyframes pulse {
		0% {
			-ms-transform: scale(1);
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0;
			-ms-transform: scale(2);
		}
	}

	@-o-keyframes pulse {
		0% {
			-o-transform: scale(1);
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0;
			-o-transform: scale(2);
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0;
			transform: scale(2);
		}
	}

	.globe .globe-list > li.active:before {
		margin-left: -1 * calc($dotSizeLarge / 2);
		margin-top: -1 * calc($dotSizeLarge / 2);
		width: $dotSizeLarge;
		height: $dotSizeLarge;
	}

	.globe .globe-list > li.active,
	.globe .globe-list > li.active:before {
		background: $colour-white;
	}

	.globe .globe-list .text {
		position: absolute;
		opacity: 0.8;
		right: $dotSize + 5px;
		top: 50%;
		display: block;
		font-size: 14px;
		line-height: 14px;
		font-weight: 600;
		text-align: right;
		text-shadow:
			-1px -1px 0 $colour-black,
			1px -1px 0 $colour-black,
			-1px 1px 0 $colour-black,
			1px 1px 0 $colour-black;
		color: $colour-white;
		white-space: nowrap;
		@include transform(translateY(-50%));
	}

	.globe .globe-list > li.active .text {
		opacity: 1;
		right: $dotSizeLarge + 5px;
		font-size: 20px;
		line-height: 20px;
		font-weight: 700;
	}

	.globe .globe-canvas {
		z-index: 1;
		position: absolute;
		left: 0;
		top: 0;
	}

	.globe svg {
		height: 100%;
		width: 100%;
		opacity: 0.3;
		animation: rotation 10s linear infinite;
	}

	.svg-wrapper {
		opacity: 0;
		display: inline-block;
		position: absolute;
		width: 76vh;
		height: 76%;
		left: 0;
		right: 0;
		top: 12%;
		margin: auto;
		transform: scale(0.5);
		transition:
			opacity 1s ease-out 1.6s,
			transform 1s ease-out 1.6s;
		&.active {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes rotation {
		0% {
			transform: scaleX(-1) rotate(360deg);
		}
		100% {
			transform: scaleX(-1) rotate(0deg);
		}
	}
</style>
