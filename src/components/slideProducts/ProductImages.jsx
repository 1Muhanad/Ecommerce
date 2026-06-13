function ProductImages({ products }) {
  return (
    <div className="imgs_item">
      <div className="big_img">
        <img id="big_img" src={products.images[0]} alt={products.title} />
      </div>

      <div className="small_img">
        {products.images.map((img, index) => (
          <div className="img_div_sm" key={index}>
            <img
              src={img}
              alt={products.title}
              onClick={() => (document.getElementById("big_img").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
