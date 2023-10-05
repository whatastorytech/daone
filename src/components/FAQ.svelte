<script>
    import GradientDivider from '../components/GradientDivider.svelte';

    let faqItems = [
        {
            question: "What industries does Da One Global Ventures focus on?",
            answer: "We primarily focus on Sports, Esports, Sports Technology, Gaming, and Web3, investing in innovative startups that have the potential to disrupt these sectors.",
            isOpen: false,
        },
        {
            question: "What stages of funding do you provide?",
            answer: "Our fund targets startups in various stages, including Seed and Series A rounds, supporting their growth and development.",
            isOpen: false,
        },
        {
            question: "What is the typical investment size?",
            answer: "The investment size varies depending on the stage and potential of the startup. We evaluate each opportunity on a case-by-case basis.",
            isOpen: false,
        },
        {
            question: "Can I join DA ONE Global Ventures as an investor or partner?",
            answer: "We’re always open to exploring new partnerships and collaborations. If you’re interested in joining us as an investor or partner, please get in touch with us through our website or email.",
            isOpen: false,
        },
    ];

    function toggleAccordion(index) {
        faqItems[index].isOpen = !faqItems[index].isOpen;
    }

    // const faqItems = document.querySelectorAll(".faq-item");

    // faqItems.forEach((faqItem) => {
    // faqItem.querySelector(".faq-ques").addEventListener("click", () => {
    //     faqItem.querySelector(".toggle").classList.toggle("hidden");
    //     faqItem.querySelector(".chevronUpIcon").classList.toggle("hidden");
    //     faqItem.querySelector(".chevronDownIcon").classList.toggle("hidden");
    // });
    // });
</script>

<!-- FAQ section starts here -->
<section class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
    <GradientDivider />
    <div class="container mx-auto flex flex-col items-center gap-4">
        <h2 class="text-white text-5xl font-medium font-cg tracking-wide">Frequently asked questions</h2>
			<p class="text-xl">
				Explore FAQs about Da One Global Ventures: Focus, Funding, Support
			</p>
        <dl class="mt-0 lg:mt-10 space-y-6 lg:space-y-10 divide-y divide-gray-900">
            {#each faqItems as faqItem, index (faqItem.question)}
                <div class="faq-item pt-6 lg:pt-10">
                    <dt>
                    <button type="button" class="faq-ques flex w-full items-start justify-between text-left text-gray-900" on:click={() => toggleAccordion(index)}>
                        <span class="text-white text-xl font-medium font-cg tracking-wide">{faqItem.question}</span>
                        <span class="ml-6 flex h-7 items-center">
                        <svg class="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path class="{faqItem.isOpen ? 'chevronUpIcon' : 'chevronDownIcon'}" stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </span>
                    </button>
                    </dt>
                    <dd class="{faqItem.isOpen ? 'toggle' : 'hidden'} mt-2">
                    <p class="text-lg leading-7">{faqItem.answer}</p>
                    </dd>
                </div>
            {/each}
        </dl>
      </div>
</section>
<!-- FAQ section ends here -->