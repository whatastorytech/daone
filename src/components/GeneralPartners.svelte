<script>
	import StickyScroll from './Investors/StickyScroll.svelte';
</script>

<section class="investors">
	<div class="container mx-auto flex flex-col items-center gap-4">
		<h2 class="text-white text-5xl font-medium font-cg tracking-wide">Success Sherpas</h2>
		<p class="text-xl mb-24">
			Our pillars of guidance and support, who help us reach the summit of success!
		</p>
		<StickyScroll>
			<div class="flex flex-col space-y-6 w-2/3 flex-shrink-0 justify-center pr-24" slot="content">
				<h3 class="text-white text-3xl font-medium font-cg uppercase tracking-wide">
					Shikhar Dhawan
				</h3>
				<p class="text-lg">
					Shikhar Dhawan is an Indian cricketer. A left-handed opening batsman, he captains Punjab
					Kings in the Indian Premier League and plays for Delhi in first-class cricket.
				</p>
				<p class="text-lg">
					At the 2013 Champions Trophy and 2017 Champions Trophy, Dhawan was the leading run-scorer
					and was awarded the 'Golden Bat' in both the tournaments.
				</p>
			</div>
			<div slot="image">
				<img src="./team/t1.jpg" class="w-full" alt="" />
			</div>
		</StickyScroll>
		<StickyScroll>
			<div class="flex flex-col space-y-6 w-2/3 flex-shrink-0" slot="content">
				<h3 class="text-white text-3xl font-medium font-cg uppercase tracking-wide">
					Shikhar Dhawan
				</h3>
				<p class="text-lg">
					Shikhar Dhawan is an Indian cricketer. A left-handed opening batsman, he captains Punjab
					Kings in the Indian Premier League and plays for Delhi in first-class cricket.
				</p>
				<p class="text-lg">
					At the 2013 Champions Trophy and 2017 Champions Trophy, Dhawan was the leading run-scorer
					and was awarded the 'Golden Bat' in both the tournaments.
				</p>
			</div>
			<div slot="image">
				<img src="./team/t2.jpg" class="w-full" alt="" />
			</div>
		</StickyScroll>
		<StickyScroll>
			<div class="flex flex-col space-y-6 w-2/3 flex-shrink-0" slot="content">
				<h3 class="text-white text-3xl font-medium font-cg uppercase tracking-wide">
					Shikhar Dhawan
				</h3>
				<p class="text-lg">
					Shikhar Dhawan is an Indian cricketer. A left-handed opening batsman, he captains Punjab
					Kings in the Indian Premier League and plays for Delhi in first-class cricket.
				</p>
				<p class="text-lg">
					At the 2013 Champions Trophy and 2017 Champions Trophy, Dhawan was the leading run-scorer
					and was awarded the 'Golden Bat' in both the tournaments.
				</p>
			</div>
			<div slot="image">
				<img src="./team/t3.jpg" class="w-full" alt="" />
			</div>
		</StickyScroll>
	</div>
</section>
