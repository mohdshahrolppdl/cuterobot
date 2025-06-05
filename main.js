// main.js
window.addEventListener("DOMContentLoaded", async () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: './assets/targets.mind',
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);
  const iframe = document.getElementById("model-frame");

  if (!iframe) {
    console.error("Iframe element with ID 'model-frame' not found.");
    return;
  }

  anchor.onTargetFound = () => {
    iframe.style.display = 'block';
  };

  anchor.onTargetLost = () => {
    iframe.style.display = 'none';
  };

  await mindarThree.start();

  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
});
