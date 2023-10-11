<script>
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	let options = { duration: 200, easing: linear };

	import GradientDivider from '../components/GradientDivider.svelte';

	let faqItems = [
		{
			question: 'What industries does Da One Global Ventures focus on?',
			answer:
				'We primarily focus on Sports, Esports, Sports Technology, Gaming, and Web3, investing in innovative startups that have the potential to disrupt these sectors.',
			isOpen: false
		},
		{
			question: 'What stages of funding do you provide?',
			answer:
				'Our fund targets startups in various stages, including Seed and Series A rounds, supporting their growth and development.',
			isOpen: false
		},
		{
			question: 'What is the typical investment size?',
			answer:
				'The investment size varies depending on the stage and potential of the startup. We evaluate each opportunity on a case-by-case basis.',
			isOpen: false
		},
		{
			question: 'Can I join DA ONE Global Ventures as an investor or partner?',
			answer:
				'We’re always open to exploring new partnerships and collaborations. If you’re interested in joining us as an investor or partner, please get in touch with us through our website or email.',
			isOpen: false
		}
	];

	function toggleAccordion(index) {
		faqItems[index].isOpen = !faqItems[index].isOpen;
	}
</script>

<!-- FAQ section starts here -->
<section class="py-16 md:py-24 lg:py-32 px-4 sm:px-0 relative overflow-hidden">
	<GradientDivider />
	<div class="container mx-auto flex flex-col items-center gap-4">
		<h2 class="text-white text-5xl font-medium font-cg tracking-wide">
			Frequently asked questions
		</h2>
		<p class="text-xl">Explore FAQs about Da One Global Ventures: Focus, Funding, Support</p>
		<dl
			class="flex flex-col items-stretch mt-10 space-y-6 lg:space-y-8 [&>div]:border [&>div]:border-blue-50/20 [&>div]:rounded-md [&>div]:p-4 max-w-2xl w-full"
		>
			{#each faqItems as faqItem, index (faqItem.question)}
				<div class="faq-item">
					<dt>
						<button
							type="button"
							class="faq-ques flex w-full items-start justify-between text-left text-gray-900"
							on:click={() => toggleAccordion(index)}
						>
							<span class="text-white text-lg font-cg tracking-wide">{faqItem.question}</span>
							<span class="flex h-7 items-center">
								<svg
									class="w-6 h-6 text-blue-50/20"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										class={faqItem.isOpen ? 'chevronUpIcon' : 'chevronDownIcon'}
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</span>
						</button>
					</dt>
					{#if faqItem.isOpen}
						<dd class="mt-2" transition:slide={{ ...options }}>
							<p class="text-lg leading-7">{faqItem.answer}</p>
						</dd>
					{/if}
				</div>
			{/each}
		</dl>
	</div>
</section>
<!-- FAQ section ends here -->
