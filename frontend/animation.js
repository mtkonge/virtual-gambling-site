
let previousState = "helledie";

const coinFlip = [
    {
      backgroundImage: "var(--image-helledie)",
      transform: "rotate3D(1, 0, 0, 0deg)",
      offset: 0,
    },
  
    {
      transform: "rotate3D(1, 0, 0, 90deg)",
      backgroundImage: "var(--image-helledie)",
      offset: 0.25,
    },
    {
      transform: "rotate3D(1, 0, 0, 90deg) rotate(180deg)",
      backgroundImage: "var(--image-soelberg)",
      offset: 0.26,
    },
  
    {
      backgroundImage: "var(--image-soelberg)",
      transform: "rotate3D(1, 0, 0, 180deg) rotate(180deg)",
      offset: 0.5,
    },
    {
      backgroundImage: "var(--image-soelberg)",
      transform: "rotate3D(1, 0, 0, 270deg) rotate(180deg)",
      offset: 0.75,
    },
    {
      backgroundImage: "var(--image-helledie)",
      transform: "rotate3D(1, 0, 0, 270deg)",
      offset: 0.76,
    },
    {
      backgroundImage: "var(--image-helledie)",
      transform: "rotate3D(1, 0, 0, 360deg)",
      offset: 1,
    },
  ];
  
  const run = async (state, previousState) => {
    const img = document.getElementById("ole-flip-img-container");
    const iterationStart = previousState === "helledie" ? 0 : 0.5;
    const iterations = state === previousState ? 4 : 3.5;
    const keyframes = new KeyframeEffect(img, coinFlip, {
      duration: 350,
      easing: "linear",
      iterations,
      iterationStart,
      fill: "both",
    });
    const animation = new Animation(keyframes, document.timeline);
    animation.play();
    await animation.finished;
  };
  
  const animation = async (state) => {
    let previousState = "helledie";
    await run(state, previousState);
    previousState = state;
  
  };
  
