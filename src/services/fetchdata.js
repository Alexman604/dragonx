

class DragonServices {
  _API = "https://api.spacexdata.com/v4";

  getData = async (url) => {
    let data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Could not fetch from ${url}, status: ${data.status}`);
    }
    return await data.json();
  };

  getAbout = async () => {
    const about = await this.getData(`${this._API}/company`);
    return about;
  };

  getDragons = async () => {
    const dragons = await this.getData(`${this._API}/dragons`);
    return dragons.map(this._transformDragon);
  };

  getDragonById = async (id) => {
    const dragon = await this.getData(`${this._API}/dragon/${id}`);
    return this._transformDragon(dragon);
  };

  getCrewAll = async () => {
    const crew = await this.getData(`${this._API}/crew`);
    return crew.map(this._transformEmployee);
  };

  getCrewEmployee = async (id) => {
    const employee = await this.getData(`${this._API}/crew/${id}`);
    return this._transformEmployee(employee);
  };

  _transformEmployee = (employee) => {
    return {
      name: employee.name,
      image: employee.image,
      agency: employee.agency,
      wiki: employee.wikipedia,
      id: employee.id,
      launches: [...employee.launches]
    };
  };

  _transformDragon = (dragon) => {
    return {
      name: dragon.name,
      id: dragon.id,
      images: [...dragon.flickr_images],
      wiki: dragon.wikipedia,
      description: dragon.description,
      type: dragon.type,
      crew_capacity: dragon.crew_capacity,
      dry_mass_kg: dragon.dry_mass_kg,
      heat_shield: dragon.heat_shield ,
      launch_payload_mass: dragon.launch_payload_mass,
      height_w_trunk: dragon.height_w_trunk,
      diameter: dragon.diameter,

    };
  };
}

export default DragonServices;
