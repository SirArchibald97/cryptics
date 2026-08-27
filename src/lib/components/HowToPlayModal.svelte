<script lang="ts">
	import Modal from './Modal.svelte';

	let { open = $bindable(false) }: { open?: boolean } = $props();

	const clueTypes = [
		['Anagram', "letters are jumbled — look for a word like 'confused' or 'oddly'."],
		['Double Definition', 'the whole clue is two definitions of the same word, back to back.'],
		['Hidden Word', 'the answer sits inside consecutive letters of the clue text.'],
		['Charade', 'the answer is built from smaller words joined end to end.'],
		['Container', 'one chunk of letters is tucked inside another.'],
		['Homophone', "the answer sounds like another word — look for 'we hear' or 'sounds like'."],
		['Deletion', 'a letter or letters are removed from a longer word.'],
		['Reversal', 'read another word backwards.']
	] as const;
</script>

<Modal bind:open title="How to play">
	<div class="space-y-4 text-sm text-stone-600 dark:text-stone-300">
		<p>
			Every clue has two parts hiding in plain sight: a <strong class="text-stone-900 dark:text-stone-50">definition</strong>
			(a plain synonym, usually at the start or end) and <strong class="text-stone-900 dark:text-stone-50">wordplay</strong>
			that builds the same answer a different way. The number in brackets tells you how many letters to expect.
		</p>
		<p>Type your answer, hit <strong class="text-stone-900 dark:text-stone-50">Guess</strong>, and wait for green.</p>
		<p>
			Stuck? <strong class="text-stone-900 dark:text-stone-50">Get a hint</strong> — each one gives away a little more, from
			the clue type down to the first letter. Or reveal the answer outright and read the full breakdown.
		</p>
		<div>
			<p class="mb-2 font-semibold text-stone-900 dark:text-stone-50">Common clue types</p>
			<dl class="space-y-1.5">
				{#each clueTypes as [name, desc] (name)}
					<div class="flex flex-col sm:flex-row sm:gap-2">
						<dt class="shrink-0 font-medium text-stone-800 dark:text-stone-100">{name}:</dt>
						<dd>{desc}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</Modal>
