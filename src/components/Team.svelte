<script>
	import GradientDivider from '../components/GradientDivider.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/skyblue';
</script>
<!-- Team section starts here -->
<section class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
	<GradientDivider/>
	<!-- backdrop circle starts here -->
	<div class="absolute top-1/2 right-0 w-full isolate">
		<div
			class="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#002cff] to-[#0086e2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</div>
	<!-- backdrop circle ends here -->
	<div class="w-full relative z-10 space-y-16">
		<div class="container mx-auto flex flex-col items-center gap-4">
			<h2 class="text-white text-5xl font-medium font-cg">Our Core Team</h2>
			<p class="text-xl">
				We have access to a large pool of quality deals, thanks to our extensive network and
				ability to collaborate.
			</p>
		</div>
		<Splide class="slider-wrapper" hasTrack={ false } aria-label="Out Team" options={ {
			rewind: true,
			gap   : '2rem',
			perPage: 4,
			perMove: 1,
			pagination: false
		  } }>
			<div class="flex flex-col container mx-auto space-y-16 ">
				<div class="splide__arrows">
					<button class="splide__arrow splide__arrow--prev">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>			  
					</button>
					<button class="splide__arrow splide__arrow--next">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>	
					</button>
				</div>
				<SplideTrack>
					<SplideSlide class="space-y-4">
						<img src="./a1.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Andrew Bell</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a2.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Dr. Sandeep Gandhi</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a3.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Amitesh Shah</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a4.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Abhinav Tandon</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a5.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Akshay Chhugani</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a6.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Maharshi Ganatra</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a1.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Kumar Gaurav</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a3.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Akshay Grover</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a5.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Geetansh Sahni</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a2.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Rajeev Duggal</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a4.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Abhinav Tandon</h3>
					</SplideSlide>
					<SplideSlide class="space-y-4">
						<img src="./a6.jpg" alt="" class="rounded-md"/>
						<h3 class="text-white text-lg font-medium font-cg">Raunak Hajela</h3>
					</SplideSlide>
				</SplideTrack>
			</div>
		</Splide>
	</div>

</section>
<!-- Team section ends here -->

<style lang="scss">
	.splide__arrows{
		@apply relative;

		.splide__arrow{
			@apply w-10 h-10 border-solid border-2 border-blue-50 rounded-full;

			svg{
				@apply w-6 h-6 stroke-2;
			}
		}
	}
</style>