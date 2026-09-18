# Publication thumbnails

One image per paper, named after its id in `assets/js/data.js`:

```
assets/img/pubs/C6.png    Beyond RAG vs. Long-Context
assets/img/pubs/C5.png    FALCON
assets/img/pubs/J1.png    Neural MCTS
assets/img/pubs/C4.png    Prior-Guided Diffusion Planning
assets/img/pubs/C3.png    NBDI
assets/img/pubs/C2.png    Adaptive Timestep Sampling
assets/img/pubs/C1.png    Offline Imitation Learning
```

- **Aspect ratio 4:3** (e.g. 800 × 600 px). The page crops anything else to 4:3
  from the centre, so a slightly-off figure still works — but a very wide banner
  will lose its edges. To change the ratio site-wide, edit `--thumb-ratio` at the
  top of `assets/css/style.css` (`1 / 1` for square, `16 / 9` for wide).
- **png or jpg.** Use a different name or format by changing that paper's `thumb`
  field in `data.js`.
- The teaser / method-overview figure from the paper is usually the best pick;
  crop away captions and keep the visual simple — it renders about 200 px wide.
- Until an image exists, the page shows a grey box with the venue name in it,
  so nothing breaks while you collect them.
