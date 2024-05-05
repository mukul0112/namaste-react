const ResCard = (props) => {
    const{resObj}=props;
    const {name,avgRating,cloudinaryImageId,costForTwo}=resObj?.info;
    const {deliveryTime}=resObj?.info?.sla;
    return (
      <div className="resCard">
        <img
          className="cardImage"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <div>
          <h4 style={{ marginTop: "5px" }}>{name}</h4>
          {/* <h5 style={{ fontSize: "13px", marginTop: "2px" }}>{cuisine.join(", ")}</h5> */}
          <h5>{deliveryTime} mins</h5>
          <h5>{costForTwo}</h5>
          <h5>{avgRating} star</h5>
        </div>
      </div>
    );
  };

export default ResCard;