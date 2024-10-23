import React from 'react';
import './Discover.css'; 

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      price: '$2,188/month',
      address: '1005 Lower Delta Road #23-03 Singapore...',
      size: '3,971 sqft',
      availableBy: '01 Nov, 2024',
      rooms: 7,
      bathrooms: 1,
      furnishing: 'Fully Furnished',
      type: 'Condominium',
      unitType: 'Room',
      imgSrc: '', 
    },
    {
      id: 2,
      price: '$7,000/month',
      address: '1 North Bridge Road',
      size: '580 sqft',
      availableBy: 'Ready to move',
      rooms: 1,
      bathrooms: 1,
      furnishing: 'Fully Furnished',
      type: 'Condominium',
      unitType: 'Entire Unit',
      imgSrc: '', 
    },
    {
      id: 3,
      price: '$1,500/month',
      address: '25 Hazel Park Terrace Hazel Park Condominium',
      size: '150 sqft',
      availableBy: 'Ready to move',
      rooms: 1,
      bathrooms: 1,
      furnishing: 'Fully Furnished',
      type: 'Condominium',
      unitType: 'Room',
      imgSrc: '', 
    },
  ];

  return (
    <div className='margin-wrapper'>
      <div className="featured-properties">
        <h2>
          <span className="highlight">Discover</span> our featured properties
        </h2>

        <div className="properties-container">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.imgSrc} alt={property.address} className="property-img" />
              <div className="property-info">
                <div className="property-tags">
                  <span className="property-type">{property.type}</span>
                  <span className="unit-type">{property.unitType}</span>
                </div>

                <div className="property-price">{property.price}</div>
                <div className="property-address">{property.address}</div>
                
                <div className="property-details">
                  <span>{property.size}</span>
                  <span>Available by: {property.availableBy}</span>
                </div>

                <div className="property-amenities">
                  <span>{property.rooms} 🛏</span>
                  <span>{property.bathrooms} 🛁</span>
                  <span>{property.furnishing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Move the button outside of the map function */}
        <button className="view-all-btn">See all properties</button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
