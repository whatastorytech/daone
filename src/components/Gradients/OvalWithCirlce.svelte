<div
	class="wflex items-center justify-center relative aspect-square w-[60vh] h-[55vh]"
	style=" --dur1 : 10s; --dur2: 12s;"
>
	<span
		class="w-full h-full block flex-shrink-0 border border-gray-50 absolute inset-0 rounded-full opacity-20 aspect-square spin-custom"
		style=""
	></span>
	<span
		class="w-full h-full block mt-2 border border-gray-50 absolute inset-0 rotate-45 rounded-full opacity-10 aspect-square spin-custom"
	></span>
	<span
		class="w-full h-full block bg-gradient-to-tr from-blue-950 to-blue-600 via-blue-950 rounded-full blur-3xl"
	></span>
</div>

<style>
	.spin-custom {
		animation: spin var(--dur1) linear infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
