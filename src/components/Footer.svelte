<script>
	import GradientDivider from '../components/GradientDivider.svelte';
	import Globe from '../components/Globe/Index.svelte';
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js"></script>
	<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/ThreeOrbitControls.js"></script>
	<script src="https://rawgit.com/spite/THREE.MeshLine/master/src/THREE.MeshLine.js"></script>
</svelte:head>

<!-- Footer starts here -->
<section class="pt-16 pb-8 md:pt-24 lg:pt-32 relative overflow-hidden">
	<GradientDivider />
	<Globe />
	<div class="container mx-auto">
		<div class="flex flex-col mx-auto max-w-3xl items-center justify-center gap-4">
			<h3 class="text-white text-center text-5xl font-medium font-cg tracking-wide">
				Join us in shaping the future of sports with quality deals, funding and support.
			</h3>
			<button
				class="mt-10 text-white text-lg leading-6 border border-[#0086e2] bg-[#022842] hover:bg-[#021f32] rounded-full px-12 py-3"
				>Pitch Us <span aria-hidden="true">&rarr;</span>
			</button>
			<p class="pt-20">© 2023 Da One Global Venutres</p>
		</div>
	</div>
</section>
<!-- Footer ends here -->
