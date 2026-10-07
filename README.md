# Tidemark

**Unreal Engine / Technical Art** · Real-time environment research

**WIP — geometry / reference convergence.**  
Current stable UE visual source: **G004**. Latest experiment: **G011 = PARTIAL / NOT RETAINED**. Human Art remains **PENDING**.

Tidemark studies how an environment can keep route logic, collision boundaries, scene structure and replaceable visual layers intact while the world is repeatedly rebuilt toward a visual reference.

> Current-media note: the newest G004/G011 captures are verified in project evidence, but are not published here yet because this showcase sync could not retrieve their original image bytes for a fresh rights/path/hash gate. Older First Art Pass images are kept below only as development history.

## Current Build

The project has moved beyond the original First Art Pass review state.

**Stable reference source — G004**
- Reference fidelity improved over the previous A2.1 baseline.
- Boardwalk reference relation: PASS.
- Water negative space: PASS.
- Building cluster: PASS.
- Secondary service dock: PASS.
- Structural language: PASS.
- Character feasibility: **7/7 PASS** in the bounded G004 test.
- Save / reload: PASS.
- Protected regression: PASS.
- No protected asset, R81, MainTower, camera/FOV, lighting or production-gameplay write was claimed by the retained G004 convergence pass.
- Remaining gaps: island silhouette, rock stepping, slope plausibility, terrain / rock integration, platform silhouette and final vegetation / art approval.

**Latest experimental convergence — G011**
- Settlement asymmetry, mass variation, vertical layering, tower grounding, right-coast rhythm and platform shape reached STRONG_PARTIAL.
- Boardwalk composition and water negative space remained PASS.
- Protected regression remained PASS.
- Overall reference massing, island silhouette, building / terrain integration and architectural access logic stayed PARTIAL.
- G011 was **not retained or promoted**; G004 remains the stable UE source.

## Technical Art / Environment Work

Implemented and evidenced:
- semantic scene construction and protected composition constraints;
- visual / gameplay collision separation;
- replaceable visual candidate layers;
- fixed-camera capture and evidence binding;
- character-route feasibility tests separated from visual approval;
- save/reload, protected-regression and task-hygiene checks;
- iterative WorldFoundation / world-logic / reference-fidelity blockout work;
- explicit rejection / retention gates so an iteration cannot become “current” only because it is newer.

The project deliberately keeps technical feasibility, gameplay validation and Human Art as separate gates.

## Development Progress

### Early playable greybox → First Art Pass

![Greybox versus First Art Pass](media/greybox-comparison.png)

The First Art Pass proved that a replaceable visual layer could be added while preserving the gameplay surface underneath. It is now **historical evidence**, not the current project state.

![First Art Pass — historical scene capture](media/first-art-pass.png)

Additional historical views:

![Boardwalk / dock — historical First Art Pass detail](media/boardwalk-dock.png)

![Route view — historical scene capture](media/route-view.png)

### Current convergence work

After the public First Art Pass snapshot, the project moved into controlled reference-convergence and world-integration work:
- WorldFoundation v1 / v1.1;
- A2 World Logic and A2.1 Reference Fidelity;
- bounded G001–G004 overnight convergence, with **G004 retained**;
- later G006–G011 geology / island / settlement experiments, repeatedly rejected or left PARTIAL when they did not clear the retention threshold.

This history is intentionally kept visible: failed candidates are evidence of the review system, not hidden “progress.”

## Current Focus

Improve the stable G004 direction without weakening protected composition or route constraints:
- coast naturalism and stepped geology;
- terrain / rock and building / terrain integration;
- island silhouette and front-slope occupation;
- architectural access readability;
- platform weight / silhouette;
- final vegetation and material art only after stronger macro integration.

## Next Milestone

Produce a **retained successor to G004** that materially improves overall reference massing, island silhouette, building / terrain integration and architectural access logic **without** regressing the protected scene, boardwalk composition, water negative space or bounded traversal evidence.

After that: Human Art review and a fresh gameplay / collision validation pass on the retained candidate.

## Status / Limitations

- **Human Art: PENDING.**
- G011 is the newest documented experiment, but it is not the stable baseline.
- No production promotion is claimed for G006–G011.
- Current newest visual captures are not yet mirrored into this public showcase.
- Analytical route / foundation checks do not equal a full Character capsule traversal.
- The public repository is a portfolio / teacher-review surface, not the canonical UE project.

See [current status](docs/status.md), [technical overview](docs/technical-overview.md), and the [showcase sync audit](docs/TIDEMARK_SHOWCASE_SYNC_AUDIT.md).

## Distribution / Attribution

Source/project distribution is not currently provided. This repository does not contain the complete UE project, Saved, Intermediate, DDC, Build, third-party course assets, unverified-license assets, agent logs, private machine paths or credentials.

No AI-generated image is used as project runtime evidence.

[Lilith — Portfolio](https://github.com/lilith-techart)
