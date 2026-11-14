### joshua vigel

cs @ ut austin. inference kernels at [longhorn silicon](https://longhornsilicon.com), a student-led team building an AI accelerator chip.

**longhorn silicon** · [reef](https://github.com/LonghornSilicon/reef), our first chip, extends the Coral NPU for AI inference

- **end-to-end LLM inference on the chip.** Wrote the firmware that runs GPT-Neo (TinyStories-28M) on reef's RISC-V vector core, matrix engine and DMA. Weights and the KV cache stream from external flash through 32 KB of on-chip memory, double-buffered so loads overlap compute. Decode runs at **1.30 tok/s at 1024-token context** (50 MHz) on the architecture team's performance model, within ~5% of my earlier RTL-based estimate.
- **int8 transformer kernels.** Wrote the matmul, attention, softmax, GeLU, LayerNorm, MLP and embedding kernels. Block-flash attention on the matrix engine cut prefill cycles **84%**, and a lookup-table softmax cut another **74%**. Vectorizing every integer loop with fixed-point requantization sped up residual add **32×**, LayerNorm **17×**, GeLU **7.6×** and the MLP **6×**. LayerNorm is integer-only (Q15 inverse square root, 14% faster), so the build needs no floating-point unit.
- **fit in 8 KB.** Every kernel and the firmware live in the 8 KB instruction memory at once. I cut the resident image from 8,096 to 6,368 bytes and added a CI check that fails the build if it grows past the limit.
- **C++ inference engine.** Built the host GPT-Neo engine: loads Hugging Face checkpoints and runs prefill, cached decode and generation in fp32 or W8A8. The on-chip kernels match it bit for bit, checked by golden tests in CI.
- **hardware proposals.** Worked with the architecture team on a matrix-engine change for decode. Storing operands transposed cut a matrix step from 84 to 25 cycles. Wrote RTL microbenchmarks at 16×16, 8×8 and 4×4 tile sizes, verified against NumPy, so the team could calibrate their performance model.
- **[reef-perf-explorer](https://marvalarva2929.github.io/reef-perf-explorer/).** An interactive roofline tool showing each model module's compute, memory and bandwidth demand against the chip's limits, using measured kernel cycles.

writing about it: [marvalarva2929.github.io](https://marvalarva2929.github.io/longhorn-silicon/)
