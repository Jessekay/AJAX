async function getData() {
  try {
    const response = await fetch('url');
    
    if (!response.ok) {
      throw new Error(`HTTP Error! ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed: error.message')
  }
}