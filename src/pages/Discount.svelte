<script>
  import { Progress } from "@ui/progress"
  import { Label } from "@ui/label"
  import { Button } from "@ui/button"
  import * as RadioGroup from "@ui/radio-group"
  import challenges from "@/content/quiz"

  let state = "menu"
  let currentChallenge = 0
  let answers = []

  $: lastChallenge = currentChallenge === challenges.length - 1
  $: hasDiscount = answers.reduce(
    (acc, answer, idx) => acc && answer == challenges[idx].answer,
    true
  )

  function handleAnswer() {
    if (lastChallenge) state = "results"
    currentChallenge++
  }
</script>

<section class="mx-auto max-w-xl">
  {#if state === "menu"}
    <h2 class="header text-center">Complete the Quiz and Get a Free Discount</h2>
    <p class="subheader text-center">
      Try our {challenges.length} questions challenge!
    </p>
    <div class="mt-5 flex justify-center">
      <Button size="lg" on:click="{() => (state = 'game')}"
        >I'll accept the challenge!</Button
      >
    </div>
  {/if}

  {#if state === "game"}
    <Progress value="{currentChallenge}" max="{challenges.length}" class="mb-5" />
    {#each challenges as challenge, idx}
      {#if idx === currentChallenge}
        <h5 class="header">Question {currentChallenge + 1}</h5>
        <p class="paragraph">{challenge.question}</p>
        <RadioGroup.Root bind:value="{answers[idx]}" class="mb-5 mt-4">
          {#each challenge.choices as choice}
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="{choice.value.toString()}" />
              <Label>{choice.label}</Label>
            </div>
          {/each}
        </RadioGroup.Root>
        <div>
          <Button
            disabled="{!answers[idx]}"
            on:click="{handleAnswer}"
            class="w-full sm:w-auto"
          >
            {lastChallenge ? "Submit" : "Next Question"}
          </Button>
        </div>
      {/if}
    {/each}
  {/if}

  {#if state === "results"}
    <h3 class="header text-center">Results</h3>
    <p class="subheader text-center">
      {#if hasDiscount}
        Congrats! You've deserved a discount!
      {:else}
        No discount :( sowwy~~
      {/if}
    </p>
    <ol class="list-decimal">
      {#each answers as answer, idx}
        {@const valid = answer == challenges[idx].answer}
        <li class:wrong="{!valid}">{valid ? "Correct" : "Nahh"}</li>
      {/each}
    </ol>
  {/if}
</section>

<style lang="postcss">
  .wrong {
    @apply border-red-400 bg-red-400 bg-opacity-15 text-red-400;
  }
</style>
