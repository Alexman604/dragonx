import React from 'react';
import CarouselImages from '../../carousel/carousel';
import "./dragon-item.css"

const DragonItemByiD = ({ dragonId, onBack, data }) => {
    
    let index = data.findIndex((item) => item.id === dragonId);
    
    const {
      name,
        type,
      images,
      crew_capacity,
      dry_mass_kg,
      heat_shield: { dev_partner, material, size_meters, temp_degrees },
      launch_payload_mass,
      height_w_trunk,
        diameter,
      wiki
    } = data[index];
    
  return (
    <div className="dragon-info-wrapper">
      <div className="dragon-info">
        <button onClick={() => onBack()}>BACK</button>
        <h2>{name} info:</h2>
        <p> Type: {type}</p>
        <p> Crew capacity: {crew_capacity} ppl</p>
        <p> Dry mass: {dry_mass_kg} kg</p>
        <ul>
          Heat shield:
          <li>- development partner: {dev_partner}</li>
          <li>- material: {material}</li>
          <li> - size: {size_meters} m</li>
          <li>- temp {temp_degrees} &#xb0;</li>
        </ul>
        <p>Launch payload mass: {launch_payload_mass.kg} kg</p>
        <p>Height with trunks: {height_w_trunk.meters} m</p>
        <p> Diameter: {diameter.meters} m</p>
        <a target="_blank" rel="noreferrer" href={wiki}>
          MORE INFO (wiki)
        </a>
      </div>

      <CarouselImages images={images} />
    </div>
  );
};

export default DragonItemByiD;
