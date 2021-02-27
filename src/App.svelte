<script>
	import { questions, score } from './stores.js'

	import Options from './Options.svelte'
	import Box from './Box.svelte'
	import Score from './Score.svelte'

	let q = [];

	let qdata =  questions.subscribe(value => {
		if (value !== undefined || value !== 'undefined' && typeof value === 'object') {			
			q = $questions.results
		}
	})

	let count = 0

</script>

<main>
	<h1>Isaac's Svelte Trivia App</h1>
	<Options />

	<Score score={ $score.filter(el => el === true).length + "/10"} />

	{#if typeof q === 'object'}
		{ #each q as {question, incorrect_answers, correct_answer}, idx (question)}			
			<Box id={idx} boxValue={false} question={question} incorrectAnswers={incorrect_answers} correctAnswer={correct_answer}/>
		{ /each }
	{/if}

</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em;
		width: 400px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>