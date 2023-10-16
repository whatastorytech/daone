<script>
	import sticky from '../../lib/sticky.js';

	export let stickToTop = true;

	let isStuck = false;

	function handleStuck(e) {
		isStuck = e.detail.isStuck;
	}
</script>

<div class="px-4 lg:px-32 w-full container mx-auto">
	<div class="flex items-center justify-between w-full min-h-[50vh]">
		<slot name="content" />

		<div class="relative">
			<div
				class="sticky pl-20 pattern-img-mask"
				class:isStuck
				data-position={stickToTop ? 'top' : 'bottom'}
				use:sticky={{ stickToTop }}
				on:stuck={handleStuck}
			>
				<slot name="image" />
			</div>
		</div>
	</div>
</div>

<style>
	.sticky {
		position: sticky;
		transition: all 0.3s;
	}

	.sticky[data-position='top'] {
		top: 1rem;
	}

	.sticky[data-position='bottom'] {
		bottom: 1rem;
	}

	.sticky.isStuck {
		position: sticky;
	}
</style>
