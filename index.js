async function loadData() {
  try {
    const res = await fetch("https://my-json-server.typicode.com/Chanont66/test_json2/leave_type");
    const data = await res.json();
    console.log("DATA:", data);
  } catch (err) {
    console.error("ERROR:", err);
  }
}

loadData();
