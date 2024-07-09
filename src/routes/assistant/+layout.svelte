<script lang="ts">
	import { AI_ASSISTANT, AI_AVATAR_PATH } from '$lib/config';
	import { clearAssistantId } from '$lib/services/localStorage';
</script>

<div class="grid h-full w-screen grid-rows-12">
	<div class="space-between flex !w-screen items-center justify-between bg-primary p-2">
		<div>
			<img
				class="h-8 w-8 rounded-full ring-2 ring-white xl:h-12 xl:w-12"
				src={AI_AVATAR_PATH}
				alt=""
			/>
		</div>
		<div class=" text-lg font-bold text-white md:text-xl xl:text-3xl">
			{AI_ASSISTANT}
		</div>
		<div>
			<button
				on:click={() => {
					clearAssistantId();
					location.reload();
				}}>Sign Out</button
			>
		</div>
	</div>

	<slot />
</div>

<style>
	button {
		padding: 10px 20px;
		font-size: 16px;
		color: white;
		background-color: #007bff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
