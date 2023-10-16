<script>
	import GeneralPartners from './GeneralPartners.svelte';
	import Facts from './Facts.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css/skyblue';
</script>

<!-- Team section starts here -->
<section
	class="py-16 md:py-24 lg:py-32 px-4 sm:px-0 relative overflow-hidden bg-gradient-to-b from-[#000f27] to-[#000c14]"
>
	<div class="w-full relative z-10 space-y-16">
		<div class="container mx-auto flex flex-col items-center gap-4">
			<h2 class="text-white text-5xl font-medium font-cg tracking-wide">Success Sherpas</h2>
			<p class="text-xl">
				Our pillars of guidance and support, who help us reach the summit of success!
			</p>
			<GeneralPartners />
			<div class="team-slide has-x-mask">
				<Splide
					class="slider-wrapper"
					hasTrack={false}
					aria-label="Out Team"
					options={{
						rewind: true,
						gap: '2rem',
						perPage: 5,
						perMove: 1,
						pagination: false,
						arrows: false,
						focus: 'center',
						type: 'loop',
						autoScroll: {
							speed: 0.5,
							pauseOnHover: false
						}
					}}
					extensions={{
						AutoScroll
					}}
				>
					<div
						class="flex flex-col container mx-auto space-y-16 [&_img]:grayscale [&_img]:transition-all [&_img:hover]:grayscale-0"
					>
						<SplideTrack>
							<SplideSlide class="space-y-4">
								<img src="./team/t1.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Andrew Bell
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t2.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Dr. Sandeep Gandhi
									</h3>
									<p class="text-lg">Project Coordinator</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t3.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Amitesh Shah
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t4.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Abhinav Tandon
									</h3>
									<p class="text-lg">Project Coordinator</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t5.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Akshay Chhugani
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t6.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Maharshi Ganatra
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t1.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Kumar Gaurav
									</h3>
									<p class="text-lg">Project Coordinator</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t3.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Akshay Grover
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t5.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Geetansh Sahni
									</h3>
									<p class="text-lg">Project Coordinator</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t2.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Rajeev Duggal
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t4.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Abhinav Tandon
									</h3>
									<p class="text-lg">Project Coordinator</p>
								</div>
							</SplideSlide>
							<SplideSlide class="space-y-4">
								<img src="./team/t6.jpg" alt="" class="rounded-md" />
								<div>
									<h3 class="text-white text-lg font-medium font-cg uppercase tracking-wide">
										Raunak Hajela
									</h3>
									<p class="text-lg">Founder</p>
								</div>
							</SplideSlide>
						</SplideTrack>
					</div>
				</Splide>
			</div>
			<Facts />
		</div>
	</div>
</section>

<!-- Team section ends here -->

<style lang="scss">
	.splide__arrows {
		@apply relative;

		.splide__arrow {
			@apply w-10 h-10 border-solid border-2 border-blue-50 rounded-full;

			svg {
				@apply w-6 h-6 stroke-2;
			}
		}
	}
</style>
