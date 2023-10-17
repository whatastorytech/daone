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
<section class="pt-16 pb-8 md:pt-24 lg:pt-32 px-4 sm:px-0 relative overflow-hidden">
	<GradientDivider />
	<Globe />
	<div class="container mx-auto">
		<div class="flex flex-col mx-auto max-w-6xl items-center justify-center gap-4">
			<!-- <h3 class="text-white text-center text-5xl font-medium font-cg tracking-wide">
				Join us in shaping the future of sports with quality deals, funding and support.
			</h3> -->
			<div
				data-tf-widget="dqz9qeVg"
				data-tf-opacity="100"
				data-tf-iframe-props="title=form_title"
				data-tf-transitive-search-params
				data-tf-medium="snippet"
				style="width:100%;height:500px;"
			></div>
			<script src="//embed.typeform.com/next/embed.js"></script>
			<p class="pt-20">© 2023 Da One Global Venutres</p>
		</div>
	</div>
</section>
<!-- Footer ends here -->
