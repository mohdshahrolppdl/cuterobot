const mindarThree = new window.MINDAR.IMAGE.MindARThree({
  container: document.querySelector("#ar-container"),
  imageTargetSrc: './assets/marker.mind',
});

const {renderer, scene, camera} = mindarThree;
const anchor = mindarThree.addAnchor(0);
const iframe = document.getElementById("model-frame");

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
