<script>
  import { Progress } from "@ui/progress"
  import { Label } from "@ui/label"
  import { Button } from "@ui/button"
  import * as RadioGroup from "@ui/radio-group"
  import challenges from "@/content/quiz"
  import { Badge } from "@ui/badge"

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
    <h1 class="text-center font-fatface text-3xl">
      Complete the Quiz and Get a Free Discount!
    </h1>
    <p class="mb-5 text-center text-xl">
      Try our {challenges.length} questions challenge
    </p>
    <div class="flex justify-center">
      <Button on:click="{() => (state = 'game')}">I'll accept the challenge!</Button>
    </div>
  {/if}

  {#if state === "game"}
    <Progress value="{currentChallenge}" max="{challenges.length}" />
    <div class="mt-4">
      {#each challenges as challenge, idx}
        {#if idx === currentChallenge}
          <div class="mb-3">
            <h3 class="font-fatface text-xl">
              Question {currentChallenge + 1}
            </h3>
            <p>{challenge.question}</p>
            <RadioGroup.Root bind:value="{answers[idx]}" class="mb-5 mt-4">
              {#each challenge.choices as choice}
                <div class="flex items-center space-x-2">
                  <RadioGroup.Item value="{choice.value.toString()}" />
                  <Label>{choice.label}</Label>
                </div>
              {/each}
            </RadioGroup.Root>
          </div>
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
    </div>
  {/if}

  {#if state === "results"}
    <h1 class="text-center font-fatface text-3xl">Results</h1>
    <p class="mb-5 text-center text-xl">
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
