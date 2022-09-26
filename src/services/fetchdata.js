class DragonService {
  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch from ${url}, status: ${res.status}`);
    }

    return await res.json();


  };


}

export default DragonService;
