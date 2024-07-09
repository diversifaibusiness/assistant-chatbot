<script lang="ts">
	import { goto } from '$app/navigation';
	import { setCurrentAssistantId } from '$lib/services/localStorage';

	let assistantId = '';

	const handleClick = () => {
    setCurrentAssistantId(assistantId)
		goto('/assistant');
	};
</script>

<main>
	<div class="container">
		<label for="codeInput">Enter code</label>
		<input type="text" id="codeInput" bind:value={assistantId} />
		<button on:click={handleClick}>Enter</button>
	</div>
</main>

<style>
	main {
		height: 100%;
		margin: 0;
		font-family: Arial, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f0f0f0;
		color: black;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	label {
		margin-bottom: 10px;
		font-size: 18px;
	}

	input[type='text'] {
		width: 100%;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
	}

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
