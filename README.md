### joshua vigel

cs @ ut austin. inference kernels at [longhorn silicon](https://longhornsilicon.com), a student-led team building an AI accelerator chip.

**longhorn silicon** · [reef](https://github.com/LonghornSilicon/reef), our first chip, extends the Coral NPU for AI inference

- end-to-end GPT-Neo (TinyStories-28M) firmware on reef's RISC-V vector core + matrix engine, streaming weights and KV cache from flash through 32 KB of on-chip memory
- int8 transformer kernels (block-flash attention, lookup-table softmax, integer-only LayerNorm) that all fit in the 8 KB instruction memory
- C++ GPT-Neo inference engine that the on-chip kernels match bit for bit
- matrix-engine GEMV proposal and RTL microbenchmarks for faster decode
- [reef-perf-explorer](https://marvalarva2929.github.io/reef-perf-explorer/), a roofline explorer for reef's kernels

writing about it: [marvalarva2929.github.io](https://marvalarva2929.github.io/longhorn-silicon/)
