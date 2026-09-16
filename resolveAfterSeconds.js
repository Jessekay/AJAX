function resolveAfterTwoSeconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfterTwoSeconds("10");
  console.log(x);
  
}

f1()