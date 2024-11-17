function getAllData(updateProducts) {
  fetch("./productData.json")
    .then((res) => res.json())
    .then((data) => {
      updateProducts(data);

      console.log("data retrieved in the getAlldata", data);
      // console.log(updateProducts);
    });
}

function getFilteredData(updateProducts, cat) {
  fetch("./productData.json")
    .then((res) => res.json())
    .then((data) => {
      updateProducts(data.filter((product) => product.category === cat));
    });
}

export { getAllData, getFilteredData };
