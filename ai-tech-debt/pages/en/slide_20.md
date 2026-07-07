# What's next? Pay the debt continuously

So far, a developer pays down the debt reactively. What's next: agents pay it down continuously.

<div class="grid grid-cols-2 gap-6">

<div>

### The drift problem

Agents reproduce existing patterns, including bad ones. The code slowly drifts.

> At OpenAI, **20% of the week (every Friday) was spent cleaning up the "AI slop"** before they automated it.

Source: _Harness engineering_, Ryan Lopopolo, OpenAI (Feb. 2026).

</div>

<div>

### The answer: the harness

1. Encode the "golden principles" in the repo
2. Background agents that scan for drift
3. Small, targeted, automerge cleanup PRs
4. **Pay down the debt continuously** rather than in big periodic projects

</div>

</div>

<br/>

### gh-aw - the open source version

[`github/gh-aw`](https://github.github.com/gh-aw/): agentic workflows in GitHub Actions, declared in markdown.

```bash
gh extension install github/gh-aw
```
