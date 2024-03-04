const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function animateSequence() {
  try {
    // Animate alice1 and wait for it to finish
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    console.log('Alice1 animation finished');

    // Animate alice2 and wait for it to finish
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    console.log('Alice2 animation finished');

    // Animate alice3 and wait for it to finish
    await alice3.animate(aliceTumbling, aliceTiming).finished;
    console.log('Alice3 animation finished');
  } catch (err) {
    // Handle any errors that occur during the animation
    console.error(`Error during animation: ${err.message}`);
  }
}

animateSequence();

  // Promise chain  
  // alice1.animate(aliceTumbling, aliceTiming).finished  
  //   .then(() => {
  //       return alice2
  //               .animate(aliceTumbling, aliceTiming)
  //               .finished;     
  //   })
  //   .then(() => {
  //     return alice3
  //             .animate(aliceTumbling, aliceTiming)
  //             .finished;
  //   })
  //   .catch((err) => alert(`Error when promising ... ${err.message}`));