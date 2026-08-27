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
			Every clue hides a <strong class="text-stone-900 dark:text-stone-50">definition</strong> (a plain synonym) and
			<strong class="text-stone-900 dark:text-stone-50">wordplay</strong> that builds the same answer a different way.
			The number in brackets tells you how many letters to expect.
		</p>
		<p>Fill in the boxes, hit <strong class="text-stone-900 dark:text-stone-50">Guess</strong>, and wait for green.</p>
		<div>
			<p class="mb-1.5">
				Stuck? Three one-time hints highlight a part of the clue right where it lives:
			</p>
			<ul class="ml-1 space-y-1">
				<li class="flex items-center gap-2">
					<span class="h-2.5 w-2.5 shrink-0 rounded-full bg-purple-400 dark:bg-purple-500"></span>
					<strong class="text-stone-900 dark:text-stone-50">Indicator</strong> — the word that signals the wordplay type.
				</li>
				<li class="flex items-center gap-2">
					<span class="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400 dark:bg-yellow-500"></span>
					<strong class="text-stone-900 dark:text-stone-50">Fodder</strong> — the raw material the wordplay works on.
				</li>
				<li class="flex items-center gap-2">
					<span class="h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400 dark:bg-sky-500"></span>
					<strong class="text-stone-900 dark:text-stone-50">Definition</strong> — the plain-English synonym for the answer.
				</li>
			</ul>
			<p class="mt-1.5">
				Each can only be used once, in any order. Still stuck? <strong class="text-stone-900 dark:text-stone-50">Reveal a letter</strong>
				as many times as you like, right up until only one letter is left — at that point it's guess or give up. Every
				hint used counts against you, so use them freely once you're truly stuck.
			</p>
		</div>
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
