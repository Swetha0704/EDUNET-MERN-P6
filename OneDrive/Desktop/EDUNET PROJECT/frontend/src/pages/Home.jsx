import React from "react";

const Home = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100 carousel-img"
              alt="Food 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100 carousel-img"
              alt="Food 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100 carousel-img"
              alt="Food 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        {[
          {
            img: "https://www.pccmarkets.com/wp-content/uploads/2021/06/PCC-Shared-Meals-July-RedCurry-recipe-1600x900-1.jpg",
            title: "Veg Recipes",
            text: "Explore a variety of delicious vegetarian recipes packed with nutrients.",
          },
          {
            img: "https://www.foodandwine.com/thmb/byVZsChjc0hG9nU0CiUeESKZvxg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Angel-Food-Cake-with-Three-Berry-Compote-FT-RECIPE0323-541a780b871441e0ab14383ee38acc44.jpg",
            title: "Desserts",
            text: "Treat yourself with mouth-watering desserts for every occasion.",
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
            title: "Pizza Specials",
            text: "Try out different flavors of pizza, from classic to exotic.",
          },
          {
            img: "https://www.allrecipes.com/thmb/nhBZXVayy9BKH-3kNE6Q6WKzWeY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg",
            title: "Pasta Delights",
            text: "Savor a variety of pasta dishes with rich and creamy sauces.",
          },
        ].map((item, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img src={item.img} className="card-img-top fixed-size" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .carousel-img {
          height: 630px; 
          object-fit: cover;
        }
        .fixed-size {
          width: 100%;
          height: 300px; 
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Home;
