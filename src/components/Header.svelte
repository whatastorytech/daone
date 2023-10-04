<!-- Header starts here -->
<header>
	<nav
		class="flex mx-auto max-w-screen-xl lg:max-w-screen-2xl items-center justify-between py-6 lg:px-3"
		aria-label="Global"
	>
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<img class="w-48" src="./logo-white.svg" alt="" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="mob-nav-trigger -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a href="/" class="text-lg leading-6 hover:text-white">Home</a>
			<a href="/" class="text-lg leading-6 hover:text-white">About</a>
			<a href="/" class="text-lg leading-6 hover:text-white">Team</a>
			<a href="/" class="text-lg leading-6 hover:text-white">Investment</a>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a
				href="/"
				class="text-white text-lg leading-6 border border-[#0086e2] bg-[#022842] hover:bg-[#021f32] rounded-full px-12 py-3"
				>Apply for funding <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<!-- Mobile menu starts here -->
	<div class="navbar-mobile lg:hidden hidden" role="dialog">
		<div class="fixed inset-0 z-50"></div>
		<div
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#ededed]/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class=" ">
					<img class="w-48" src="./logo-white.svg" alt="" />
				</a>
				<button type="button" class="mob-nav-close -m-2.5 rounded-md p-2.5 text-gray-700">
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-[#ededed]0/10">
					<div class="space-y-2 py-6">
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base leading-6 hover:bg-[#ededed]"
							>Home</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base leading-6 hover:bg-[#ededed]"
							>About</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base leading-6 hover:bg-[#ededed]"
							>Team</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base leading-6 hover:bg-[#ededed]"
							>Investment</a
						>
					</div>
					<div class="py-6">
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-6 hover:bg-[#ededed]"
							>Apply for funding
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Mobile menu ends here -->
</header>
<!-- Header ends here -->