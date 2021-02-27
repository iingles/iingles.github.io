<script>
    export let question

    let questionEl
    $:if (questionEl) questionEl.innerHTML = question
    
</script>

<style>
    .question h3 {
        width: 100%;
        text-align: center;
    }
</style>

<div class="question">
	<!-- svelte-ignore a11y-missing-content -->
	<h3 bind:this={questionEl}></h3>
</div>